window.addEventListener("load", initEvents);

var audioPlayer;
var showCurrentSong;
function initEvents() {
    audioPlayer = document.querySelector("#audio");
    showCurrentSong = document.querySelector("#current_song");
    loadAllSongs();
}

function loadAllSongs() {
    var ul = document.querySelector("#songsList");

    // for(var i = 0; i < songsList.length; i++) {
    //     var li = document.createElement("li");
    //     li.innerHTML = songsList[i].song_name;
    //     ul.appendChild(li);
    // }

    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        li.className = 'col-md-3';

        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);
        img.addEventListener("error",function() {
            this.src = "https://i1.sndcdn.com/artworks-000161401845-ko937h-t500x500.jpg";
        });
        img.className = 'w-100';
        img.setAttribute('title', obj.song_id);

        var span = document.createElement("span");
        span.innerHTML = obj.song_name;

        var btn = document.createElement("button");
        btn.innerHTML = "Add to playlist";
        btn.className = "d-block w-100 btn btn-primary";

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);

        img.addEventListener("click", playSong);
        btn.addEventListener("click", addToPlaylist);
    });
}

function playSong() {
    var songId = event.srcElement.title;
    for(var i = 0; i < songsList.length; i++) {
        if(songsList[i].song_id == songId) {
            var currentSong = songsList[i];
        }
    }
    // console.log(currentSong);
    audioPlayer.src = currentSong.song_url;
    audioPlayer.play();
    showCurrentSong.innerHTML = currentSong.song_name;
}

function addToPlaylist() {
    var songId = event.srcElement.parentElement.children[0].title;
    for(var i = 0; i < songsList.length; i++) {
        if(songsList[i].song_id == songId) {
            var currentSong = songsList[i];
        }
    }
    playListOperations.addSong(songId, currentSong.song_name, currentSong.song_url,
        currentSong.song_thumb);
    
    showPlayList();
}

function showPlayList() {
    var ul = document.querySelector("#playList");
    ul.innerHTML = "";
    playListOperations.playList.forEach(function(obj) {
        var li = document.createElement("li");

        var img = document.createElement("img");
        img.setAttribute('src', obj.thumb);
        img.addEventListener("error",function() {
            this.src = "https://i1.sndcdn.com/artworks-000161401845-ko937h-t500x500.jpg";
        });
        img.className = 'w-100';
        img.setAttribute('title', obj.id);

        var span = document.createElement("span");
        span.innerHTML = obj.name;

        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.className = "d-block w-100 btn btn-primary";

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);

        img.addEventListener("click", playSong);
        btn.addEventListener("click", deleteFromPlaylist);
    });
}

function deleteFromPlaylist() {
    var songId = event.srcElement.parentElement.children[0].title;
    playListOperations.deleteSong(songId);
    showPlayList();
}