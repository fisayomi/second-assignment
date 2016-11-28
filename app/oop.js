

var Car = function (name, model, type){
	this.type = type;
	this.model = model;
	this.name = name;
	if(this.name == 'Porshe' || this.name == 'Koenigsegg'){
			this.numOfDoors = 2;
		}
	else this.numOfDoors = 4;

	if(this.type == 'trailer'){
			this.numOfWheels = 8;
			this.isSaloon = false;
			this.speed = '0 km/h';
		}
	else {
		this.numOfWheels = 4;
		this.isSaloon = true;
	}
	

	if(this.name === undefined){
		this.name = 'General';
		this.model = 'GM';
	}
	
}



Car.prototype.drive = function (num){

	if(num == 5){
			this.speed = '250 km/h';
		}
		else if (num == 7){
			this.speed = '77 km/h';
		}
		return this;
	}


module.exports = {Car:Car}

//SECOND METHOD

/*class Car {
	constructor(name,model,type){
		this.name = name;
		this.model = model;
		this.type = type;

		if(this.name == 'Porshe' || this.name == 'Koenigsegg'){
			this.numOfDoors = 2;
		}
		else this.numOfDoors = 4;

		if(this.type == 'trailer'){
				this.numOfWheels = 8;
				this.isSaloon = false;
			}
		else {
			this.numOfWheels = 4;
			this.isSaloon = true;
		}
		

		if(this.name == undefined){
			this.name = 'General';
			this.model = 'GM';
		}
		this.speed = '0 km/h';

	}

	

	drive(num){
		if(num == 5){
			this.speed = '250 km/h';
		}
		else if (num == 7){
			this.speed = '77 km/h';
		}
		return this;
	}


}*/