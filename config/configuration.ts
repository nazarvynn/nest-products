export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost/nest-products',
  },
});
