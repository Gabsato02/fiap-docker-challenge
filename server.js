import app from './src/app.js';

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});