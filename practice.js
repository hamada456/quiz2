//問題文
const question = 'Aは？';
document.getElementById("js-question").innerText = question;
//答え
const correct = "A";
//回答一覧の代入
const answers = [
	["A" , "btn0"],
	["B" , "btn1"],
	["C" , "btn2"],
	["D" , "btn3"]
];

document.getElementById("btn0").innerText = answers[0][0];
document.getElementById("btn1").innerText = answers[0][0];

document.getElementById("btn0").addEventListener("click",(e) => {
if (correct === e.target.innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});

document.getElementById("btn１").addEventListener("click",(e) => {
if (correct === e.target.innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});
