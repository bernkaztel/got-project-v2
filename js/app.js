function showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse, imageHouse) {

    var mymodal = $('#myModal');
    // console.log(thisa.dataset.alliance);
    mymodal.find('#modaltitle').text(nameHouse);
    mymodal.find('#imagemodal').attr('src', imageHouse);
    mymodal.find('#word').text(wordHouse);
    mymodal.find('#region').text(regionHouse);
    mymodal.find('#description').text(descriptionHouse);
    mymodal.modal('show');
}

function stark() {
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
            var house = $("#stark");
            var imageHouse = "assets/images/Stark.png";
            showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
        },
        dataType: 'json',
    }); 
}//final de funcion Stark


function tully() {
        $.ajax({
            // Saca casa Tully
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
                var imageHouse = "assets/images/Tully.png";
                showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
            },
            dataType: 'json',
        }); //final de funcion Tully
    }

    function lannister() {
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
                var imageHouse = "assets/images/Lannister.png";
                showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
            },
            dataType: 'json',
        }); //final de funcion Lannister
    }

function targaryen() {
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
                var descriptionHouse = "";
                // console.log(nameHouse);
                // console.log(wordHouse);
                // console.log(regionHouse);
                // console.log(coatHouse);
                // console.log(titlesHouse);
                // console.log(descriptionHouse);
                var imageHouse = "assets/images/Targaryen.png";
                showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
            },
            dataType: 'json',
        }); //final de funcion Targaryen

    }

    function baratheon() {
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
                var imageHouse = "assets/images/Baratheon.png";
                showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
            },
            dataType: 'json',
        }); //final de funcion Baretheon
    }

function tyrell() {
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
                var imageHouse = "assets/images/Tyrell.png";
                showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
            },
            dataType: 'json',
        }); //final de funcion Tyrell
    }

    function arryn() {
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
                var imageHouse = "assets/images/Arryn.png";
                showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
            },
            dataType: 'json',
        }); //final de funcion Arryn
    }

    function greyjoy() {
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
                var imageHouse = "assets/images/Greyjoy.png";
                showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
            },
            dataType: 'json',
        }); //final de funcion Grayjoy
    }

function martell() {
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
                var imageHouse = "assets/images/Martell.png";
                showModal(nameHouse, wordHouse, regionHouse,coatHouse,titlesHouse,descriptionHouse,imageHouse);
            },
            dataType: 'json',
        }); //final de funcion Martell

    }

        

