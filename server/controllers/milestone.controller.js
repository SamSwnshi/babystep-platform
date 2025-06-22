import Milestone from "../models/milestones.models.js";

export const getMilestone = async (req, res) => {
  try {
    const mileStone = await Milestone.find();
    return res.json(mileStone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMilestone = async (req, res) => {
  try {
    const { title, date, note } = req.body;
    const milestone = await Milestone.create({
      userId: req.user.id,
      title,
      date,
      note,
    });
    res.status(201).json(milestone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const editMilestone = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Milestone.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteMilestone = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Milestone.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
