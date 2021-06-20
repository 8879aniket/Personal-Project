let env = process.env.MODE_ENV || "Development";

const config = require("./config.json");
let envConfig = config[env];
Object.keys(envConfig).forEach((key) => {
  process.env[key] = envConfig[key];
});
