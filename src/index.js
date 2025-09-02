'use stirct'

let number = 1

function getNumber(number) {
	if(number == 1) {
		return '1'
	} else if(number < 1) {
		return null
	}

	let result
	
	result = getNumber(number - 5)
	if(result != null) {
		return '(' + result + ' + 5)'
	}

	if(number % 3 == 0) {
		result = getNumber(number / 3)
		if(result != null) {
			return '(' + result + ' * 3)'
		}
	}

	return null
}
