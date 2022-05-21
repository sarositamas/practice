const findTheOldest = function(people) {

  let d = new Date();
  let year = d.getFullYear();

  people.map(function (person){

      person.age = true;

      if('yearOfDeath' in person === true){
        return person.age = person.yearOfDeath - person.yearOfBirth;
      }else{
      return person.age = year - person.yearOfBirth;
    }

  })

  people.sort(function (a, b){return b.age - a.age});

  return people[0];
}

// Do not edit below this line
module.exports = findTheOldest;
