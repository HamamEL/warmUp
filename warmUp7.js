// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
function add(string){
	
		var x =  'Hamam'
		var y =  'Elmuratdh'
	
	return x + ' ' + y;}

function check(number){
	for (let i = 0; i < number; i ++){
		if(Number.isInteger(number / 3)){
			return number;
		}
	}		return "number is not multiplay of 3"
}
function cal(array){
	var x = [13,14,13,15,16,17,19,13,16,15];
	var y = [];
	for (i = 0; i <array.length; i ++){
		array = array[i] / array.length;
		y.push(array)
	}

		return array;
}
function myAgeInSec(n){
	var x = 25;
	var y = 25 * 365 * 24 * 60 * 60;

return y;
}
