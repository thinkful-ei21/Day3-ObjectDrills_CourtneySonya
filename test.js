// 'use strict';

// const cipher = {
// 	a: 2,
// 	b: 3,
// 	c: 4,
// 	d: 5
// };

// function decode(word) {

// 	let firstLetter = word.charAt(0);
	

// 	if (firstLetter in cipher) {
// 		return word.charAt(cipher[firstLetter] - 1);
// 	}
// 	return ' ';
// }

// //console.log(decode("apple"));

// let str = 'craft block argon meter bells brown croon droop';


// function decodeWords(string) {

	
// 	return string.split(' ').reduce((decodedMessage, word) => decodedMessage + decode(word), '');

// }

// console.log(decodeWords(str));
'use strict';    
function createCharacter(name, nickname, race, origin, attack, defense) {
  if (!name || !nickname || !race || !origin || !attack || !defense) {
    throw new TypeError('incorrect input');
  } else {
    return {
      name, nickname, race, origin, attack, defense,
      describe: function() {
        return (`${this.name} is a ${race} from ${origin}.`);
      },
      evaluateFight: function(character) {
        let x, y;
        x = this.attack - character.defense;
        y = this.defense - character.attack;
        return `Your opponent takes ${x} damage and you receive ${y} damage.`;
      }
			
    };
  }
}



const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);

const characters = [gandalf, bilbo,
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createCharacter('Arwen Undomiel', 'arwy', 'Half-Elf', 'Rivendell', 5, 4)
];

const aragorn = characters.find(element => element.nickname === 'aragorn');
console.log(aragorn.describe());


// console.log(gandalf.describe());
// console.log(gandalf.evaluateFight(bilbo));
// console.log(characters);