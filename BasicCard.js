function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

var vampireActor = new BasicCard("Who starred in Interview with a Vampire alongside Tom Cruise?", "Brad Pitt");

console.log(vampireActor.front);
console.log(vampireActor.back);

module.exports = BasicCard;