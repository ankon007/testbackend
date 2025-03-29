const tracking = require('../models/tracking.model'); // Ensure the path is correct and the model is properly exported

const gettrackings = async (req, res) => {
    try {
        const trackings = await tracking.find();
        res.status(200).json(trackings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const singletracking = async (req, res) => {
    try {
        const { track_id } = req.params;
        const singleTracking = await tracking.findById(track_id);
        if (!singleTracking) 
            return res.status(404).json({ message: "No tracking found" });
        res.status(200).json(singleTracking);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createsingletracking = async (req, res) => {
    try {
        const newTracking = await tracking.create(req.body);
        res.status(201).json({ tracking: newTracking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatesingletracking = async (req, res) => {
    try {
        const { track_id } = req.params;
        const updatedTracking = await tracking.findByIdAndUpdate(track_id, req.body, { new: true });
        if (!updatedTracking) 
            return res.status(404).json({ message: "No tracking found" });
        res.status(200).json({ tracking: updatedTracking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletesingletracking = async (req, res) => {
    try {
        const { track_id } = req.params;
        const deletedTracking = await tracking.findByIdAndDelete(track_id);
        if (!deletedTracking) {
            return res.status(404).json({ message: "No tracking found" });
        }
        res.status(200).json({ message: "Tracking deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    gettrackings,
    singletracking,
    createsingletracking,
    updatesingletracking,
    deletesingletracking
};