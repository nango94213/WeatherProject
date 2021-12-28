const express = require("express")
const https = require("https")

const app = express()

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a494070c4a45f6d5afd06cf3460a01e1"
    https.get(url, function(response){
        console.log(response)

        response.on("data", function(data){
            const weatherData= JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
        })
        


    })
    res.send("Server is running")

})




app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})