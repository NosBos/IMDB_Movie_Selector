
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {

    const movieName = req.body.movieName;
    const apiKey = "";
    const type = "movie";

    const url = "https://www.omdbapi.com/?apikey=" + apiKey + "&s=" + movieName + "&type=" + type;

    https.get(url, function(response) {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);
        //console.log(response);
        
        let responseString ='';


        response.on("data", function(data){
            responseString += data;
            
        });

        response.on('end', function() {
            let responseObject = JSON.parse(responseString);
            res.send(responseObject)
            
        })

    });
});

app.listen(3000,function() {
    console.log("server running on 3000");
})