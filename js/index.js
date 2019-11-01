var googleUrl = "https://www.google.com/search?q=";

function searchGoogle() {

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