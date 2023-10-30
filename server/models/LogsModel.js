import mongoose from 'mongoose';

const LogsSchema = mongoose.Schema({
    logs: String,
});

const LogsModel = mongoose.model('LogsMessage', LogsSchema);

export default LogsModel;