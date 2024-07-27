var form = document.querySelector("#tableForm");
var table = document.querySelector("#table");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event === null || event === void 0 ? void 0 : event.target;
    var input = form === null || form === void 0 ? void 0 : form.firstElementChild;
    var tableOf = Number(input.value);
    table.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        table.innerHTML += "<p>".concat(tableOf, " x ").concat(i, " = ").concat(tableOf * i, "</p>");
    }
});
