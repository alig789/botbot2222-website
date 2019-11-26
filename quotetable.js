

var handleClick = function(){
	console.log("clicked");
	alert("you clicked");
	$('.title').css('background', 'red').height(100);
	$('#myTable').append('<tr><td>1</td><td>"tset 2e" -me 2018</td></tr>');
};


$.get('quotesinfo.txt', function(data) {    
    var lines = data.split("\n");

    $.each(lines, function(n, elem) {
       $('#myTable').append('<tr><td>'+(n+1)+'</td><td>'+elem+'</td></tr>');
    });
});

//var quoteline = $('#quotefile').contents();
//var elementList = document.getElementsByTagName('h1');
//var button = elementList[0]
//button.addEventListener('click', handleClick);
