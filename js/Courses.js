var ul = document.querySelector(".search-list");
var input = document.querySelector("#search");
var other = document.querySelector("body");
function search() {
    var li = ul.querySelectorAll("li");
    var filter = input.value.toLowerCase();
    for (var i = 0; i < li.length; i++) {
        var a = li[i].querySelectorAll("#searchable")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            ul.style.display = "block";
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
other.addEventListener("click", function () {
    input.value = null;
    if (ul.style.display === "block") {
        ul.style.display = "none";
    }
});
