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
			console.log(d);
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
//~ Возможно еще понадобятся переменные

var me = get_session("me");
var he = get_session("he");

//~ console.log(me);
//~ console.log(he);
return {me: me, he: he};	
}

/**
 * Выдаст id
 * */
function l_get_id(){
	var ss = Date.now()/1000 | 0;
	//~ console.log(typeof(ss));
	//~ console.log("ss=" + ss);
	//~ ?? чисоа не совпадают ??
	var t = ss/10008;
	//~ console.log(t);
	var t = t | 0;
	//~ console.log(t);
	t = (ss /10008 - t) * 10000 | 0;
	//~ console.log(t);
	return t;
}

/**
 * Начало. Основная программа.
 * */
function start(){
	//~ console.log("1");
	//~ set_session("first","yes");
	//~ var v=get_session("first");
	//~ console.log(v);
	
	var m_vars = m_get_var();
	console.log(m_vars.me);

console.log("1");

	if(m_vars.me == undefined){
console.log("2");		
		m_vars.me = l_get_id();
		console.log(m_vars.me);
		
		set_session("me", m_vars.me);
	}
console.log("3");	
	var xx = document.getElementById("m_me");
	xx.innerHTML=m_v	ars.me;
	//~ value=m_v	ars.me;
	
	

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
