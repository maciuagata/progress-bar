
  document.getElementById("myInput").addEventListener('keyup',function(e){
      if (e.keyCode !== 13) {
      return;
    }


var x = this.value;
    var c = null;
    if (x < 40) {
      c = "bg-danger";
    } else if (x >= 40 && x < 70) {
      c = "bg-info";
    } else {
      c = "bg-success";
    }

     document.getElementById("bar").style.width = x+"%";
      document.getElementById("bar").className = c+" progress-bar";
  });
  function loseFocus() {
  document.getElementById("myInput").blur();
}
