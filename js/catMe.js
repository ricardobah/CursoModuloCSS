var catMe = require("cat-me");
var joke = require("knock-knock-jokes");
var faker = require('faker');

console.log(catMe());
console.log(joke());


for(var i=0;i<10;i++){

    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    console.log(randomName +" "+randomEmail+" "+randomCard);
}