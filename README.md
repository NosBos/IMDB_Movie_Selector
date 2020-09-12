# IMDB_Movie_Selector

Quick web application that uses the OMDB API to return to the user a list of the movies that they would like.

Utilizes NodeJS express for backend and dealing with the API
Front-end created using HTML, CSS, Javascript, Bootstrap and EJS.


## Running Locally

```bash
git clone https://github.com/NosBos/IMDB_Movie_Selector.git
```

You must have npm installed to manage the packages required for this project

```bash
npm init
npm install express
npm install body-parser

```

Within app.js you must also get a OMDB API key.
You can get a key for free from this link: https://www.omdbapi.com/apikey.aspx

```bash
const apiKey = "API KEY HERE";
line 33 in app.js

```

Created by: Harjap Gill
