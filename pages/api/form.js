import nextConnect from 'next-connect';
import fs from 'fs';
import path from 'path';
import validate from 'backend-util/middleware/form';

const handler = nextConnect();

const currentDir = process.cwd();
const dataPath = path.join(currentDir, '/backend-util/data/data.txt');

handler.get(async (req, res) => {
  try {
    const data = fs.readFileSync(dataPath);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

handler.use(validate).post(async (req, res) => {
  try {
    const stream = fs.createWriteStream(dataPath);
    stream.once('open', () => {
      stream.write(`${req.body.fullname}\n`);
      stream.write(`${req.body.email}\n`);
      stream.write(`${req.body.message}\n`);
      stream.end();
    });
    res.send('success');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

export default handler;
