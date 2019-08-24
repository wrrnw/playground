const https = require("https");
const url = `https://api.darksky.net/forecast/1caf05cdf9019c3655afa43ba62c188e/40,-75?units=si`;

const request = https.request(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
        data = data + chunk.toString();
    });

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on("error", (error) => {
    console.log("An error", error);
});

request.end();