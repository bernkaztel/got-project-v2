 //Funcion para postear comentario
 function postear() {
     var firstcontainer2 = $("<div></div>");
     firstcontainer2.attr({
         class: 'comments mt-3 p-3',
     });
     $("#comment-section-post").append(firstcontainer2);
     var userName = "Angelina dice:";
     var user = $("<span></span>").text(userName);
     user.attr({
         class: 'font-weight-bold d-block littlefont',
     });
     firstcontainer2.append(user);
     var cardcommenttext2 = ($('#card-comment-post').val());
     var commentext = $("<span></span>").text(cardcommenttext2);
     commentext.attr({
         class: 'littlefont',
     });
     firstcontainer2.append(commentext);
     $('#card-comment-post').val('');
 } //Final de funcion para postear comentario

 $(document).ready(function () {

     getUserData();
     /*Función post "Comparte tus pensamientos"*/
     $('#bt-post').click(function () {
         $('#simplepost').clone().prependTo("#containerpost");
         $('#post-description').text(($('#comment').val()));
         $('#comment-section-post').html('');
         $('#hashtag-container').text(($('#hashtag').val()));
         //Borrar campos
         $('#comment').val('');
         $('#hashtag').val('');
     }); //Final de funcion para postear review


     //Función de colocar imagen
     function archivo(evt) {
         var files = document.getElementById('files').files;

         //Obtenemos la imagen del campo "file". 
         for (var i = 0, f; f = files[i]; i++) {
             //Solo admitimos imágenes.
             if (!f.type.match('image.*')) {
                 continue;
             }

             var reader = new FileReader();

             reader.onload = (function (theFile) {
                 return function (e) {
                     // Creamos la imagen.
                     document.getElementById("list").innerHTML = ['<img class=" thumb littlepicture d-block  mx-auto m-2 mb-4 mt-0" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
                 };
             })(f);
             reader.readAsDataURL(f);
         }
     } //Final de función colocar imagen

     function getUserData() {
         var userName = localStorage.getItem("userNameL");
         var userEmail = localStorage.getItem("userEmailL");
         var userPicture = localStorage.getItem("userPictureL");
         var userHouse = localStorage.getItem("house");
         $('#user-name').html(userName);
         $('#user-name2').html(userName);
         $('#user-picture').attr('src', userPicture);
        if (userHouse === "Stark") {
            $('#housewall').attr("src","../../assets/images/Stark.png");
            $('#housebar').addClass('local-nav-Stark');
            $('#body').addClass("body-s");
        } else if(userHouse === "Targaryen") {
            $('#housewall').attr("src","../../assets/images/Targaryen.png");
            $('#housebar').addClass('local-nav-Tar');
            $('#body').addClass("body-t");
        }
        else if(userHouse === "Greyjoy") {
            $('#housewall').attr("src","../../assets/images/Greyjoy.png");
            $('#housebar').addClass('local-nav-G');
            $('#body').addClass("body-g");
        }
        else if(userHouse === "Lannister") {
            $('#housewall').attr("src","../../assets/images/Lannister.png");
            $('#housebar').addClass('local-nav-Lan');
            $('#body').addClass("body-l");
        }
        else if(userHouse === "Martell") {
            $('#housewall').attr("src","../../assets/images/Martell.png");
            $('#housebar').addClass('local-nav-M');
            $('#body').addClass("body-m");
        }
        else if(userHouse === "Arryn") {
            $('#housewall').attr("src","../../assets/images/Arryn.png");
            $('#housebar').addClass('local-nav-A');
            $('#body').addClass("body-a");
        }
        else if(userHouse === "Baratheon") {
            $('#housewall').attr("src","../../assets/images/Baratheon.png");
            $('#housebar').addClass('local-nav-B');
            $('#body').addClass("body-b");
        } else if(userHouse === "Tully") {
            $('#housewall').attr("src","../../assets/images/Tully.png");
            $('#housebar').addClass('local-nav-Tu');
            $('#body').addClass("body-tu");
        } else if(userHouse === "Tyrell") {
            $('#housewall').attr("src","../../assets/images/Tyrell.png");
            $('#housebar').addClass('local-nav-Ty');
            $('#body').addClass("body-ty");
        }
     }



     document.getElementById('bt-post').addEventListener('click', archivo, false);
 }); //final funcion ready