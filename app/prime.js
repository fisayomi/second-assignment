function getPrime(num){

	if(num === null || num === undefined){
		return 'no value';
	}

	else if (num < 2) {
		return 'Invalid Input';
	}
	else if(isNaN(num)){
		return 'Invalid Input';
	}

	else{
		var primeArray = [2]; var isPrime;
		for(var i = 2; i <= num ; i++){
		  for(var j = 2; j < i ; j++){
		    if(i % j === 0){
		      isPrime = false;
		      break;
		    }
		    else {
		     isPrime = true;
		    }
		  }
		  if(isPrime){
		    primeArray.push(i);
		  }
			
		}

	return primeArray;
	}

	

}

module.exports ={getPrime:getPrime}