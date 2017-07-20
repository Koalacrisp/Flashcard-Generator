function ClozeCard(text, cloze){
	this.partial = "..." + text;
	this.cloze = cloze;
	this.text = cloze + text;
}

var vampireActor = new ClozeCard("\n starred in Interview with a Vampire alongside Tom Cruise", "Brad Pitt");
var psychoActor = new ClozeCard("\n played as a yuppie, narcissistic serial killer in the movie American Psycho", "Christian Bale");
var chopperActor = new ClozeCard("\n had the famous quote 'Get to the chopper!' in the movie Predator", "Arnold Schwarzenegger");
var alienActor = new ClozeCard("\n had her first big debut in the film industry as Ellen Ripley in Alien", "Sigourney Weaver");
var requiemActor = new ClozeCard("\n starred in one of the leading roles as Harry Goldfarb in the movie Requiem for a Dream", "Jared Leto");

module.exports = ClozeCard;

var inquirer = require("inquirer")

inquirer.prompt([
	{
		type: "input",
		name: "question1",
		message: vampireActor.partial,
	},
	{
		type: "input",
		name: "question2",
		message: psychoActor.partial,
	},
	{
		type: "input",
		name: "question3",
		message: chopperActor.partial,
	},
	{
		type: "input",
		name: "question4",
		message: alienActor.partial,
	},
	{
		type: "input",
		name: "question5",
		message: requiemActor.partial,
	}

	]).then(function (answers) {
    	if (answers.question1 == vampireActor.cloze){
    		console.log("Question 1: Correct!")
    	}else{
    		console.log("Question 1: Incorrect!")
    	};
    	if (answers.question2 == psychoActor.cloze){
    		console.log("Question 2: Correct!")
    	}else{
    		console.log("Question 2: Incorrect!")
    	};
    	if (answers.question3 == chopperActor.cloze){
    		console.log("Question 3: Correct!")
    	}else{
    		console.log("Question 3: Incorrect!")
    	};
    	if (answers.question4 == alienActor.cloze){
    		console.log("Question 4: Correct!")
    	}else{
    		console.log("Question 4: Incorrect!")
    	};
    	if (answers.question5 == requiemActor.cloze){
    		console.log("Question 5: Correct!")
    	}else{
    		console.log("Question 5: Incorrect!")
    	};
});