// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
function countoccurence(string){
	var result = ' ';
	var object = {};
	for ( var i =0; i < string.length; i++){
		if ( object[string[i]] === undefined){
			object[string[i]] = 1;
		}else{
			object[string[i]] += 1;
		}
}
	for( key in object)
	x = object[key];
	for ( var j = 1; j <= x; j++){
	result += j; } 
return result; }
