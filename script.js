function validateForm() {
    var longitude;
    var latitude;
    var date;

    longitude = document.getElementById("longitude").value;
    latitude = document.getElementById("latitude").value;
    date = document.getElementById("date").value;

    console.log(longitude)
    console.log(latitude)
    console.log(date)

    //longitude checks
    if (!isNumeric(longitude)) {
        setOutput("Failed to parse longitude as a number!", "", "", "red");
        console.log("Longitude not numeric")
        return false;
    }
    longitude = parseFloat(longitude);
    if (longitude > 90 || longitude < -90) {
        setOutput("Longitude out of bounds!", "", "", "red");
        console.log("Longitude out of bounds")
        return false;
    }

    //latitude checks
    if (!isNumeric(latitude)) {
        setOutput("Failed to parse latitude as a number!", "", "", "red");
        console.log("Latitude not numeric")
        return false;
    }
    latitude = parseFloat(latitude);
    if (latitude > 180 || latitude < -180) {
        setOutput("Latitude out of bounds!", "", "", "red");
        console.log("Latitude out of bounds")
        return false;
    }

    //date check
    if (date == "") {
        setOutput("Date not chosen!", "", "", "red");
        console.log("Date not chosen!");
        return false;
    }

    calcData(longitude, latitude, date);
    displayMapCoords();
    return true;
}

function setOutput(text1, text2, text3, color) {
    document.getElementById("output1").textContent = text1;
    document.getElementById("output1").style.color = color;
    document.getElementById("output2").textContent = text2;
    document.getElementById("output2").style.color = color;
    document.getElementById("output3").textContent = text3;
    document.getElementById("output3").style.color = color;
    console.log("Output set!");
}

function isNumeric(str) {
    if (typeof str != "string") {
        console.log("Not a string!")
        return false;
    }
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function calcData(longitude, latitude, date) {
    let day = date.split("-")[2];
    let month = date.split("-")[1];
    let year = date.split("-")[0];
    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);

    var jsDate = new Date(date);
    var times = SunCalc.getTimes(jsDate, latitude, longitude);

    var nightLength = calcNightLength(times);

    setOutput("Sunrise: " + times.sunrise.toString(), "Sunset: " + times.sunset.toString(), "Nighttime lasts for " + nightLength, "darkslategrey");
    return true;
}

function calcNightLength(times) {
    let night1H = times.nightEnd.getHours();
    let night1M = times.nightEnd.getMinutes();
    let night1S = times.nightEnd.getSeconds();

    let night2H = 24 - times.night.getHours();
    let night2M = 60 - times.night.getMinutes();
    if (night2M < 60) {
        night2H = night2H - 1;
    } else {
        night2M = 0;
    }
    let night2S = 60 - times.night.getSeconds();
    if (night2S < 60) {
        night2M = night2M - 1;
        if (night2M < 0) {
            night2M = 59;
            ngith2H = night2H - 1;
        }
    } else {
        night2S = 0;
    }

    let nightTotalH = night1H + night2H;
    let nightTotalM = night1M + night2M;
    if (nightTotalM >= 60) {
        nightTotalM = nightTotalM - 60;
        nightTotalH = nightTotalH + 1;
    }
    let nightTotalS = night1S + night2S;
    if (nightTotalS >= 60) {
        nightTotalS = nightTotalS - 60;
        if (nightTotalM >= 60) {
            nightTotalM = nightTotalM - 60;
            nightTotalH = nightTotal + 1;
        }
    }
    
    return nightTotalH.toString() + "h " + nightTotalM.toString() + "m " + nightTotalS + "s";
}

function displayMapCoords() {
    longitude = document.getElementById("longitude").value;
    latitude = document.getElementById("latitude").value;
    console.log("Displaying longitude:", longitude, "and latitude:", latitude);
    var source = "https://www.openstreetmap.org/export/embed.html?bbox=";
    source += (parseFloat(longitude) - 10).toString();
    source += "%2C";
    source += (parseFloat(latitude) - 10).toString();
    source += "%2C";
    source += (parseFloat(longitude) + 10).toString();
    source += "%2C";
    source += (parseFloat(latitude) + 10).toString();
    source += "%2C";
    source += "&amp;layer=mapnik&amp;marker=";
    source += longitude;
    source += "%2C";
    source += latitude;
    console.log(source);
    document.getElementById("map").src = source;
}