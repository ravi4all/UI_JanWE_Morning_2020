// function Song(id,name,url,thumb) {
//     this.id = id;
//     this.name = name;
//     this.url = url;
//     this.thumb = thumb;
// }

class Song {
    constructor(id, name, url, thumb) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.thumb = thumb;
    }
}

var obj = {
    playList : [],
    addSong : function(id,name,url,thumb) {
        var song = new Song(id,name,url,thumb);
        this.playList.push(song);
        console.log(this.playList);
    },

    deleteSong : function() {

    },

    searchSong : function() {

    }
}