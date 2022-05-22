module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: "postgres",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
};
