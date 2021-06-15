module.exports = ({ fetcher }) => ({ url, method }, callback) => fetcher(url, method)
  .then((data) => data.json())
  .then((data) => callback(data))
  .catch((err) => console.log(err));
