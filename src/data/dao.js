module.exports = ({ client }) => ({
  retrieveAll: async (table, callback) => {
    client.create();
    await client.connection();
    client.queryAll(table, callback);
    client.close();
  },
  retrieveOne: async () => {
    client.create();
    await client.connection();
    client.queryOne();
    client.close();
  },
});
