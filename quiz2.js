//問題文
const question = 'Aは？';
document.getElementById("js-question").innerText = question;
//答え
const correct = "A";
//回答一覧の代入
const answers = [
	"A",
	"B",
	"C",
	"D"
];
document.getElementById("btn0").innerText = answers[0];
document.getElementById("btn1").innerText = answers[1];
document.getElementById("btn2").innerText = answers[2];
document.getElementById("btn3").innerText = answers[3];
//クリックイベントと正誤判定のif文
document.getElementById("btn0").addEventListener("click",() => {
if (correct === document.getElementById("btn0").innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});

document.getElementById("btn1").addEventListener("click",() => {
if (correct === document.getElementById("btn1").innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});

document.getElementById("btn2").addEventListener("click",() => {
if (correct === document.getElementById("btn2").innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});

document.getElementById("btn3").addEventListener("click",() => {
if (correct === document.getElementById("btn3").innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});