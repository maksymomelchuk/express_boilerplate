import { ExpressConfig } from '@/express/config';
import dotenv from 'dotenv';
dotenv.config();

const app = ExpressConfig();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log('Server Running on Port' + PORT));
