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

// const obj = {
//   foo: 1,
//   bar: 2,
//   fum: 3,
//   quux: 'none',
//   spam: true
// };

// function showProperty(obj) {

//   for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }

// }

// showProperty(obj);


//QUESTION 3 -----------------------------------------------

// const hobbit = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }

// console.log(hobbit.meals[3]);




//QUESTION 4 -----------------------------------------------

// const peopleList = [
// 	{
// 		name: 'Courtney',
// 		jobTitle: 'Thinkful Student'
// 	},

// 	{
// 		name: 'Sonya',
// 		jobTitle: 'Farmer'
// 	},

// 	{
// 		name: 'Rich',
// 		jobTitle: 'Teacher'
// 	},

// 	{
// 		name: 'Bill Nye',
// 		jobTitle: 'Scientist'
// 	}

// ];

// function showPersonAndJob(people) {
// 	for (let i = 0; i < people.length; i++) {
// 		console.log(`${people[i].name}: ${people[i].jobTitle}`);
// 	}
// }

// showPersonAndJob(peopleList);



// Question 5 --------------------------------------------------------------

// const peopleList = [
//   {
//     name: 'Courtney',
//     jobTitle: 'Thinkful Student'
//   },

//   {
//     name: 'Sonya',
//     jobTitle: 'Farmer',
//     boss: 'Courtney'
//   },

//   {
//     name: 'Rich',
//     jobTitle: 'Teacher',
//     boss: 'Sonya'
//   },

//   {
//     name: 'Bill Nye',
//     jobTitle: 'Scientist',
//     boss: 'Nature'
//   }

// ];

// function showPersonAndJob(people) {
//   for (let i = 0; i < people.length; i++) {
//     if (!people[i].boss) {
//       console.log(`${people[i].jobTitle} ${people[i].name} doesn't report to anybody.`);
//     } else {
//       console.log(`${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss}`);
//     }
//   }
// }
// showPersonAndJob(peopleList);


//QUESTION 6 -----------------------------------------------

// function decode(phrase) {
//     // breakup prhase into each word
//     let array1 = phrase.split(' ');
//     console.log(array1);

//     // loop thru each word and return a letter for each, based on the code table
//     let array2 = [];

//     array1.forEach(each => {
//         if(each[0] === 'a') {
//             array2.push(each[1]);
//         }
//         else if(each[0] === 'b') {
//             array2.push(each[2]);
//         }
//         else if(each[0] === 'c') {
//             array2.push(each[3]);
//         }
//         else if(each[0] === 'd') {
//             array2.push(each[4]);
//         }
//         else array2.push(' ');
//     });

//     // return the end result, which is the secret code
//     let result = array2.join('');
//     return result;
//     console.log(array2);
// }

// decode('craft block argon meter bells brown croon droop');




const cipher = {
	a: 2,
	b: 3,
	c: 4,
	d: 5
};

function decode(word) {

	console.log(cipher);

	if (word.charAt(0) in cipher) {
		
		//return word.charAt(cipher.word.charAt(0));
	}
	return ' ';
}

console.log(cipher.a);

















