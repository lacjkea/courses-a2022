//TODO: den her kunne være svaret på kun at uploade ændringer
//https://github.com/simonh1000/ftp-deploy/pull/117
require("dotenv").config();
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_USER,
  // Password optional, prompted if none given
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 22,
  localRoot: process.env.LOCAL_ROOT,
  remoteRoot: process.env.REMOTE_ROOT,
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*"], //*.php", "dist/*", ".*
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: true,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
