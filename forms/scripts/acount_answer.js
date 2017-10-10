$(document).ready(function(){
	$(".item1").hide();
	$(".item2").hide();
	$(".item3").hide();
	$(".item4").hide();
  $(".title1").click(function(){
  $(".item1").toggle();
  });
  $(".title2").click(function(){
  $(".item2").toggle();
  });
  $(".title3").click(function(){
  $(".item3").toggle();
  });
  $(".title4").click(function(){
  $(".item4").toggle();
  });
});

function changePic(item){
	var imgObj=item.lastChild.firstChild;
	var Flag=(imgObj.getAttribute("src",2)=="images/node-closed.png")
	imgObj.src=Flag?"images/node-opened.png":"images/node-closed.png";

	
}