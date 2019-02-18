alert("Hi");

function m_test(){
	$.ajax({
		url: 'test_file.php',
		
		success: function(data){
			if(data=='File Ok!'){
				alert(data);
			} else {
				m_test();				
			}
		}
	});
};
m_test();
