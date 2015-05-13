function displayCookies() {
	$("#display_cookie_div").appendChild(document.createTextElement(document.cookie));
}

function setCookie() {
	var cookieName = $("#set_cookie_name").val();
	var cookieValue = $("#set_cookie_value").val();
	var date = new Date();
	date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
  	var expires = "; expires=" + date.toUTCString();
  	document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
  	displayCookies();
}

function deleteCookie() {
	var cookieName = $("#set_cookie_name").val();
	document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	displayCookies();
}