const mongoose=require("mongoose")
const PersonShema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFoods: { type: [String] },
  });
const Person = mongoose.model('Person',PersonShema)
module.exports= Person

const person = new PersonModel({
    name: "John Doe",
    age: 30,
    favoriteFoods: ["pizza", "pasta", "burgers"],
  });
  person.save((err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Personne enregistrée :", data);
    }
  });
  const arrayOfPeople = [
    { name: 'Ali', age: 30, favoriteFoods: ['Sushi', 'Pasta'] },
    { name: 'Baya', age: 22, favoriteFoods: ['Steak', 'Ice Cream'] },
  ];
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Personnes enregistrées :", data);
    }
  });
  Person.find({ name: "Ali" }, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Personnes trouvées :", data);
    }
  });
  Person.findOne({ favoriteFoods: ["burritos"] }, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Personne trouvée :", data);
    }
  });
  Person.findById(person._id, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Personne trouvée :", data);
    }
  });
  const personId = person._id
  Person.findById(personId, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      data.favoriteFoods.push("hamburger");
      data.save((err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Personne mise à jour :", data);
        }
      });
    }
  });
  const personName = "Baya";

Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Personne mise à jour :", data);
  }
});
Person.findByIdAndRemove(personId, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Personne supprimée :", data);
    }
  });
  const nameToDelete = 'Mary';

Person.remove({ name: nameToDelete }, function(err, result) {
  if (err) return console.error(err);
  console.log('Deleted', result.deletedCount, 'people named', nameToDelete);
});
Person.find({ favoriteFoods: 'Burritos' })
  .sort('name')
  .limit(2)
  .select('-age')
  .exec(function(err, data) {
    if (err) return console.error(err);
    console.log('Search results:', data);
  });