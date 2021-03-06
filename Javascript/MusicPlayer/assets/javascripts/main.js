window.addEventListener("load", initEvents);
var audio;
var slider;
function initEvents() {
    audio = document.querySelector("#audio");
    slider = document.querySelector("#slider")
    slider.addEventListener("change", seekSong);
    document.querySelector("#play").addEventListener("click", playPauseSong);
    showAllSongs();
    loadPlaylist();
}

function showAllSongs() {
    var ul = document.querySelector("#all_songs");
    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);
        img.className = 'w-100';
        img.setAttribute('title', obj.song_id);
        var h5 = document.createElement("h5");
        h5.innerHTML = obj.song_name;
        h5.className = "text-center";
        var btn = document.createElement("button");
        btn.innerHTML = "Add to Playlist";
        btn.className = "btn btn-primary w-100";
        li.appendChild(img);
        li.appendChild(h5);
        li.appendChild(btn);
        ul.appendChild(li);
        img.addEventListener("click", playSong);
        btn.addEventListener("click", addToPlaylist);
    })
}

function playSong() {
    var songId = event.srcElement.title;
    // console.log("Id is",songId);
    for(var i = 0; i < songsList.length; i++) {
        if(songsList[i].song_id == songId) {
            var song_src = songsList[i].song_url;
            var song_name = songsList[i].song_name;
            break;
        }
    }
    document.querySelector("#current_song").innerHTML = song_name;
    // console.log(song_src);
    audio.src = song_src;
    audio.play();
    setTimeout(function() {
        slider.max = audio.duration;
    },500);
    setInterval(changeSliderPos, 1000);
}

function changeSliderPos() {
    slider.value = audio.currentTime;
}

function playPauseSong() {
    // audio.play();
    audio.pause();
}

function nextSong() {

}

function prevSong() {

}

function stopSong() {

}

function seekSong() {
    audio.currentTime = slider.value;
}

function addToPlaylist() {
    var id = event.srcElement.parentElement.children[0].title;
    // console.log(id);
    for(var i = 0; i < obj.playList.length; i++) {
        if(obj.playList[i].id == id) {
            alert("Song already exist")
            return
        }
    }
    for(var i = 0; i < songsList.length; i++) {
        if(songsList[i].song_id == id) {
            obj.addSong(id, songsList[i].song_name, songsList[i].song_url, songsList[i].song_thumb);
            break;
        }
    }
    showPlayList();
    savePlaylist();
}

function showPlayList() {
    var ul = document.querySelector("#playlist");
    ul.innerHTML = "";
    obj.playList.forEach(function(x) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute('src', x.thumb);
        img.setAttribute('title', x.id);
        var h6 = document.createElement("h6");
        h6.innerHTML = x.name;
        h6.className = "text-center";
        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.className = "btn btn-primary";
        li.appendChild(img);
        li.appendChild(h6);
        li.appendChild(btn);
        ul.appendChild(li);
        btn.addEventListener("click", deleteSong);
    });
}

function deleteSong() {
    var id = event.srcElement.parentElement.children[0].title;
    obj.deleteSong(id);
    showPlayList();
    savePlaylist();
}

function savePlaylist() {
    if(window.localStorage) {
        var data = JSON.stringify(obj.playList);
        localStorage.setItem('songs',data);
    }
}

function loadPlaylist() {
    if(window.localStorage) {
        if(localStorage.songs) {
            var data = JSON.parse(localStorage.songs);
            obj.playList = data;
            showPlayList();
        }
    }
}