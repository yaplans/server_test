/**
 * Ждем готовности документа.
 * */
$(document).ready(function (){
	start();
});

/***/
function main(){
	alert("Начало и");
}

/**
 * Пишем в файл
 * */
function l_file_write(f,t){
	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: f, fun: "l_file_write", t: t},
		success: function (data){
			m_log("==l_file_write");
			m_log(data);
			return data;
		},
		error: function (e){
			m_log(e);
			return "error";
		}
	});	
	m_log("61");
}

/**
 * Читаем из файла
 * */
function l_file_read(f){
	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: f, fun: "l_file_read"},
		success: function (data){
			m_log("==l_file_read");
			m_log(data);
			return data;
		},
		error: function (e){
			m_log(e);
			return "error";
		}
	});	
	m_log("33");
}


/**
 * Получим id противника и начнем игру
 * */
//~ function l_file_get_he(f){
	//~ $.ajax({
		//~ url: "api/api.php",
		//~ type: "POST",
		//~ dataType: "text",
		//~ data: {f: f, fun: "j_file_read_a"},
		//~ success: function (data){
			//~ m_log(data);
			//~ return data;
		//~ },
		//~ error: function (e){
			//~ m_log(e);
			//~ return "error";
		//~ }
	//~ });
//~ }


/**
 * Существует-ли файл на сервере
 * */
function l_file_exists(f){
	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: f, fun: "j_file_exists"},
		success: function (data){
			m_log("==l_file_exists");
			m_log(data);

			return data;
		},
		error: function (e){
			m_log(e);
			return "error";
		}
	});
	m_log("2");
}

/**
 * логируем если m_debug определен
 * */
var m_debug=true;
function m_log(x){
	if(typeof m_debug !== undefined){
		console.log(x);
	}
}

//~ function get_sess(f){
	//~ var v = document.getElementById("ses");
	//~ m_log("==get_sess");
	//~ m_log(v.value);
	//~ m_log(typeof v.value);
	//~ return v;
//~ }

/**
 * Получим переменную сессии
 * */
function get_session(f){
	//~ console.log(p);
	
	//~ Тут асинхронность неуместна!
	//~ $.ajax({
		//~ async: false,
		//~ url: "api/api.php",
		//~ method: "POST",
		//~ data: {f: f, fun: "j_get_session"},
		//~ success: function(d){
			//~ alert(data);
			//~ m_log("==get_session= "+f);
			//~ m_log(d);
			//~ return d;
		//~ }
	//~ });
	
	//~ var arr = ["Яблоко", "Апельсин", "Груша"];

//~ arr.forEach(function(item, i, arr) {
  //~ alert( i + ": " + item + " (массив:" + arr + ")" );
//~ });
	
	
	var list = document.getElementsByClassName("ses");
	//~ Так не работает!!!
	//~ list.forEach(function(item, i, list){
		//~ if(item.name==f){
			//~ return item.value;
		//~ }
	//~ });
	var i;
	console.log(list.length);
	for (i = 0; i < list.length; i++) {
		if(list[i].name==f){
			return list[i].value;
		}
	}
	//~ return false;	
}



/**
 * Установим переменную сессии
 * */
function set_session(f,t){
	
!!!Доделай!!!	
	
	$.ajax({
		url: "api/set_session.php",
		method: "POST",
		data: {f: f, t: t, fun: "j_set_session"},
		success: function(d){
			m_log("==set_session");
			m_log(d);
		}
	});
}

function set_session_sync(f,t){
	var list = document.getElementsByClassName("ses");
	var i;
	for (i = 0; i < list.length; i++) {
		if(list[i].name==f){
			list[i].value=t;
			return true;
		}
	}
	//~ если элемента нет - добавим
	var new_el = document.createElement("input");
	new_el.type="hidden";
	new_el.class="ses";
	new_el.name=f;
	new_el.value=t;
	list[0].appendChild(new_el);
	m_log("11");
	//~ return false;
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
			m_log("==m_get_file");
			m_log(d);
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

m_log("-1");
var me = get_session("me"); // my id
m_log("-2");
var he = get_session("he"); // his id
m_log("me=");
m_log(me);
m_log("he=");
m_log(he);

var a = {
	me: me, 
	he: he
};
m_log("a=");
m_log(a);
return a;	
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
//~ Получаем переменные	
	var m_vars = m_get_var();
	m_log(m_vars.me);

	if(m_vars.me == undefined){//Если id отсутствует
		m_vars.me = l_get_id();//получим
		m_log(m_vars.me);
		m_log("1");
		set_session("me", m_vars.me);//сохраним в сессию
		m_log("111");
		//~ Проверим файл 0000.gid
		m_log("2");
		if(l_file_exists("0000.gid")){
			m_log("222");
			
			m_log("3");
			var he = l_file_read("0000.gid");
			m_log("333");
			
			m_log("4");
			set_session("he", he);//сохраним в сессию
			m_log("444");
			m_vars.he = he;
			
			m_log("5");
			l_file_write(m_vars.he+".gid",m_vars.me);
			m_log("555");
			m_log("Ты - ВТОРОЙ");
		} else {
			m_log("6");
			l_file_write("0000.gid",m_vars.me);
			m_log("611");
			
			m_log("7");
			l_file_read(m_vars.me+".gid");
			m_log("777");
			//~ l_file_get_he(m_vars.me+".gid");
			m_log("Ты - ПЕРВЫЙ");
		}
	}
	
m_log("8");		
	//основной цикл
	main();

	//~ var xx = document.getElementById("m_me");
	//~ xx.innerHTML=m_vars.me;//отобразим
	
	
}
