(function () {

    function fbShare(url, title, descr, image, winWidth, winHeight) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('https://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURIComponent(title) + '&p[summary]=' + encodeURIComponent(descr) + '&p[url]=' + encodeURIComponent(url) + '&p[images][0]=' + encodeURIComponent(image), 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    }

    function search_google(site_url) {
        var query = document.getElementById("my-google-search").value;
        window.open("https://google.com/search?q=" + query
            + "%20site:" + "https://" + site_url);
    }

})();