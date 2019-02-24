console.log('1');
$(document).ready(function(){
   $("#imgLoad").hide();  //Скрываем прелоадер
});
console.log('2');
var num = 5; //чтобы знать с какой записи вытаскивать данные
$(function m_mm() {
	console.log('3');
   //~ $("#load div").click(function(){ //Выполняем если по кнопке кликнули
   //~ $("#imgLoad").show(); //Показываем прелоадер
	console.log('4');

   var i = 0;
   
   i = i + 1;
   i++;
   console.log(i);
   //~ function m_mm() 
   
	//~ $(document).ajaxStart(function () {     
       //~ $("html").addClass("loading");
    //~ });   
    $.ajax({
          url: "action.php",
          type: "GET",
          data: {"num": num},
          cache: false,
          success: function(response){
              if(response == 0){  // смотрим ответ от сервера и выполняем соответствующее действие
                 alert("Больше нет записей");
                 //~ $("#imgLoad").hide();
              }else{
                 //~ $("#content").append(response);
                 //~ num = num + 5;
                 //~ $("#imgLoad").hide();
                 alert("Больше нет записей1111111");
              };
              i++;
			  console.log(i);

           }
           //~ ,
           //~ error: function(response){
			    //~ m_mm();
				//~ i = i + 1;
				//~ console.log(i);
			   //~ alert("error2222222");
		   //~ }
           
           //~ i = i + 1;
		//~ console.log(i);

           
        });
        
        
$(document).ajaxError(function () {       
	m_mm();
        //~ alert("error2222222");
    });         
        
        
    //~ });
});
