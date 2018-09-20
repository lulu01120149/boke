(function(){
	class AjaxFn{
		constructor(){
			this.init();
		}
		init(){
			this.bindEventFn();
			this.clickTabFn();
			this.bindEventFn2();
			this.backhome();
		}
		bindEventFn(){
			let templateString = $("#template").html();
			console.log($(".mbbox"));
			$.get("../js/data.json",function(data){
				console.log(data);
				data = typeof data == "object" ? data : eval("("+data+")");
				let dataArry = data.data;	
				for (let i = 0; i < dataArry.length; i++) {
					let DOMString = chuliFn(templateString,dataArry[i]);
						$(".mbbox1").append(DOMString);
					}
					function chuliFn(templateString,data){
						return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
							return data[$1];
					})
				}
			})
		}
		clickTabFn(){
			let that = this;
			$(".navlist li").on("click",function(){
				console.log($(this));
				let index = $(this).index();
				$(this).addClass("pagecurrent").siblings().removeClass("pagecurrent");
				$(".mbbox").eq(index).addClass("show").siblings().removeClass("show")
			})
		}
		bindEventFn2(){
			let templateString2 = $("#template2").html();
			$.get("../js/data2.json",function(data){
				console.log(data);
				data = typeof data == "object" ? data : eval("("+data+")");
				let dataArry2 = data.data;	
				for (let i = 0; i < dataArry2.length; i++) {
					let DOMString2 = chuliFn2(templateString2,dataArry2[i]);
						$(".mbbox2").append(DOMString2);
					}
					function chuliFn2(templateString2,data){
						return templateString2.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
							return data[$1];
					})
				}
			})
		}
		backhome(){
			$(".backhome").on("click",function(){
				location.href = "home.html";
			})
		}
	}
	const a = new AjaxFn();
})()		

