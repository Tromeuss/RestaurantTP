function calculerAddition() {
    var box1 = document.getElementById("box1").value;
    var box2 = document.getElementById("box2").value;
    var box3 = document.getElementById("box3").value;
    var total = parseFloat(box1) + parseFloat(box2) + parseFloat(box3);
    document.getElementById("total").innerHTML = "Total : " + total + " $";
    document.getElementById("ptt").innerHTML = "Entrée : " + box1 + " $";
    document.getElementById("pttt").innerHTML = "Plat : " + box2 + " $";
    document.getElementById("ptttt").innerHTML = "Dessert : " + box3 + " $";
  }