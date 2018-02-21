var b = "";

function results () {
    var val = parseInt($('input[name=attribute]:checked').val()); 
    var val1 = parseInt($('input[name=betrays]:checked').val()); 
    var val2 = parseInt($('input[name=leader]:checked').val()); 
    var val3 = parseInt($('input[name=song]:checked').val()); 
    var val4 = parseInt($('input[name=profesion]:checked').val()); 
    var total = val + val1 + val2  +val3 +val4;
    var results ="";
    if(total <=  7) {
        var gotHouse = 'Stark';
        localStorage.setItem("house", gotHouse);
        var results = "myModalStark";
    } else if (total > 8 && total <=  12) {
        var results = "myModalTargaryen";
        var gotHouse = 'Targaryen';
        localStorage.setItem("house", gotHouse);
    }else if (total > 37 && total <=  42) {
        var results = "myModalBaretheon";
        var gotHouse = 'Baratheon';
        localStorage.setItem("house", gotHouse);
    } else if (total > 27 && total <=  32) {
        var results = "myModalTyrell";
        var gotHouse = 'Tyrell';
        localStorage.setItem("house", gotHouse);
    } else if (total > 32 && total <=  37) {
        var gotHouse = 'Arryn';
        localStorage.setItem("house", gotHouse);
        var results = "myModalArryn";
    } 
    else if (total > 12 && total <=  17) {
        var gotHouse = 'Greyjoy';
        localStorage.setItem("house", gotHouse);
        var results = "myModalGreyjoy";
    } else if (total > 17 && total <=  22) {
        var gotHouse = 'Lannister';
        localStorage.setItem("house", gotHouse);
        var results = "myModalLannister";
    } else if (total > 22 && total <=  27) {
        var gotHouse = 'Martell';
        localStorage.setItem("house", gotHouse);
        var results = "myModalMartell";
    } else if (total > 42 && total <=  45) {
        var gotHouse = 'Tully';
        localStorage.setItem("house", gotHouse);
        var results = "myModalTully";
    } 
    
    console.log(results);
    var a = "#";
    var b = a.concat(results);
console.log(b);   
$(b).modal('show');

$("input[name=attribute]").attr("checked", false);
$("input[name=betrays]").attr("checked", false);
$("input[name=leader]").attr("checked", false);
$("input[name=song]").attr("checked", false);
$("input[name=profesion]").attr("checked", false);
}


function redirect() {
    window.location.assign("wall.html");
    
}

$(document).ready(function () {
    changeImage();
    
    
    var images = ["../../assets/images/Baratheon.png","../../assets/images/Greyjoy.png", "../../assets/images/Lannister.png", "../../assets/images/Martell.png", "../../assets/images/Stark.png", "../../assets/images/Targaryen.png", "../../assets/images/Tully.png", "../../assets/images/Tyrell.png","../../assets/images/Arryn.png" ];
    function changeImage(){
        var i = 0;
        var inter = setInterval(function(){
            if(i < images.length)
            {
                document.getElementById("userImage").src = images[i];
                i++;
            }
            else
            {
                i = 0;
                document.getElementById("userImage").src = images[i];
                i++;
            }
        },1000);
    } //final de funcion changeImage 
    
  
    
    
    }); //final funcion ready
    
