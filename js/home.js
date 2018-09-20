(function(){
	class Home{
		constructor(){
			this.init();
		}
		init(){
			$(".up").on("click",function(){
				$(".header").animate({
					"top":"-120%"
				},350);
				setTimeout(function(){
					location.href = "index.html";
				},350)
			})
		}
	}
	new Home();
})()
