(function(){
	class Boke{
		constructor(){
			this.init();
		}
		init(){
			this.BackTopFn();
			this.clicktopFn();
			this.backhome();
		}
		BackTopFn(){
			$(window).on("scroll",function(){
				let t = $(window).scrollTop();
				if(t>300){
					$(".fanhui").css("display","block");
				}else{
					$(".fanhui").css("display","none");
				}
			})
		}
		clicktopFn(){
			$(".fanhui").on("click",function(){
				$("html,body").animate({
					"scrollTop":0
				},500)
			})
		}
		backhome(){
			$(".backhome").on("click",function(){
				location.href = "home.html";
			})
		}
	}
	const b = new Boke();
})()
		
			
		
	
