import LogsRoutes from './routes/LogsRoutes.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const uri = "mongodb+srv://andrew319t:password1234@cluster0.r9cq1pd.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/logs", LogsRoutes);

const PORT = process.env.port || 8000;

mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));
