import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors())

app.get('/', (req,res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log('Server running at localhost:' +port);
});
