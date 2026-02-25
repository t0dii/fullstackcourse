const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url =
  "mongodb+srv://etanli388_db_user:<db_password>@cluster0.p2twwfq.mongodb.net/?appName=Cluster0";
