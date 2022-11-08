function Conn()
{
    //code to connect to rest api
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {

        //console.log(this.responseText);
        var json = JSON.parse(this.responseText)
        DisplayData(json)
    }
    });

    xhr.open("GET", "https://scpdatabase-6ea6.restdb.io/rest/scpdatabase");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "6363acb1e9a77f598422063f");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);

    function DisplayData(info)
    {
        var displayText = "";
        for(var i = 0; i < info.length; i++)
        {
            displayText +=`
            <h2>${info[i].Item}</h2>
            <h3>${info[i].Class}</h3>
            <p>${info[i].Description}</p>
            <p>${info[i].Containment}</p>
            `;
        }
        document.getElementById("root").innerHTML = displayText;
    }
}