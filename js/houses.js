function showModal(event) {
    var thi = event.target;
    var thisa = thi.parentNode;

    console.log(thisa);
    var mymodal = $('#myModal');
    // console.log(thisa.dataset.alliance);
    mymodal.find('#modaltitle').text(thisa.dataset.name);
    mymodal.find('#imagemodal').attr('src', thisa.dataset.image);
    mymodal.find('#word').text(thisa.dataset.word);
    mymodal.find('#region').text(thisa.dataset.region);
    mymodal.find('#description').text(thisa.dataset.description);
    mymodal.modal('show');
}

// function search() {
//     var inputSearch = $('#searchHouses')[0];
//     var searchValue = inputSearch.value.toLowerCase();
//     var HousesSearch = document.getElementsByClassName("houseType");
//     for (i = 0; i < HousesSearch.length; i++) {
//         var houseId = HousesSearch[i].id;
//         element = document.getElementById(houseId);
//         if (houseId.indexOf(searchValue) > -1) {
//             console.log("concuerda" + houseId);
//         } else{
//             console.log(" no concuerda" + houseId);
//         }

//     }
// }


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
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Stark


        $.ajax({
            // Saca casa Lannister
            type: "GET",
            url: "https://www.anapioficeandfire.com/api/houses/229",
            success: function (data) {
                //   console.log(data);
                var nameHouse = data.name;
                var wordHouse = data.words;
                var regionHouse = data.region;
                var coatHouse = data.coatOfArms;
                var titlesHouse = data.founder;
                var descriptionHouse = "House Lannister of Casterly Rock is one of the Great Houses of Seven Kingdoms, and the principal house of the westerlands. Their seat is Casterly Rock, though another branch exists that is based in nearby Lannisport.";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "../../assets/images/Lannister.png";
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Lannister


        $.ajax({
            // Saca casa Targaryen coorroborar numero, está mal
            type: "GET",
            url: "https://www.anapioficeandfire.com/api/houses/378",
            success: function (data) {
                //   console.log(data);
                var nameHouse = data.name;
                var wordHouse = data.words;
                var regionHouse = data.region;
                var coatHouse = data.coatOfArms;
                var titlesHouse = data.founder;
                var descriptionHouse = "House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "../../assets/images/Targaryen.png";
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Targaryen


        $.ajax({
            // Saca casa Baretheon
            type: "GET",
            url: "https://www.anapioficeandfire.com/api/houses/16",
            success: function (data) {
                //   console.log(data);
                var nameHouse = data.name;
                //Dato no está incluido en data
                var wordHouse = "Ours is the Fury";
                var regionHouse = data.region;
                var coatHouse = data.coatOfArms;
                var titlesHouse = data.founder;
                var descriptionHouse = "House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "../../assets/images/Baratheon.png";
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Baretheon


        $.ajax({
            // Saca casa Tyrell
            type: "GET",
            url: "https://www.anapioficeandfire.com/api/houses/398",
            success: function (data) {
                //   console.log(data);
                var nameHouse = data.name;
                var wordHouse = data.words;
                var regionHouse = data.region;
                var coatHouse = data.coatOfArms;
                var titlesHouse = data.founder;
                var descriptionHouse = "House Tyrell of Highgarden is one of the Great Houses of the Seven Kingdoms, being Lords Paramount of the Mander and the liege lords of the Reach. A large, wealthy house, its wealth is only surpassed among the Great Houses by House Lannister, and the Tyrells can field the greatest armies.";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "../../assets/images/Tyrell.png";
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Tyrell

        $.ajax({
            // Saca casa Arryn
            type: "GET",
            url: "https://www.anapioficeandfire.com/api/houses/7",
            success: function (data) {
                //   console.log(data);
                var nameHouse = data.name;
                var wordHouse = data.words;
                var regionHouse = data.region;
                var coatHouse = data.coatOfArms;
                var titlesHouse = data.founder;
                var descriptionHouse = "House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings.";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "../../assets/images/Arryn.png";
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Arryn

        $.ajax({
            // Saca casa Greyjoy
            type: "GET",
            url: "https://www.anapioficeandfire.com/api/houses/169",
            success: function (data) {
                //   console.log(data);
                var nameHouse = data.name;
                var wordHouse = data.words;
                var regionHouse = data.region;
                var coatHouse = data.coatOfArms;
                var titlesHouse = data.founder;
                var descriptionHouse = "House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke-";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "../../assets/images/Greyjoy.png";
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Grayjoy


        $.ajax({
            // Saca casa Martell
            type: "GET",
            url: "https://www.anapioficeandfire.com/api/houses/285",
            success: function (data) {
                //   console.log(data);
                var nameHouse = data.name;
                var wordHouse = data.words;
                var regionHouse = data.region;
                var coatHouse = data.coatOfArms;
                var titlesHouse = data.founder;
                var descriptionHouse = "House Martell of Sunspear is a legally extinct Great House of Westeros. It ruled the peninsula of Dorne in the far south of the continent from their castle Sunspear. Though loyal to the Iron Throne, the Martells were never conquered by the Targaryens and pursued a more isolated role in wider political events since Robert's Rebellion.";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "../../assets/images/Martell.png";
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Martell



        $.ajax({
            // Saca casa Martell
            type: "GET",
            url: "https://www.anapioficeandfire.com/api/houses/395",
            success: function (data) {
                //   console.log(data);
                var nameHouse = data.name;
                var wordHouse = data.words;
                var regionHouse = data.region;
                var coatHouse = data.coatOfArms;
                var titlesHouse = data.founder;
                var descriptionHouse = "House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are ";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "../../assets/images/Tully.png";
                printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse);
            },
            dataType: 'json',
        }); //final de funcion Tully



        function printHouse(nameHouse, wordHouse, imageHouse, regionHouse, coatHouse, titlesHouse, descriptionHouse) {
            var houseContainer = $("<div></div>");
            houseContainer.attr({
                class: 'col house-container d-block mx-auto houseType',
                'id': nameHouse,
            });
            $("#houses-container").append(houseContainer);
            var houseImageLink = $("<a></a>");
            houseImageLink.attr({
                href: '#',
                'onclick': "showModal(event)",
                'data-name': nameHouse,
                'data-word': wordHouse,
                'data-image': imageHouse,
                'data-region': regionHouse,
                'data-coat': coatHouse,
                'data-titles': titlesHouse,
                'data-description': descriptionHouse,
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

    }); //final funcion ready