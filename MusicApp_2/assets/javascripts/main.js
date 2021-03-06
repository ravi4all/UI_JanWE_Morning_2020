window.addEventListener("load", initEvent);
var audio;
var flag = false;

function initEvent() {
    loadSongs();
    audio = document.querySelector("#audio");
    playBtn = document.querySelector("#play");
    playBtn.addEventListener("click", togglePlay);
    slider = document.querySelector("#slider");
    slider.addEventListener("change", seekSong);
    song_total_time = document.querySelector(".song_total_time");
    loadPlayList();
}

function loadSongs() {
    var ul = document.querySelector("#songsList");
    // for (var i = 0; i < songs.length; i++) {
    //     var li = document.createElement("li");
    //     var span = document.createElement("span");
    //     span.innerHTML = songs[i].s_name;
    // }
    songs.forEach(function(obj) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = obj.song_name;
        var btn = document.createElement("button");
        btn.innerHTML = 'Add to Playlist';
        btn.className = "btn btn-primary d-block w-100";
        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);
        img.setAttribute('title', obj.song_id);
        li.appendChild(img);
        // console.log(obj);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
        img.addEventListener("click", playSong);
        btn.addEventListener("click", addSong);
    })
}

function playSong() {
    var s_id = event.srcElement.title;
    // console.log(tag);
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].song_id == s_id) {
            var songUrl = songs[i].song_url;
            break;
        }
    }
    audio.src = songUrl;
    audio.play();
    setInterval(function() {
        slider.value = audio.currentTime;
    }, 1000);
    setTimeout(function() {
        var duration = audio.duration;
        slider.max = duration;
        var min = parseInt(duration / 60);
        var sec = parseInt(duration % 60);
        song_total_time.innerHTML = "0" + min + ":" + sec;
    }, 500);
    flag = true;
    togglePlay();
}

function seekSong() {
    audio.currentTime = slider.value;
}

function togglePlay() {
    if (!flag) {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        audio.pause();
    } else {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        audio.play();
    }
    flag = !flag;
}

function addSong() {
    var s_id = event.srcElement.parentElement.children[0].title;
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].song_id == s_id) {
            var songObj = songs[i];
            obj.addSong(songObj.song_id, songObj.song_name, songObj.song_url, songObj.song_thumb);
            break
        }
    }
    printSongs();
    savePlayList();
}

function savePlayList() {
    if (window.localStorage) {
        var json = JSON.stringify(obj.playList);
        localStorage.setItem("playlist", json);
    }
}

function loadPlayList() {
    if (window.localStorage) {
        if (localStorage.getItem('playlist')) {
            var arr = localStorage.getItem("playlist");
            obj.playList = JSON.parse(arr);
            printSongs();
        }
    }
}

function deleteSong() {
    var s_id = event.srcElement.parentElement.children[0].title;
    for (var i = 0; i < obj.playList.length; i++) {
        // console.log(obj.playList[i].id, s_id);
        if (obj.playList[i].id == s_id) {
            var songObj = obj.playList[i];
            obj.deleteSong(songObj.id);
            break
        }
    }
    printSongs();
    savePlayList();
}

function printSongs() {
    var ul = document.querySelector("#playList");
    ul.innerHTML = "";
    obj.playList.forEach(function(obj) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = obj.name;
        var btn = document.createElement("button");
        btn.innerHTML = '<i class="fas fa-trash"></i>';
        btn.className = "btn btn-primary";
        var img = document.createElement("img");
        img.setAttribute('src', obj.image);
        img.setAttribute('title', obj.id);
        li.appendChild(img);
        // console.log(obj);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
        img.addEventListener("click", playSong);
        btn.addEventListener("click", deleteSong);
    })
}