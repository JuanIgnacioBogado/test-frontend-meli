import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';

const app = express();

const {PORT} = process.env;

app.use(cors());
app.use('/api/items', routes);

app.listen(PORT, () => console.log('Server on Port', PORT));
