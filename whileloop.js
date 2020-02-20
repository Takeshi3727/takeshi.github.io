//最初の番号-10の定義付
var num = -10;

while(num < 20){
console.log(num);
num++;
}


var num = 10;
//even numbers = 偶数にする 2づつ増える
while(num <= 40){
  console.log(num);
  num += 2; 
}

var num = 300;
//ループ処理 奇数(2で割り切れない)
while(num <= 333) {
  if(num % 2 !== 0){
    console.log(num);
  }
  num+=1;
}

var num = 5;
//5で割り切れるかつ3で割り切れる
while(num <= 50) {
  if(num % 5 == 0 && num % 3 == 0){
    console.log(num);
  }
  num++;
}
