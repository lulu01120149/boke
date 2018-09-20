(function(){
	class Tab{
		constructor(){
			this.init();
		}
		init(){
			this.clickTabFn();
			this.backhome();
		}
		clickTabFn(){
			$(".pagination ul li").on("click",function(){
				var index = $(this).index();
				console.log(index);
				$(this).addClass("active").siblings().removeClass("active");
				$(".jq22-container").eq(index).addClass("show").siblings().removeClass("show");
			})
		}
		backhome(){
			$(".backhome").on("click",function(){
				location.href = "home.html";
			})
		}
	}
	const t = new Tab();
})()
	
	

