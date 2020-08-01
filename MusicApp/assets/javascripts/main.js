window.addEventListener("load", initEvents);

function initEvents() {
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
        li.innerHTML = obj.song_name;

        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);
        img.addEventListener("error",function() {
            this.src = "https://i1.sndcdn.com/artworks-000161401845-ko937h-t500x500.jpg";
        });

        li.appendChild(img);
        ul.appendChild(li);
    });
}
