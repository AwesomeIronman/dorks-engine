import $ from "jquery";
import "bootstrap";

import "./../styles/main.scss";

$("#searchButton").click(searchGoogle);

function searchGoogle() {
  var googleUrl = "https://www.google.com/search?q=";

  // Form and encode URL to Google
  var query = googleUrl + encodeURIComponent(
    $("#searchText").val() +
    appendQuery("intitle", "pageTitle") +

    appendQuery("intext", "pageContent") +

    appendQuery("inurl", "pageUrl") +

    appendQuery("site", "siteUrl") +

    appendQuery("filetype", "pageFileType")
  );

  console.log(query);
  // Open URL in new tab
  window.open(query, "_blank");
}

// Get search/dork type and the form input element to retrieve user input and return full query string if user input exists
function appendQuery($queryType, $inputElement) {
  if ($("#" + $inputElement).val() !== "") {
    return ` ${$queryType}:${$("#" + $inputElement).val()}`;
  }
  return "";
}