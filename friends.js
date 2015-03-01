$(document).ready(function() {
	$.getJSON('friends.php?arr[]=' +friendsarr.join('&arr[]='),function(data){
		console.log(data);
		data[0]['score'];
		var html = "";
		for(var i=0; i<data.length;i++){
			if(i != data.length-1)
				FB.api('/{' + data[i]['iduser'] + '}/picture', function(response) {
  					html+= "<div class='toplistd'><img src= " + response.data.url + " class='picture'/><p class='playerdata'><b>" + data[i]['name'] + "</b></br>" + data[i]['score'] +"</p></div>";
				});
			else
				FB.api('/{' + data[i]['iduser'] + '}/picture', function(response) {
					html+= "<div id='lasttoplistd'><img src=" + response.data.url + " class='picture'/><p class='playerdata'><b>" + data[i]['name'] + "</b></br>" + data[i]['score'] +"</p></div>";
				});
		}
		$('#containerlist').html(html);
	});
});