const fs = require('fs');

exports.heartbeat = (res) => {
  fs.readFile('version', (err, data) => {
    if (err?.code === 'ENOENT') {
      return res.send({ version: 'undefined' });
    }
    return res.send({ version: data.toString() });
  });
};

exports.file = (_, res) => {
  fs.readFile('MOCK_DATA.json', (err, data) => {
    if (err?.code === 'ENOENT') {
      return res.send({ version: 'undefined' });
    }
    return res.send({ version: data.toString() });
  });
};
