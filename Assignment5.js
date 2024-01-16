



    document.getElementById("Window").innerHTML = "Browser inner window width:" + window.innerWidth + "px<br>" + "Browser inner window height: " + window.innerHeight + "px";
    document.getElementById("appName").innerHTML = "navigator.appName is " + navigator.appName;
    document.getElementById("appVersion").innerHTML = "navigator.appVersion is " + navigator.appVersion;
    document.getElementById("product").innerHTML= "navigator.product is " + navigator.product;
    document.getElementById("userAgent").innerHTML= "navigator.userAgent is " + navigator.userAgent;
    document.getElementById("platform").innerHTML=  "navigator.platform is " + navigator.platform;
    document.getElementById("language").innerHTML= "navigator.language is " + navigator.language;
    document.getElementById("width").innerHTML= "Screen.width is "+ screen.width + "px<br>";
    document.getElementById("height").innerHTML= "Screen.height is "+ screen.height + "px<br>";
    document.getElementById("availWidth").innerHTML= "Screen.availWidth is "+ screen.availWidth + "px<br>";
    document.getElementById("availHeight").innerHTML= "Screen.availHeight is "+ screen.availHeight + "px<br>";
    document.getElementById("pixelDepth").innerHTML= "Screen.pixelDepth is "+ screen.pixelDepth + "px<br>";
    document.getElementById("colorDepth").innerHTML= "Screen.colorDepth is "+ screen.colorDepth + "px<br>";
    document.getElementById("href").innerHTML = "window.location.href is "+ window.location.href;
    document.getElementById("hostname").innerHTML = "window.location.hostname is "+ window.location.hostname;
    document.getElementById("pathname").innerHTML = "window.location.pathname is "+ window.location.pathname;
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById("coords").innerHTML= "position.coords.latitude is " + position.coords.latitude + "<br>"+ "position.coords.longitude is " + position.coords.longitude;})


