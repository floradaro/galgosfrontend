document.getElementById("searchBtn").addEventListener("click", function () {
  var searchInput = document.getElementById("searchInput");
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
  } else {
    searchInput.style.display = "none";
  }
});
