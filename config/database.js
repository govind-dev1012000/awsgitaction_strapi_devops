module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'database-1.cxbyhimxz5up.ap-south-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'demodb'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Password33355'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '172.17.19.25'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'kupexdb'),
//       user: env('DATABASE_USERNAME', 'kupexuser'),
//       password: env('DATABASE_PASSWORD', 'kupex@123'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });