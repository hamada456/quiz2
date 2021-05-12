//変数
let unko = "hello world";

//定数
const bigUnko = "he";

//配列
const inoki = ["いーち","にー","さーん","ダー！"];

/*//ループ文
let index = 0;
while(index < inoki.length){ //=4
	//繰り返したい命令
	console.log(inoki[index]);
	index++; //index = 5
}*/

//if / else
/*if(inoki.length > 5){
	console.log("ボンバイエ");
}else{
	console.log("ボンバ...");
}
*/
//関数
const test = (arg) => {
	//ここに実行したい命令を書く
	if(inoki.length > 5){
	console.log("ボンバイエ");
	}else{
	console.log("ボンバ...");
}
};

//オブジェクト
const unko2 = {
	color: "pink",
	size: "large",
	puefume: "mint",
	goToilet: () => {
		console.log("hello");
	}
};

document.getElementsByTagName("button")[0].addEventListener("click",()=>{

	window.alert("hello");
});








