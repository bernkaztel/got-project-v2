$(document).ready(function () {



    $.ajax({
        // Saca casa Stark
        type: "GET",
        url: "https://www.anapioficeandfire.com/api/houses/362",
        success: function (data) {
            //   console.log(data);
            var nameHouse = data.name;
            var wordHouse = data.words;
            var regionHouse = data.region;
            var coatHouse = data.coatOfArms;
            var titlesHouse = data.founder;
            var descriptionHouse = "House Stark of Winterfell is one of the Great Houses of Westeros and the principal noble house of the north. In days of old they ruled as Kings of Winter, but since Aegon's Conquest they have been Wardens of the North and ruled as Lords of Winterfell. Their seat, Winterfell, is an ancient castle renowned for its strength.";
            // console.log(nameHouse);
            // console.log(wordHouse);
            // console.log(regionHouse);
            // console.log(coatHouse);
            // console.log(titlesHouse);
            // console.log(descriptionHouse);
            var imageHouse = "../../assets/images/Stark.png";
            printHouse(nameHouse, wordHouse, imageHouse);
        },
        dataType: 'json',
    }); //final de funcion Stark 



}); //final funcion ready







function printHouse(nameHouse, wordHouse, imageHouse) {
    var houseContainer = $("<div></div>");
    houseContainer.attr({
        class: 'col house-container d-block mx-auto',
    });
    $("#houses-container").append(houseContainer);
    var houseImageLink = $("<a></a>");
    houseImageLink.attr({
        href: '#',
    });
    houseContainer.append(houseImageLink);
    var houseImage = $("<img></img>");
    houseImage.attr({
        class: 'd-block mx-auto house-image',
        src: imageHouse,
    });
    houseImageLink.append(houseImage);
    var houseName = $("<h4></h4>").text(nameHouse);
    houseName.attr({
        class: 'font-weight-bold text-center',
    });
    houseContainer.append(houseName);
    var houseWord = $("<h6></h6>").text(wordHouse);
    houseWord.attr({
        class: 'font-italic text-center',
    });
    houseContainer.append(houseWord);
}