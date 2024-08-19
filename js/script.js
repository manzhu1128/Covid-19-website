$("#progress1").css("transition", "width " + "5" + "s ease-out");
$("#progress1").width("97%");
$("#progress2").css("transition", "width " + "5" + "s ease-out");
$("#progress2").width("3%");


var r=true;
$("#r-body").fadeOut("slow");
$("#robot").click(function(){
	sleep();
});

function sleep(){
	$("#r-body").toggle(function(){
		$("#r-body").css({"opacity":"1" ,"height":"500"});
	});
}

function keyin(event){
	var keyCode=event.which;
	if (keyCode==13) {
		$("#r-title").append('<div class="talk">' + document.getElementById("r-say").value + '</div>');
		$("#r-say").val('');
		answer();
	}
}

function answer(){
	setTimeout(function(){
		$("#r-title").append(QA());
		var e=document.getElementById("r-say");
		e.scrollTop=e.scrollHeight;
		e.scrollLeft=e.scrollLeft;
	},500);
}

function QA(){
	c=Math.floor(Math.random()*3);
	if (c%3==0) {
		return '<img src="./img/mask-1.png">';
	}
	if (c%3==1) {
		return '<img src="./img/mask-2.png">';
	}
	if (c%3==2) {
		return '<div>感謝您的建議，我們會盡力改善</div>';
	}
}

$("#form1").submit(function(){
	alert("登入成功，歡迎光臨本站！");
	$("#form1 input").val("");
});
$("#form2").submit(function(){
	alert("結帳成功，商品將在24小時內寄出！");
	$("#form2 input").val("");
});

function leave(){
	window.location.href=("#shop");
}

$(document).ready(function(){
	$(".shop").click(function(){
		var div=$(".c-alert");
		div.animate({opacity:"1"} , "1.5s");
		div.animate({opacity:"0"} , "0s");
	})
})
$(document).ready(function(){
	$(".shop-1").click(function(){
		$("#shop-1").css("display","flex");
	});
});
$(document).ready(function(){
	$(".shop-2").click(function(){
		$("#shop-2").css("display","flex");
	});
});
$(document).ready(function(){
	$(".shop-3").click(function(){
		$("#shop-3").css("display","flex");
	});
});
$(document).ready(function(){
	$(".leave-1").click(function(){
		$("#shop-1").css("display","none");
	});
});
$(document).ready(function(){
	$(".leave-2").click(function(){
		$("#shop-2").css("display","none");
	});
});
$(document).ready(function(){
	$(".leave-3").click(function(){
		$("#shop-3").css("display","none");
	});
});


function checkInt(o){
	theV=isNaN(parseInt(o.value))?0:parseInt(o.value);
	if (theV!=o.value) {
		o.value=theV;
	}
	txtTotal.value=txtAmount.value*txtPrice.value;
	txtTotal2.value=txtAmount2.value*txtPrice2.value;
	txtTotal3.value=txtAmount3.value*txtPrice3.value;
}
function checkP(o){
	theV=isNaN(parseFloat(o.value))?0:parseFloat(o.value);
	theV=parseInt(theV*100)/100;
	if (theV!=o.value) {
		theV=(theV*100).toString();
		theV=theV.substring(0,theV.length-2)+"."+theV.substring(theV.length-2,theV.length) ;
		o.value=theV;
	}
	txtTotal.value=txtAmount.value*txtPrice.value;
	txtTotal2.value=txtAmount2.value*txtPrice2.value;
	txtTotal3.value=txtAmount3.value*txtPrice3.value;
}
window.onload=function(){
	var txtAmount=document.getElementById("txtAmount");
	var txtPrice=document.getElementById("txtPrice");

	var txtAmount2=document.getElementById("txtAmount2");
	var txtPrice2=document.getElementById("txtPrice2");

	var txtAmount3=document.getElementById("txtAmount3");
	var txtPrice3=document.getElementById("txtPrice3");

	txtAmount.onkeyup=function(){
		checkInt(this)
	}
	txtAmount.onpaste=function(){
		checkInt(this);
	}
	txtAmount.oncut=function(){
		checkInt(this);
	}
	txtAmount.ondrop=function(){
		checkInt(this);
	}
	txtAmount.onchange=function(){
		checkInt(this);
	}


	txtPrice.onkeyup=function(){
		checkP(this)
	}
	txtPrice.onpaste=function(){
		checkP(this);
	}
	txtPrice.oncut=function(){
		checkP(this);
	}
	txtPrice.ondrop=function(){
		checkP(this);
	}
	txtPrice.onchange=function(){
		checkP(this);
	}




	txtAmount2.onkeyup=function(){
		checkInt(this)
	}
	txtAmount2.onpaste=function(){
		checkInt(this);
	}
	txtAmount2.oncut=function(){
		checkInt(this);
	}
	txtAmount2.ondrop=function(){
		checkInt(this);
	}
	txtAmount2.onchange=function(){
		checkInt(this);
	}


	txtPrice2.onkeyup=function(){
		checkP(this)
	}
	txtPrice2.onpaste=function(){
		checkP(this);
	}
	txtPrice2.oncut=function(){
		checkP(this);
	}
	txtPrice2.ondrop=function(){
		checkP(this);
	}
	txtPrice2.onchange=function(){
		checkP(this);
	}





	txtAmount3.onkeyup=function(){
		checkInt(this)
	}
	txtAmount3.onpaste=function(){
		checkInt(this);
	}
	txtAmount3.oncut=function(){
		checkInt(this);
	}
	txtAmount3.ondrop=function(){
		checkInt(this);
	}
	txtAmount3.onchange=function(){
		checkInt(this);
	}


	txtPrice3.onkeyup=function(){
		checkP(this)
	}
	txtPrice3.onpaste=function(){
		checkP(this);
	}
	txtPrice3.oncut=function(){
		checkP(this);
	}
	txtPrice3.ondrop=function(){
		checkP(this);
	}
	txtPrice3.onchange=function(){
		checkP(this);
	}
}