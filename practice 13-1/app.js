const weatherData = {
    tehran: { temp: 31, condition: "آفتابی", humidity: 22, wind: 14 },
    mashhad: { temp: 27, condition: "نیمه‌ابری", humidity: 35, wind: 10 },
    shiraz: { temp: 34, condition: "آفتابی", humidity: 18, wind: 12 },
    tabriz: { temp: 24, condition: "بارانی", humidity: 50, wind: 8 },
    esfahan: { temp: 29, condition: "ابری", humidity: 40, wind: 11 },
    rasht: { temp: 26, condition: "بارانی", humidity: 78, wind: 6 },
    yazd: { temp: 38, condition: "آفتابی", humidity: 12, wind: 15 },
    kerman: { temp: 30, condition: "نیمه‌ابری", humidity: 28, wind: 9 },
    ahvaz: { temp: 41, condition: "گرد و غبار", humidity: 20, wind: 18 },
    bandarabbas: { temp: 36, condition: "شرجی", humidity: 80, wind: 7 },
};

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherCard = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");
const conditionText = document.getElementById("conditionText");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const errorMsg = document.getElementById("errorMsg");

function getConditionClass(condition) {
    switch (condition) {
        case "آفتابی":
            return "sunny";
        case "بارانی":
            return "rainy";
        case "ابری":
            return "cloudy";
        case "نیمه‌ابری":
            return "partly-cloudy";
        case "گرد و غبار":
            return "dusty";
        case "شرجی":
            return "humid";
        default:
            return "";
    }
}

function showWeather(city) {
    const data = weatherData[city];
    weatherCard.className = "card";
    errorMsg.textContent = "";

    if (data) {
        cityName.textContent = city;
        conditionText.textContent = data.condition;
        temperature.textContent = `${data.temp}°`;
        humidity.textContent = `${data.humidity}%`;
        wind.textContent = `${data.wind} km/h`;

        const conditionClass = getConditionClass(data.condition);
        if (conditionClass) weatherCard.classList.add(conditionClass);

        weatherCard.classList.remove("hidden");
    } else {
        weatherCard.classList.add("hidden");
        errorMsg.textContent = "the city was not found";
    }
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) showWeather(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const city = cityInput.value.trim();
        if (city) showWeather(city);
    }
});
