
//~ // Основной цикл игры

var l_first_player = document.getElementById('l_first_player');
var id_state = document.getElementById('id_state');

function m_main(){
	
	$.ajax({
		url: 'test_file.php?f=file_p2_wait',
		
		success: function(data){
			if(data=='File Ok!'){
				if(l_first_player){
					alert('first_player - ' + data);
					//~ id_state.innerHTML='Огонь';
				} else {
					m_main();				
				}
			} else {
				if(l_first_player){
					m_main();				
				} else {
					alert('second_player - ' + data);
					//~ id_state.innerHTML='Огонь';
				}
			}
		}
	});
};
m_main();
//~ id_state.innerHTML='Огонь';
