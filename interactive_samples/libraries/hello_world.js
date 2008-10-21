// Load jQuery
google.load("jquery", "1");

// on page load complete, fire off a jQuery json-p query
// against Google web search
google.setOnLoadCallback(function() {
  $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?q=google&v=1.0&callback=?",

  // on search completion, process the results
  function (data) {
    if (data.responseData.results &&
      data.responseData.results.length > 0) {
        var results = data.responseData.results;

        for (var i=0; i < results.length; i++) {
          // Display each result however you wish
          document.write(results[i].titleNoFormatting + "<br/>");
        }    
      }

    });
  });