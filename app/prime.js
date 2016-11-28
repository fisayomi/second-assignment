function getPrime(num){

	if (num < 2) {
		return 'Invalid Input';
	}

	else if(num == null || num == undefined){
		return 'no value';
	}
	else if(isNaN(num)){
		return 'Invalid Input';
	}

	var primeArray = [2]; var isPrime;
	for(var i = 1; i <= num ; i++){
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

module.exports ={getPrime:getPrime}