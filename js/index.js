$(document).ready(function(){

	$("#header > ul > li.name").hover(function(){
		$("#header > ul > li.name").addClass("headerHover");
	}, function(){
		$("#header > ul > li.name").removeClass("headerHover");
	});

	$("#header > ul > a:nth-child(2) > li").hover(function(){
		$("#header > ul > a:nth-child(2) > li").addClass("headerHover");
	}, function (){

		$("#header > ul > a:nth-child(2) > li").removeClass("headerHover");

	});

	$("#header > ul > a:nth-child(3) > li").hover(function(){
		$("#header > ul > a:nth-child(3) > li").addClass("headerHover");
	}, function(){
		$("#header > ul > a:nth-child(3) > li").removeClass("headerHover");
	});

	$("#header > ul > li.contact").hover(function(){
		$("#header > ul > li.contact").addClass("headerHover");
	}, function(){
		$("#header > ul > li.contact").removeClass("headerHover");
	});

	$("#column1").hover(function(){
		$(".column1Heading").addClass("headerChange");
	
	}, function(){
		$(".column1Heading").removeClass("headerChange");
	});

	$("#column2").hover(function(){
		$(".column2Heading").addClass("headerChange");
	
	}, function(){
		$(".column2Heading").removeClass("headerChange");
	});

	$("#column3").hover(function(){
		$(".column3Heading").addClass("headerChange");
	
	}, function(){
		$(".column3Heading").removeClass("headerChange");
	});
});

	

