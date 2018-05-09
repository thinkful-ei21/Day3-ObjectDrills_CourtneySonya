'use strict';


//QUESTION 1 ---------------------------------------------

// let loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return this.water / this.flour * 100;
//   }
// }

// console.log(`${loaf.flour}, ${loaf.water}`);
// console.log(loaf.hydration);



//QUESTION 2 ---------------------------------------------

const obj = {
	foo: 1,
	bar: 2,
	fum: 3,
	quux: 'none',
	spam: true
}

function showProperty(obj) {

	for (let key in obj) {
		console.log(`${key}: ${obj[key]}`);
	}

}

showProperty(obj);






















