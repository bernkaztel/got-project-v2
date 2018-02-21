$('#searchHashtags').val("");

function search() {
    var inputSearch = $('#searchHashtags')[0];
    var searchValue = inputSearch.value;
    // console.log(searchValue);
    var HashtagSearch = dataCha;
    // console.log(HashtagSearch);
    for (i = 0; i < HashtagSearch.length; i++) {
        var name = HashtagSearch[i].Name;
        var born = HashtagSearch[i].Born;
        var titles = HashtagSearch[i].Titles.join(', ');
        var aliases = HashtagSearch[i].Aliases.join(', ');
        var actor = HashtagSearch[i].PlayedBy;
        
        // console.log(hashtagText);
        if (searchValue == name) {
            printCharacter2 (name, born, titles, aliases,actor);
        } else{
            console.log("no se encontró");
        }

    }
    $('#searchHashtags').val("");
}

function printCharacter2 (name, born, titles, aliases,actor) {
    var characterSearchContainer = $("<div></div>");
    characterSearchContainer.attr({
        class: 'card m-5',
    });
    $("#searchcontainer").append(characterSearchContainer);
    var header = $("<div></div>");
    header.attr({
        class: 'card-header',
    });
    characterSearchContainer.append(header);
    var h6 = $("<h6></h6>").text(name);
    h6.attr({
        class: 'm-2',
    });
    header.append(h6);
    var block = $("<div></div>");
    block.attr({
        class: 'card-block',
    });
    characterSearchContainer.append(block);
    var bornc = $("<p></p>").text("Born in: " + born);
    bornc.attr({
        class: 'littlefont',
    });
    block.append(bornc);
    var titlesc = $("<p></p>").text("Titles: " + titles);
    titlesc.attr({
        class: 'littlefont',
    });
    block.append(titlesc);
    var aliasesc = $("<p></p>").text("Aliases: " + aliases);
    aliasesc.attr({
        class: 'littlefont',
    });
    block.append(aliasesc);
    var actorc = $("<p></p>").text("Played by: " + actor);
    actorc.attr({
        class: 'littlefont',
    });
    block.append(actorc);
    
}