/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const canvas_my = document.getElementById("my_map");
const canvas_his = document.getElementById("his_map");
//console.log(canvas);
//const context_my = canvas_my.getContext("2d");
//context_my.scale(20, 20);

//const context_his = canvas_his.getContext("2d");
//context_his.scale(20, 20);

const c_col = 3;

//draw();


    var tab_my = document.getElementById("my_tab");
    const tab_his = document.getElementById("his_tab");

//Текст превратим в одномерный массив
    var s_my = document.getElementById("a_my").value.split(',');
    //~ console.log(s_my);
//~ Массив    

    var a_my = [];
    //~ var b_my = [];
    var x=0;
    for(var i = 0; i < c_col; i++){
		a_my[i] = [];
		//~ b_my[i] = [];
		for(var j = 0; j < c_col; j++){
			//~ a_my[i][j]=0;
			a_my[i][j]=s_my[x++];
		}
	}
    
    console.log(a_my);
    //~ console.log(b_my);
    
    
    
    //~ a_my.value = '2';
	//~ console.log(a_my);

draw_tabs();

tab_my.onmouseup = function (event) {
	
    var target = event.target;
    var m_out = document.getElementById("m_out");
    var m_color = target.style.background.split(' ');
    m_out.innerHTML = target.id + m_color[0];

	console.log(target.id);
    var arr = target.id.split("_");
    //~ console.log(arr[2]);

    if(arr[2]==='0' || arr[2]===undefined) return;

	//Нажатие на своем поле определяет палубу
	var x = arr[2] - 1;
	var y = arr[3] - 1;
	if(a_my[x][y]==1){
		a_my[x][y]=0;// 0 - пусто
	} else {
		a_my[x][y]=1;// 1 - палуба	
	}
	console.log(a_my[x][y]);
	console.log(a_my);
	document.getElementById("a_my").value=a_my;
	
	

    if (m_color[0] == 'pink') {
        target.style.background = '';
    } else {
        target.style.background = 'pink';
    }
    
}

tab_his.onmouseup = function (event) {
    var target = event.target;
    var m_out = document.getElementById("m_out");
//    console.log(tab_my);
    //var h_td = document.getElementById(target.id);
    var m_td = "";
    var arr = target.id.split("_");
    console.log(arr[2]);

    if(arr[2]==='0' || arr[2]===undefined) return;


a_my[arr[2]][arr[3]]=1;// 1 - палуба
console.log(a_my);

    
    for (var i = 1; i < arr.length; i++) {
		m_td += "_" + arr[i];
	}
    var m_td = "my" + m_td;
    //m_out.innerHTML = target.id;
    console.log(target.id);
    console.log(m_td);
    var m_bum = document.getElementById(m_td);
    var m_color = m_bum.style.background.split(' ');
    if (m_color[0] == 'pink') {
        m_bum.style.background = 'red';
    } else {
        m_bum.innerHTML = "*";
    }
    document.getElementById('form').submit();//Был выстрел - нужно обновить game.txt
}






function f_thead(p_tab) {
/////////////////////////////////////	
    var m_thead = document.createElement("thead");
    var m_tr = document.createElement("tr");
    var m_th;

    const a = '_АБВГДЕЖЗИК';
    
    for (var i = 0; i < c_col+1; i++) {
        m_th = document.createElement("th");
        m_tr.appendChild(m_th);
        m_th.id = p_tab + "th" + i;
        m_th.innerHTML = a[i];
    }

    m_thead.appendChild(m_tr);
    return m_thead;
}

function f_tbody(p_tab) {
/////////////////////////////////////

    var m_tbody = document.createElement("tbody");
    var m_tr;
    var m_td;
    
    //~ for (var y = 1; y < c_col+1; y++) {
        //~ m_tr = document.createElement("tr");
        //~ for (var x = 0; x < c_col+1; x++) {
            //~ m_td = document.createElement("td");
            //~ m_tr.appendChild(m_td);
            //~ m_td.id = p_tab + "_td_" + x + "_" + y;
            //~ if (x == 0) {
                //~ m_td.innerHTML = y;
            //~ }
        //~ }
        //~ m_tbody.appendChild(m_tr);
        //~ m_tr.id = p_tab + "tr" + y;
    //~ }
    for (var x = 1; x < c_col+1; x++) {
        m_tr = document.createElement("tr");
        for (var y = 0; y < c_col+1; y++) {
            m_td = document.createElement("td");
            m_tr.appendChild(m_td);
            m_td.id = p_tab + "_td_" + x + "_" + y;
            if (y == 0) {
                m_td.innerHTML = x;
            }
        }
        m_tbody.appendChild(m_tr);
        m_tr.id = p_tab + "tr" + y;
    }
    return m_tbody;
}

function draw_tabs() {
    tab_my.appendChild(f_thead("my"));
    tab_my.appendChild(f_tbody("my"));

    tab_his.appendChild(f_thead("his"));
    tab_his.appendChild(f_tbody("his"));
}

function get_tabs() {
    tab_my.appendChild(f_thead("my"));
    tab_my.appendChild(f_tbody("my"));

    tab_his.appendChild(f_thead("his"));
    tab_his.appendChild(f_tbody("his"));
}



exit;
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

function set_ship() {
//        context.fillStyle = colors[value];
//        context.fillRect(x + offset.x,
//            y + offset.y, 1, 1);
        context_my.fillStyle = "#00FF00";
        context_my.fillRect(1,1,1,1);
        context_his.fillStyle = "#0000FF";
        context_his.fillRect(1,1,1,1);

}


function draw() {
    context_my.fillStyle = '#000';
    context_my.fillRect(0, 0, canvas_my.width, canvas_my.height);

    context_his.fillStyle = '#FF0000';
    context_his.fillRect(0, 0, canvas_his.width, canvas_his.height);



//    drawMatrix(player.matrix,player.pos);
}



//return true;
















const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
];

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}



function drawMatrix(matrix, offset){
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x,
                                 y + offset.y, 1, 1);
            }
        });
    });
}        

let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

/**
 * 
 * @returns {undefined}
 * осуществляет падение на шаг
 */
function playerDrop() {
      player.pos.y++;// двигаемся вниз
      dropCounter = 0;// обнуляем счетчик падения
}

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    //console.log(deltaTime);
    dropCounter += deltaTime;
    if (dropCounter > dropInterval){
        playerDrop();
//        player.pos.y++;
//        dropCounter = 0;
    }
    
    draw();
    requestAnimationFrame(update);
}

const arena = createMatrix(12,20);
console.log(arena);console.table(arena);

const player = {
    pos: {x: 5, y: 5},
    matrix: matrix
};


//document.addEventListener('keydown', event => {
//    console.log(event); 
//});

document.addEventListener('keydown', event => {
    //console.log(event); 
  if(event.keyCode === 37){ //"AltLeft"
      player.pos.x--;
  }
  if(event.keyCode === 39){//"ArrowRight"
      player.pos.x++;
  }
  if(event.keyCode === 38){ //"ArrowUp"
      player.pos.y--;
      
      
  }
  if(event.keyCode === 40){//"ArrowDown"
      player.pos.y++;
      //dropCounter = 0;
      playerDrop();
  }
  
});


update();
 
