module.exports = {
  db: {
    pg: {
      name: 'pg',
      settings: {
        user: 'ju',
        host: 'localhost',
        database: 'first',
        password: 'ksio9',
        port: 5432,
      },
    },
  },
  fetch: {
    get: {
      json: {
        url: 'http://localhost:20026/v1/json',
      },
    },
    post: {
      post: {
        url: 'http://localhost:20026/v1/post',
        method: {
          method: 'post',
          body: null,
          headers: { 'Content-Type': 'application/json' },
        },
      },
    },

  },
};
