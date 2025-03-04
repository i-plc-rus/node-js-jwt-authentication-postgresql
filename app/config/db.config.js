module.exports = {
  HOST: "127.0.0.1",
  USER: "postgres",
  PASSWORD: "docker",
  DB: "test_db",
  dialect: "postgres",
  port: "30904",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};