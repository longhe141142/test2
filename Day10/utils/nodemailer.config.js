const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const config_transport = JSON.parse(process.env.TRANSPORTER);
const main_option = JSON.parse(process.env.MAIN_OPTION);

const TransporterOptions = {
  host: config_transport.host,
  port: config_transport.port,
  secure: config_transport.secure,
  auth: config_transport.auth,
  tls: {
    rejectUnauthorized: false,
  },
};

const mainOptions = {
  ...main_option,
};

module.exports = { TransporterOptions, mainOptions };
