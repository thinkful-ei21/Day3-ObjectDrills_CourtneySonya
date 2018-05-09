'use strict';

const cipher = {
	a: 2,
	b: 3,
	c: 4,
	d: 5
};

function decode(word) {

	let firstLetter = word.charAt(0);
	

	if (firstLetter in cipher) {
		return word.charAt(cipher[firstLetter] - 1);
	}
	return ' ';
}

//console.log(decode("apple"));

let str = 'craft block argon meter bells brown croon droop';


function decodeWords(string) {

	
	return string.split(' ').reduce((decodedMessage, word) => decodedMessage + decode(word), '');

}

console.log(decodeWords(str));