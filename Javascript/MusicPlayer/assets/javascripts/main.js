window.addEventListener("load", initEvents);
var audio;
function initEvents() {
    audio = document.querySelector("#audio");
    showAllSongs();
}

function showAllSongs() {
    var ul = document.querySelector("#all_songs");
    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        li.setAttribute('title', obj.song_id);
        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);
        img.className = 'w-100';
        var h5 = document.createElement("h5");
        h5.innerHTML = obj.song_name;
        h5.className = "text-center";
        li.appendChild(img);
        li.appendChild(h5);
        ul.appendChild(li);
        li.addEventListener("click", playSong);
    })
}

function playSong() {
    var songId = event.srcElement.title;
    console.log("Id is",songId);
    for(var i = 0; i < songsList.length; i++) {
        if(songsList[i].song_id == songId) {
            var song_src = songsList[i].song_url;
            break;
        }
    }
    console.log(song_src);
    audio.src = song_src;
    audio.play();
}