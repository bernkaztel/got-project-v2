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
        $('#user-name').html(userName);
        $('#user-name2').html(userName);
        $('#user-picture').attr('src', userPicture);
    }



    document.getElementById('bt-post').addEventListener('click', archivo, false);
}); //final funcion ready