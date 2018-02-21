function showModal(event) {
    var thisa = event.target;
    // console.log(thisa);
    var mymodal = $('#myModal');
    // console.log(thisa.dataset.alliance);
    mymodal.find('#modaltitle').text(thisa.dataset.name);
    mymodal.find('#imagemodal').attr('src', thisa.dataset.picture);
    mymodal.find('#born').text(thisa.dataset.born);
    mymodal.find('#alliance').attr('src', thisa.dataset.alliance);
    mymodal.find('#description').text( thisa.dataset.description);
    mymodal.modal('show');
} 






$(document).ready(function () {
for ( i = 0; i < dataCh.length; i++) {
    var characterNumber = (dataCh[i].number);
    var currentCharacter = dataCh[i];
    callAjax(characterNumber, currentCharacter);
}

function callAjax (characterNumber, currentCharacter) {
    $.ajax({
        type: "GET",
        url: "https://anapioficeandfire.com/api/characters/" + characterNumber,
        success: function (data) {
            // console.log(data);
            // console.log(currentCharacter);
            var characterName= data.name;
            var characterAliases= data.aliases[0];
            var characterBorn= data.born;
            var characterTitles= data.titles[0];
            var characterCulture= data.culture;
            var characterAlliance= currentCharacter.alliance;
            var characterPicture= currentCharacter.picture;
            var characterDescription= currentCharacter.description;
            // console.log(characterName);
            // console.log(characterAliases);
            // console.log(characterBorn);
            // console.log(characterTitles);
            // console.log(characterCulture);
            // console.log(characterPicture);
            // console.log(characterAlliance);
            // console.log(characterDescription);
            printCharacter(characterName,characterPicture, characterAliases, characterBorn,characterTitles,characterCulture, characterAlliance, characterDescription);
        },
        dataType: 'json',
    }); 
}




}); //final funcion ready




function printCharacter(characterName,characterPicture, characterAliases, characterBorn,characterTitles,characterCulture, characterAlliance, characterDescription  ) {
    var characterContainer = $("<div></div>");
    characterContainer.attr({
        class: 'col',
    });
    $("#characters-container").append(characterContainer);
    var hovereffect = $("<div></div>");
    hovereffect.attr({
        class: 'hovereffect mt-1 mb-1',
    });
    characterContainer.append(hovereffect);
    var characterImage = $("<img></img>");
    characterImage.attr({
        class: 'character-image',
        src: characterPicture,
    });
    hovereffect.append(characterImage);
    var overlay = $("<div></div>");
    overlay.attr({
        class: 'overlay',
    });
    hovereffect.append(overlay);
    var nameCh = $("<button></button>").text(characterName);
    nameCh.attr({
        class: 'btn btn-noback mt-5 openModal',
        'data-name': characterName,
        'data-picture': characterPicture,
        'data-aliases': characterAliases,
        'data-born': characterBorn,
        'data-titles': characterTitles,
        'data-culture': characterCulture,
        'data-alliance': characterAlliance,
        'data-description': characterDescription,
        'onclick': "showModal(event)"

    });
    overlay.append(nameCh); 
}