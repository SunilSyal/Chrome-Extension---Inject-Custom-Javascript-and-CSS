(function () {
  function fnAddButtons() {
    var btn = document.createElement("input");
    btn.value = "Search Mathemafia";
    btn.id = "search-mm-btn";
    btn.type = "submit";
    document.querySelector(".FPdoLc.tfB0Bf center").appendChild(btn);
  }

  function fnDefineEvents() {
    document
      .getElementById("search-mm-btn")
      .addEventListener("click", function (event) {
        fnSearch(event.target.value.split(" ")[1]);
      });
  }
  function fnSearch(str) {
    document.querySelector(".gLFyf.gsfi").value = str;
  }

  fnAddButtons();
  fnDefineEvents();
})();
