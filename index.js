import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const hostname = "localhost";

app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cors({origin: '*'}));

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.use('/api', routes);

app.listen(port, hostname, () => {
    console.log("Server started!");
});
