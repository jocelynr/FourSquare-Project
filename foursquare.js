////////// Clear Text Field Function //////////

function resetSearch() {
    document.getElementById("searchForm").reset();
    
        // This next part basically resets the Api Area
    
document.getElementById("apiArea").style.height = "";
document.getElementById("apiArea").style.width = "";
document.getElementById("apiArea").style.background = "";
document.getElementById("apiArea").style.border = "";
document.getElementById('apiArea').style.position =  "";
document.getElementById('apiArea').style.borderWidth = "";
}

////////// Submit to Api Function //////////


////////// Adjusting The Api Area //////////

// Because we don't want a large colored area in our page, we invoke this function.
// The Api Area will be blank until this is invoked.
// This function reacts the "search" button being clicked.
// Will create a large area for the Api to place it's information.

function changeApiArea() {

document.getElementById("apiArea").style.height = "600px"; 
document.getElementById("apiArea").style.width = "950px"; // change this
document.getElementById("apiArea").style.background = "#a9bff8";
document.getElementById("apiArea").style.border = "solid";
document.getElementById('apiArea').style.position = "relative"; 
document.getElementById('apiArea').style.borderWidth = "2px";
}



















/*
var searches = [];
function saveSearch(){
  var search = $("#newSearchField").val();
  searches.push(search);
  resetSearch();
}

function search(){
  var api = "https://api.foursquare.com/v2/venues/search?client_id=4JTOSGVHDJJMQOYECNEUPKRHERAR0MLOAVYOT04CSGM10TJF&client_secret=N41ZCKNCTEENHYBWVDZOCH3YHYRYGDARAETGEVCNVAT2H3XE&v=20130815&ll=40.7,-74&query=sushi";
}
function resetSearch(){
  $("#searchContainer").html("");
  $("#newSearchField").val("");
}


$(document).ready(function(){
  $("#postSearchButton").click(saveSearch);
});

///////// Foursquare Area //////////

/*var locations =
{ "restaurants" : [
          {
            "name1"
            "address" : "",
            "phone number" : ""
          }
        ]
};


/*

////////// Button Function //////////

var searches = [];
function saveSearch(){
  var search = $("#newSearchField").val();
  searches.push(search);
  resetSearch();
}

function search(){
  var api = "https://api.foursquare.com/v2/venues/search?client_id=4JTOSGVHDJJMQOYECNEUPKRHERAR0MLOAVYOT04CSGM10TJF&client_secret=N41ZCKNCTEENHYBWVDZOCH3YHYRYGDARAETGEVCNVAT2H3XE&v=20130815&ll=40.7,-74&query=sushi";
}
// Clear Function
function resetSearch(){
  document.getElementById("searchContainer").reset();
}

// Send .val to Api

$(document).ready(function(){
  $("#postSearchButton").click(saveSearch);
});

///////// Foursquare Area //////////

var locations =
{ "restaurants" : [
          {
            "name1"
            "address" : "",
            "phone number" : ""
          }
        ]
};
*/