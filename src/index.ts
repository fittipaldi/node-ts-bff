import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './interfaces/http/routes/routes';
import path from "path";

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
// Use CORS middleware
app.use(cors()); // This will allow all origins

// version 1
app.use('/v1', routes);

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
