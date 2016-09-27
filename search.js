function keyWordsearch() {
    gapi.client.setApiKey('AIzaSyBbkl-jMM1UV32pQDzMlRTCyDTfAZW6xvM');
    gapi.client.load('youtube', 'v3', function() {
            makeRequest();
    });
}
function makeRequest() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        order: 'viewCount',
        safeSearch: 'strict'
    });
    console.log("pass1");
    request.execute(function(response) {
            console.log(response);
        var vidId = response.items[0].id.videoId;
        stuff(vidId);
    });
}
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    var b = document.getElementById('search-button');
    b.onclick = function() {
      keyWordsearch();
        }
}

var back = document.getElementById('restart-button');
back.onclick = function () {
    location.reload();
}

function stuff(vidId) {
    var search = document.getElementById('buttons');
  search.style.visibility = 'hidden';
  var restart = document.getElementById('restart');
  console.log(restart);
  restart.style.visibility = 'visible';
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: vidId
    });
}
