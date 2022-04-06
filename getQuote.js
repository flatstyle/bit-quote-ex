import fetch from 'node-fetch';

async function getQuote(ticker) {
  const url = `https://quadency.com/api/v1/public/exchanges/markets?exchange=${ticker}`;

  return await(await fetch(url)).json();
}

export default getQuote;
