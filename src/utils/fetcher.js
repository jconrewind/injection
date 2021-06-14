const fetch = require('node-fetch');

module.exports = {
  get: (url) => fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err)),

  post: (url, body) => fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err)),
};
