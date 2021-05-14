//問題
const quiz = [
	{ question:"Aはどれ？",
	  answers:["A","B","C","D"],
	  correctAnswer:"A"
	}
];
//クイズ本文
document.getElementById("js-question").innerText = quiz[0].question;

//子要素ボタンの数を取得(.childElementCount)
const $btnlen = document.getElementById("htmlanswersP").childElementCount;

//回答ボタン４つ
let index = ansNum = s = 0;

while(index < $btnlen){;
let btnNum = "btn" + s;
document.getElementById(btnNum).innerText = quiz[0].answers[ansNum];
index++,s++,ansNum++;
};

//正誤判定
const judgment = (e) =>{
	if(quiz[0].answers[0] === e.target.innerText){
		window.alert("正解");
	}else{
		window.alert("不正解");
	}
};


//正誤判定ボタン1
document.getElementById("btn0").addEventListener("click",(e)=>{
	judgment(e);
});
//正誤判定ボタン2
document.getElementById("btn1").addEventListener("click",(e)=>{
	judgment(e);
});
//正誤判定ボタン3
document.getElementById("btn2").addEventListener("click",(e)=>{
	judgment(e);
});
//正誤判定ボタン4
document.getElementById("btn3").addEventListener("click",(e)=>{
	judgment(e);
});
