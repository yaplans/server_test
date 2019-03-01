
console.log(1);
console.time("Mj");

var m_time= 500;


function m_go() {
	file_rise("pink.txt");
}

setTimeout(m_go, m_time);

/**
 * 
 * */
function file_rise(f) {
	
	$.ajax({
		url: "file_rise.php",
		method: "post",
		data: {f: f},
		success: function (d) {
			var vv = document.getElementById("m_me");
			var hh = document.getElementById("m_he");
			hh.innerHTML=m_time;
			console.timeLog("Mj");
console.log(3);
			if(d == "yes"){
console.log(4);
				vv.innerHTML=f;
				console.timeEnd("Mj");
			} else {
console.log(5);
				vv.innerHTML="Файла нет!";
				//~ setTimeout(file_rise("pink.txt"), m_time);
				setTimeout(m_go, m_time);
			}
			
		},
		error: function (e){
console.log(6);			
			console.log("error");
			console.log(e);
		}
	});
	
}

	//~ file_rise("pink.txt");

console.log(2);

