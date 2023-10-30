import LogsModel from '../models/LogsModel.js';

export const postLogs = async (req, res) => {
    console.log(req.body);
    const data = req.body;
    const logs = new LogsModel(data);
    try {
        await logs.save();
        res.status(201).json(logs);
    } catch (error) {
        console.log(error);
    }
} 