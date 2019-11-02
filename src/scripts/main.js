import $ from "jquery";
import "bootstrap";

import "./../styles/main.scss";

function searchGoogle () {
  var googleUrl = "https://www.google.com/search?q=";

  var query = googleUrl + encodeURIComponent(
    $("#searchText").val() +
    " intitle:" + $("#pageTitle").val() +
    " intext:" + $("#pageContent").val() +
    " inurl:" + $("#pageUrl").val() +
    " site:" + $("#siteUrl").val() +
    " filetype:" + $("#pageFileType").val()
  );

  console.log(query);

  window.open(query, "_blank");
}

$("#searchButton").click(searchGoogle);