var ff;
var m_vars;
/**
 * Ждем готовности документа.
 * */
$(document).ready(function (){
	start();
});

function l_you_are_second(){
	m_log("файл 0000.gid есть");
	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: "0000.gid", fun: "j_file_read"},
		success: function (data){
			m_log("==l_file_read");
			m_log(data);
			m_vars.he = data;
			set_session("he", m_vars.he);//сохраним в сессию
			
//~ !!!??? - вроде-бы здесь закончили			
			
			l_file_write(he+".gid",m_vars.me);
			m_log("Ты - ВТОРОЙ");
			//~ return data;
		},
		error: function (e){
			m_log(e);
			return "error";
		}
	});	
}


function l_you_are_first(){
	m_log("Напишем в файл 0000.gid");
	//~ l_file_write("0000.gid",m_vars.me);

	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: "0000.gid", fun: "j_file_write", t: m_vars.me},
		success: function (data){
			m_log("==l_file_write");
			m_log(data);
			l_file_wait(m_vars.me+".gid");
			m_log("Ты - ПЕРВЫЙ");

			//~ return data;
		},
		error: function (e){
			m_log("==l_file_write error");
			m_log(e);
			return "error";
		}
	});	
}

function l_test_player(){

	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: "0000.gid", fun: "j_file_exists"},
		success: function (data){
			m_log("==l_file_exists success return");
			m_log(data);
			if(data=="yes"){
				l_you_are_second();
			}else{
				l_you_are_first();
			}
		},
		error: function (e){
			m_log("==l_file_exists return error :((( ???");
			m_log(e);
			return "error";
		}
	});
	//~ m_log("2");
	return true;
}

/***/
function main(){
	alert("Начало и");
}

/**
 * Пишем в файл
 * */
function l_file_write(f,t){
	m_log("l_file_write f=");
	m_log(f);
	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: f, fun: "j_file_write", t: t},
		success: function (data){
			m_log("==l_file_write");
			m_log(data);
			return data;
		},
		error: function (e){
			m_log("==l_file_write error");
			m_log(e);
			return "error";
		}
	});	
	//~ m_log("61");
}

function to_l_file_wait(){
	m_log("++==  to_l_file_wait");
	m_log("++==global vars");
	m_log(ff);
	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: ff, fun: "j_file_exists"},
		success: function (data){
			m_log("++==l_file_wait===----");
			m_log(data);
			if(data=="yes"){
				var his_id;
				his_id=l_file_read(ff);
				m_log("his_id");
				m_log(his_id);
				
//~ !!!??? - сохранить нужно				
				
			}else{
				setTimeout(to_l_file_wait, 500);	
			}
		},
		error: function (e){
			m_log(e);
			return "error";
		}
	});	
}

/**
 * Ждем файл и читаем его
 * */
function l_file_wait(f){
	ff = f;
	to_l_file_wait();
	m_log("==l_file_wait");
}

/**
 * Читаем из файла
 * */
function l_file_read(f){
	$.ajax({
		url: "api/api.php",
		type: "POST",
		dataType: "text",
		data: {f: f, fun: "j_file_read"},
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
 * Существует-ли файл на сервере
 * */


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
	//~ console.log(list.length);
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
	//~ Добавит переменную в массив $_SESSION
	$.ajax({
		url: "api/api.php",
		method: "POST",
		data: {f: f, t: t, fun: "j_set_session"},
		success: function(d){
			m_log("==set_session");
			m_log(d);
		}
	});
	set_session_sync(f,t);
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
	//~ m_log("11");
	//~ return false;
	return true;
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
	var me = get_session("me"); // my id
	var he = get_session("he"); // his id

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
	m_vars = m_get_var();
	//~ m_log(m_vars.me);
	m_log("Тест me");
	if(m_vars.me == undefined){//Если id отсутствует
		m_log("Отсутствует me");
		m_vars.me = l_get_id();//получим
		m_log(m_vars.me);
		m_log("Сохраним me");
		set_session("me", m_vars.me);//сохраним в сессию
		m_log("Проверим файл 0000.gid");
		l_test_player();
	}
	
m_log("8");		
	//основной цикл
	m_log("основной цикл");
	main();

	//~ var xx = document.getElementById("m_me");
	//~ xx.innerHTML=m_vars.me;//отобразим
	
	
}
