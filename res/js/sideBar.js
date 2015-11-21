var sB = document.getElementById("aside"),  main = document.getElementById('body'), q=1;
		function hide1() { 			
			if(q==1) {
			q=2;
			sB.style.cssText="left:0px;";
			main.style.paddingLeft="180px"
			}
			else {
			sB.style.cssText="-153px";
			main.style.paddingLeft=" ";
			q=1
			}
			
		}