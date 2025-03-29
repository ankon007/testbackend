const Shipment = require('../models/shipment.model');

const getshipments = async (req, res) => {
    try {
        const shipments = await Shipment.find({});
        res.status(200).json(shipments);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log({ message: error.message });
    }
};

const singleshipment = async (req, res) => {
    try {
        const { shipment_id } = req.params;
        const singleShipment = await Shipment.findById(shipment_id);
        if (!singleShipment) {
            return res.status(404).json({ message: "No shipment found" });
        }
        res.status(200).json(singleShipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createsingleshipment = async (req, res) => {
    try {
        const newShipment = await Shipment.create(req.body);
        res.status(201).json(newShipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatesingleshipment = async (req, res) => {
    try {
        const { shipment_id } = req.params;
        const updatedShipment = await Shipment.findByIdAndUpdate(shipment_id, req.body, { new: true });
        if (!updatedShipment) {
            return res.status(404).json({ message: "No shipment found" });
        }
        res.status(200).json(updatedShipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletesingleshipment = async (req, res) => {
    try {
        const { shipment_id } = req.params;
        const deletedShipment = await Shipment.findByIdAndDelete(shipment_id);
        if (!deletedShipment) {
            return res.status(404).json({ message: "No shipment found" });
        }
        res.status(200).json({ message: "shipment deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getshipments,
    singleshipment,
    createsingleshipment,
    updatesingleshipment,
    deletesingleshipment
};
