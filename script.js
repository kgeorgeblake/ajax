//when the page loads (or should this be onpage load?)
$( document ).ready(function() {
  console.log( "ready!" );
   // get most recent submission
   function getSearch () {
    var retrievedSearchArr
  
  
     if (localStorage.getItem("form-control") != null)
     {
         var history = localStorage.getItem("form-control");
         var oldhistoryarray = history.split('|');
         $('form-control').empty();
         for(var i =0; i<oldhistoryarray.length; i++)
         {
             $('#search-term').append('<p>'+oldhistoryarray[i]+'</p>');
         }
     }
};




localStorage.setItem('name', '#searchterm');



function buildQueryURL() {

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { "api-key": "7f9e2b26bf4f188afc25b8fdbb6c607d" };

  // Grab text the user typed into the search input, add to the queryParams object
  queryParams.q = $("#search-term")
    .val()
    .trim();

   var city = queryParams.q

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
     return queryURL + $.param(queryParams);
      };

    function getUV() {

        https://api.openweathermap.org/data/2.5/uvi/forecast?appid={appid}&lat={lat}&lon={lon}&cnt={cnt}
        

        $.ajax({
            url: queryURL,
            method: "GET"
        })).then(function(response)) {
          console.log(response);
    var lng = response.lng
    var lat = response.lat      


    function getforecast(lng, lat) {
        call uv endpoint (separate function thing2do)
       https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

       $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response)) {
      console.log(response);
    });


    $(".form-control).html("<h1> + response.thing1inobject.thing2inobject + "weather") 




