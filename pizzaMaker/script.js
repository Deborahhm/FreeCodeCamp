
function hideImg() {
    document.getElementById('main-pasta').style.visibility = 'hidden';
    document.getElementById('main-salse').style.visibility = 'hidden';
    document.getElementById('main-topping').style.visibility = 'hidden';
    document.getElementById('button-icon').style.visibility = 'hidden';
    document.getElementById('button-icon2').style.visibility = 'visible';

    var pasta1= document.getElementById("traditional");
    var pasta2= document.getElementById("integral");
    var pasta3= document.getElementById("long");
    var sause1= document.getElementById("Cheese");
    var sause2= document.getElementById("tomato");
    var topping1= document.getElementById("veg");
    var topping2= document.getElementById("non-veg");

    if (pasta1.checked == true){
        document.getElementById('image1').style.visibility = 'visible';
      }
    if (pasta2.checked == true){
        document.getElementById('image2').style.visibility = 'visible';
    }
    if (pasta3.checked == true){
        document.getElementById('image3').style.visibility = 'visible';
    }
    if (sause1.checked == true){
        document.getElementById('image4').style.visibility = 'visible';
      }
    if (sause2.checked == true){
        document.getElementById('image5').style.visibility = 'visible';
    }
    if (topping1.checked == true){
        document.getElementById('image6').style.visibility = 'visible';
    }
    if (topping2.checked == true){
        document.getElementById('image7').style.visibility = 'visible';
    }
    if ((topping1.checked == true)&&(topping2.checked == true)){
        document.getElementById('image8').style.visibility = 'visible';
    }
  }

  function showImg() {
    document.getElementById('main-pasta').style.visibility = 'visible';
    document.getElementById('main-salse').style.visibility = 'visible';
    document.getElementById('main-topping').style.visibility = 'visible';
    document.getElementById('button-icon').style.visibility = 'visible';
    document.getElementById('button-icon2').style.visibility = 'hidden';
    document.getElementById('pizza-img-parent').style.visibility = 'hidden';
    document.getElementById('image1').style.visibility = 'hidden';
    document.getElementById('image2').style.visibility = 'hidden';
    document.getElementById('image3').style.visibility = 'hidden';
    document.getElementById('image4').style.visibility = 'hidden';
    document.getElementById('image5').style.visibility = 'hidden';
    document.getElementById('image6').style.visibility = 'hidden';
    document.getElementById('image7').style.visibility = 'hidden';
    document.getElementById('image8').style.visibility = 'hidden';
    

  }