
			var main = document.getElementById('body'), start=0, add = document.getElementById('addNote'), selectedNote, y=1;
			var arr = document.getElementsByTagName('input'), consol = 1, header2= document.getElementById("header2");
			
			main.onclick = function(event) { //при щелчке на в main
			// консоль
				consol = 1
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].checked) {consol=2} // если хоть одна галочка стоит 
					}
				if (consol==2) {header2.style.cssText="top:60px;" 
					add.style.cssText="left:10px; top:150px; width: 60px; height:60px; margin: 0px; border-radius: 30px;"
					main.style.cssText="top:150px;" // консоль опускаетс¤
				}	
				else {header2.style.cssText="top:-10px;"
					add.style.cssText="left:10px; top:80px; width: 60px; height:60px; margin: 0px; border-radius: 30px;"
					main.style.cssText="top:80px;"
				} // консоль поднимаетс¤
			
				//определение клика
					var target = event.target; 
						if (target.tagName == 'LI') {
							var note=target.parentNode.parentNode;
							colorCh(target, note);					
						}
				// удалить одну заметку		
				if (target.getAttribute('idd') == 'cross') {	
					var obj=target.parentNode.parentNode;
					obj.parentNode.removeChild(obj);
				}
											
				
				//смена цвета заметки
				function colorCh(node, note1) {
					selectedColor = node;
					var green='#A1FF9C', yellow='#FFF888', oreng='#F7B98B', red='#EF8B89', purple='#D7BCC6', blue='#C4E3F7';
					
					var color=selectedColor.getAttribute('id');
					
					note1.style.cssText="top:0px; background-color: " + eval(color) + ";"
				}
			}
			function addNote() {	// добавить новую заметку
				main.insertAdjacentHTML("beforeEnd", '<div class="note" number="' + y + '"><label><input type="checkbox" value="1" name="k"><span></span></label><textarea placeholder="Заголовок" cols="25" rows="1"></textarea><textarea placeholder="Текст" cols="25" rows="4"></textarea><span id="act"><img  class="img" src="res/img/hash.png"> <img class="img" src="res/img/arch.png"> <img  class="img" idd="cross" src="res/img/cros.png"></span><ul class="bar"><li class="color" id="green"></li><li class="color" id="yellow"></li><li class="color" id="oreng"></li><li class="color" id="red"></li><li class="color" id="purple"></li><li class="color" id="blue"></li></ul></div>');
				y++;
				setTimeout(func, 50);
				function func() { // появление заметки
					main.lastChild.style.cssText="top:0px;";
				}
				if (start==0) { // при первом создании заметки
				add.style.cssText="left:10px; top:80px; width: 60px; height:60px; margin: 0px; border-radius: 30px;";
				start=1
				}
				
			}		
			//удалить все зачеканые заметки
			function deleteAll() { 
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].checked) { 
						var Note=arr[i].parentNode.parentNode;
						Note.parentNode.removeChild(Note);
						}
					;
				}
			}