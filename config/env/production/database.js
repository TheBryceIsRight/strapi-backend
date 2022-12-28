module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`, // for a MySQL database
        // ⚠️ For a PostgreSQL database, use socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}` instead
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {},
    },
  },
});
