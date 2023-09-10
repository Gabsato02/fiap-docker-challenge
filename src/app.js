import express from 'express';
import connection from './config/dbConnection.js';
import routes from './routes/index.js';

connection.on('error', console.log.bind(console, 'Connection error...'));

connection.once('open', () => {
  console.log('Database connection stablished...');
});

const app = express();

app.use(express.json());

routes(app);

export default app;