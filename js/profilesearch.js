function search() {
    var inputSearch = $('#searchHashtags')[0];
    var searchValue = inputSearch.value.toLowerCase();
    // console.log(searchValue);
    var HashtagSearch = document.getElementsByClassName("hashtagsearch");
    // console.log(HashtagSearch);
    for (i = 0; i < HashtagSearch.length; i++) {
        var hashtagText = HashtagSearch[i].textContent;
        // console.log(hashtagText);
        var parent = HashtagSearch[i].closest('.simplepost');
        console.log(parent);
        if (hashtagText.indexOf(searchValue) > -1) {
            parent.classList.remove("hidden-xs-up");
        } else {
            parent.classList.add("hidden-xs-up");
        }

    }
}
$(document).ready(function () {





}); //final funcion ready