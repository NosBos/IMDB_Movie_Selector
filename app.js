
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Allow EJS templating for changing views
app.set('view engine', 'ejs');

let mov1
let mov2
let mov3
let mov4
let mov5


app.get("/", function(req,res) {


    res.render("index", {mov1: mov1,
                        mov2: mov2,
                        mov3: mov3,
                        mov4: mov4,
                        mov5: mov5});
});

app.post("/", function(req, res) {

    const movieName = req.body.movieName;
    const apiKey = "636eed04";
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
            mov1 = responseObject.Search[0];
            mov2 = responseObject.Search[1];
            mov3= responseObject.Search[2];
            mov4 = responseObject.Search[3];
            mov5 = responseObject.Search[4];

            console.log("test");
            console.log(responseObject.Search[0]);
            console.log(mov1);


            res.redirect("/");
            
        });

    });
});

app.listen(3000,function() {
    console.log("server running on 3000");
})