//問題
const quiz = [
	{ question:"Aはどれ？",
	  answers:["A","B","C","D"],
	  correctAnswer:"A"
	}
];

document.getElementById("js-question").innerText = quiz[0].question;

//子要素ボタンの数を取得
let btnlen = document.getElementById("htmlanswers").childElementCount;

let index = 0;
let b = 0;
let s = 0;

while(index < btnlen){;
let a = "btn" + s;
document.getElementById(a).innerText = quiz[0].answers[b];
index++;
s++;
b++;
};

