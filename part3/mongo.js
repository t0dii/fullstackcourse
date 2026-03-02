const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}
const password = process.argv[2];

const url = `mongodb+srv://etanli388_db_user:${password}@cluster0.p2twwfq.mongodb.net/phonebookApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", true);
mongoose.connect(url, { family: 4 });
const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Persons = mongoose.model("Persons", phoneSchema);

const phone = new Persons({
  name: "Ethan",
  number: "040102323",
});

if (process.argv.length === 3) {
  console.log("phonebook");
  Persons.find({}).then((result) => {
    result.forEach((Persons) => {
      console.log(Persons);
    });
    mongoose.connection.close();
  });
} else if (process.argv.length === 5) {
  console.log("list");
  const name = process.argv[3];
  const number = process.argv[4];
  const newPerson = new Persons({ name, number });
  newPerson.save().then((result) => {
    console.log("person saved");
    mongoose.connection.close();
  });
} else {
  console.log("please provide a valid command");
  process.exit(1);
}
