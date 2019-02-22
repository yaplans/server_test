/**
 * Ждем готовности документа.
 * */
$(document).ready(function (){
	start();
});

/**
 * Получим переменную сессии
 * */
function get_session(p){
	//~ console.log(p);
	$.ajax({
		url: "api/get_session.php",
		method: "POST",
		data: {p: p},
		success: function(d){
			//~ alert(data);
			//~ console.log(d);
			return d;
		}
	});
}

/**
 * Установим переменную сессии
 * */
function set_session(p,v){
	//~ console.log(p);
	$.ajax({
		url: "api/set_session.php",
		method: "POST",
		data: {p: p, v: v},
		success: function(d){
			//~ alert(data);
			console.log("set_session");
			console.log(d);
			//~ return d;
		}
	});
}

/**
 * Найдем файл
 * */
function m_get_file(f){
	$.ajax({
		url: "api/api.php",
		method: "POST",
		data: {f: f, fun: "j_file_exists"},
		success: function(d){
			console.log("m_get_file: ");
			console.log(d);
			return d;
		}
	});
}


/**
 * Проверим переменные и подготовимся к общению
 * */
function m_get_var(){

//~ Должны быть заданы переменные
//~ file по маске XXXX_YYYY.gid,
//~ где XXXX - id1, YYYY - id2
//~ me, значение 1 или 2 (типа ты какой игрок)

var me = get_session("me");
console.log(me);
//~ var l_file = m_find_file();


учти где файл ищется...
var m_file="../index.php";
m_get_file(m_file);
	
}

/**
 * Начало. Основная программа.
 * */
function start(){
	//~ console.log("1");
	//~ set_session("first","yes");
	//~ var v=get_session("first");
	//~ console.log(v);
	
	m_get_var();
	
	
	
	//~ alert("start script!");
	//~ var j_var= document.getElementById("m_move").value;
	
	
		//~ $.ajax({
			//~ url: "read_file.php",
			//~ type: "POST",
			//~ dataType: "text",
			//~ data: "f="+fileName.value+"&gamer="+numGamer.value,
			//~ success: function (data){
				//~ alert(data);
			//~ },
			//~ error: function (){
				//~ alert("error");
			//~ }
		//~ });
	
	
	//~ alert(j_var);
}
