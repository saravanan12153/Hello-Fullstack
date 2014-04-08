function Mammal(name){
	this.name = name;
	this.offspring = [];
}

function Cat(name, color){
	Cat.prototype = new Mammal;
	Cat.prototype.constructor = Mammal;
	this.name = name;
	this.color = color;
	this.haveBaby = function(color){
		var babyName = "Baby " + this.name;
		var thisBaby = new Mammal(babyName);
		thisBaby.color = color;
		this.offspring.push(thisBaby);
		return thisBaby;
	}
}

Mammal.prototype = {
	sayHello: function(){return "My name is " + this.name + ", I'm a Mammal";},
	haveBaby: function(){
		var babyName = "Baby " + this.name;
		var thisBaby = new Mammal(babyName);
		this.offspring.push(thisBaby);
		return thisBaby;
	}	
}