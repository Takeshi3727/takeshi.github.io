// liを洗濯した時の定義付け
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
  // マウスオーバー時の動作
  lis[i].addEventListener("mouseover", function(){
    this.classList.add("selected");
  });

  // マウスアウト時の動作
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove("selected");
  });

  // クリックして、完了した時の動作
  lis[i].addEventListener("click", function(){
    this.classList.toggle("done");
  });
}
