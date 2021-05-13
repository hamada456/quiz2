//問題
const quiz = [
	{ question:"Aはどれ？",
	  answers:["A","B","C","D"],
	  correctAnswer:"A"
	}
];

document.getElementById("js-question").innerText = quiz[0].question;

let s = 0;
const a = "btn" + s;

let btnlen = $button.length;

let index = 0;
while(index < btnlen){
document.getElementById(a).innerText = quiz[0].answers[0];
index++;
s++;
}


document.getElementById("btn1").innerText = quiz[0].answers[1];
document.getElementById("btn2").innerText = quiz[0].answers[2];
document.getElementById("btn3").innerText = quiz[0].answers[3];

console.log()