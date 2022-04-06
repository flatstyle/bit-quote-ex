import express from 'express';
import getQuote from './getQuote.js';
const app = express();
const port = 8080;

app.get('/:ticker', async (req, res) => {
  const quote = await getQuote(req.params.ticker);
  res.send(quote);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
