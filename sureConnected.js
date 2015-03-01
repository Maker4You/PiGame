var name = "";
  function checkLoginState() {
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
  }
  window.fbAsyncInit = function() {
  FB.init({
	appId      : '395531267238447',
	cookie     : true,  // enable cookies to allow the server to access 
						// the session
	xfbml      : true,  // parse social plugins on this page
	version    : 'v2.1' // use version 2.1
  });
  FB.getLoginStatus(function(response) {
	statusChangeCallback(response);
  });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
function statusChangeCallback(response) {
	if (response.status != 'connected') 
		window.location.assign("login.html")
	else
	{
		FB.api('/me/picture?width=40&height=40', function(response) {
  			$('#profile-img').attr('src', response.data.url);
		});
		FB.api('/me', function(response) {
  			var uid = response.id;
  			console.log(uid);
  			var uname= response.name;
		});
		FB.api("/me/friendlists",function (response) {
      		if (response && !response.error) {
        		var friendsarr = response;
        		friendsarr=friendsarr.map(function(val){return val.id});
        		console.log(friendsarr);
      		}
    	});
	}
}
$('#logout').click(function() {
	FB.logout(function(response) {
  		window.location.assign("login.html")
	});
});
