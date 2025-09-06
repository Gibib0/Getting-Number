'use stirct'
debugger

// function getNumber(number) {
// 	if(number === 1) {
// 		return '1'
// 	}
// 	if(number < 1) {
// 		return null
// 	}

// 	let result
	
// 	result = getNumber(number - 5)
// 	if(result !== null) {
// 		return '(' + result + ' + 5)'
// 	}

// 	if(number % 3 === 0) {
// 		result = getNumber(number / 3)
// 		if(result !== null) {
// 			return '(' + result + ' * 3)'
// 		}
// 	}

// 	return null
// }

function getNumber(target) {
	function find(current, string) {
		if(current === target) {
			return string
		}
		if(current > target) {
			return null
		}
		return (
			find(current + 5, `(${string} + 5)`) || 
			find(current * 3, `(${string} * 3)`)
		)
	}
	return find(1, '1')
}

console.log(getNumber(13));
console.log(getNumber(12));
console.log(getNumber(26));
console.log(getNumber(-1));
console.log(getNumber(1));