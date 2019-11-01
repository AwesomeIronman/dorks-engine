var googleUrl = "https://www.google.com/search?q=";

function searchGoogle() {

  var query = googleUrl + encodeURIComponent(
    $("#pageTitle").val()
  );

  console.log(query);

  window.open(query, "_blank");

}