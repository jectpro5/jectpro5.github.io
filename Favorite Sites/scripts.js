document.getElementById('forBookmrkSites').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    //77=================================================
    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteUrl
    };
    // Local storage test
    // localStorage.setItem('test', 'rrrbbb');
    //  console.log(localStorage.getItem('test'));
    //  localStorage.removeItem('test');
    //  console.log(localStorage.getItem('test'));

    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // get bookmars from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark to array
        bookmarks.push(bookmark);
        // re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    //77 Clear form=========
    document.getElementById('forBookmrkSites').reset();
    //44Re-fetch bookmarks
    fetchBookmarks();
    e.preventDefault();
}

//33 Delete bookmark=============
function deleteBookmark(url) {
    // Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Looop throught bookmarks
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }
    // re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    //Re-fetch bookmarks
    fetchBookmarks();
}

//22 Fetch bookmarks=============
function fetchBookmarks() {
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Get output id
    var bookmarksResults = document.getElementById('bookmarksResults');
    //Build output
    bookmarksResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksResults.innerHTML += '<div class="well">' +
            '<h3>' + name +
            '<a class="btn btn-default for_margn" target="_blank" href="' + url + '">Visit</a>' +
            '<a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a>' +
            '</h3>' +
            '</div>';
    }
}

//Validate form=====================================
function validateForm(siteName, siteUrl) {
    //55==============================================
    if (!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }
    //66==============================================
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (!siteUrl.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }
    return true;
}
