var parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
var mode = unescape(temp[0]);
mode = parseInt(mode);
index = mode+1;
finished = true;
var random;
var time;
var pi = '3.1415926535897932384';
$(document).ready(function() {
	$('#usernum').text('0.' + Array(mode).join("0"));
	$('#usernum').attr('class', 'mnum' + mode);
	$('#pienum').attr('class', 'mnum' + mode);
	$('#pienum').text(pi.substr(0,mode+1));
	$('#note').text("Tap on the screen to start!");
	$('#closetscroe').text($.ajax('closet.php?iduser=' + $uid));
});
function yosi(){
	if(index != 0)
		random = Math.floor((Math.random() * (index*60/(mode/10)) + 1));
	else
		random = Math.floor((Math.random() * ((mode-3)*60) + 1));
	console.log(index);
	if(index >= 0){
		num = $('#usernum').text();
		splited = num.split("");
		if(splited[index] == 9)
			splited[index] = 0;
		else
			splited[index] = parseInt(splited[index])+1;	
		num = num.substr(0, index) + splited[index] + num.substr(index + 1);
		$('#usernum').text(num);
		setTimeout(yosi,random);
	}
	else
	{
		finished=true;
		$('#note').html("Tap on the &#x21bb button to start again!");
		//here is the code to insert the score data...
		$.ajax('connect.php?username=' + $uname +'&iduser='+ $uid + '&high_score=' + $('#usernum').html());
	}
};
$('#phone').click(function(e) {
	e.stopPropagation();
	if(index == mode+1)
	{
		finished=false;
		index = index - 1;
		yosi();
	}
	else if(index != 2)
		index = index - 1;
	else
		index = 0;
	if(index>=0)
		$('#note').text("Tap on the screen to ctach the digit!");
});
$('#refresh').click(function(e) {
	e.stopPropagation();
	$('#usernum').text('0.' + Array(mode).join("0"));
	if(finished != true)
		index = mode;
	else
	{
		index=mode+1;
		$('#note').text("Tap on the screen to start again!");
	}
	console.log(finished);
	console.log(index);
});

