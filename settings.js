const chance_required = document.getElementById("diffslider");
function reset() {
        if (confirm("Are you sure you want to reset all of your DTT data?") == true) {
                localStorage.clear();
        }
        chance_required.value = 50;
}
document.getElementById('reset').onclick = reset;
chance_required.oninput = function() {
        localStorage.setItem("chancerequired", chance_required.value)
      }
if (localStorage.getItem("chancerequired")) {
        chance_required.value = localStorage.getItem("chancerequired");
}