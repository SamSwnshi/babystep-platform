import Tip from "../models/tip.models.js";
import Milestone from "../models/milestones.models.js";

export const getAllTips = async (req, res) => {
  try {
    const tips = await Tip.find().populate({
        path: 'milestoneId',
        select: 'title'
    }).populate({
        path: 'userId',
        select: 'username'
    }).sort({ createdAt: -1 });
    res.json(tips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTips = async (req, res) => {
  try {
    const { id } = req.params;
    const tips = await Tip.find({ milestoneId: id });
    console.log(tips)
    return res.json(tips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const addTip = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const tip = await Tip.create({
      milestoneId: id,
      userId: req.user.id,
      content,
    });
    res.status(201).json(tip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const likeTips = async (req, res) => {
  try {
    const { id } = req.params;
    const tip = await Tip.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!tip) return res.status(404).json({ message: "Tip not found" });
    res.json(tip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
