// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

	var sum = currency;

	if(sum > 10000){
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	}
	else if(sum <= 0){
		return {};
	}
	else{
		var H = 0, Q = 0, D = 0, N = 0 , P = 0;
		if(sum % 50 == 0){
			H = sum  / 50;
			sum  = 0;
		}
		else if (sum % 50 != 0){
			H = (sum - (sum % 50)) / 50; 
			sum  = sum % 50;
		}
		else {
			H = 0;
		}
		if(sum % 25 == 0){
			Q = sum  / 25;
			sum  = 0;
		}
		else if (sum % 25 != 0){
			Q = (sum - (sum % 25)) / 25; 
			sum  = sum % 25;
		}
		else {
			Q = 0;
		}
		if(sum % 10 == 0){
			D = sum  / 10;
			sum  = 0;
		}
		else if (sum % 10 != 0){
			D = (sum - (sum % 10)) / 10;  
			sum  = sum % 10;
		}
		else {
			D = 0;
		}

		if(sum % 5 == 0){
			N = sum  / 5;
			sum  = 0;
		}
		else if (sum % 5 != 0){
			N = (sum - (sum % 5)) / 5; 
			sum  = sum % 5;
		}
		else {
			N = 0;
		}

	if(sum % 1 == 0){
		P  = sum / 1;
	}

	var obj = { H: H, Q: Q, D: D, N: N, P: P };

	for (var key in obj) {
		if(obj[key] == 0){
			delete obj[key];
		}
	}

		return obj;
	}
}
