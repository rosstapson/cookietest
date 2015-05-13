function displayCookies() {
	//$("#display_cookie_div").appendChild(document.createTextElement("test"));
	$("#cookieFrame").attr("src", "http://httpbin.org/cookies/set?mainpage_cookie=set_successfully");
}

function setCookie() {
	var cookieName = $("#set_cookie_name").val();
	var cookieValue = $("#set_cookie_value").val();
	var date = new Date();
	date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
  	var expires = "; expires=" + date.toUTCString();
  	var cookieString = cookieName + "=" + cookieValue;
  	alert("cookie string: '" + cookieString + "'");
  	document.cookie = cookieString;
  	//displayCookies();
}

function deleteCookie() {
	var cookieName = $("#set_cookie_name").val();
	document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	displayCookies();
}