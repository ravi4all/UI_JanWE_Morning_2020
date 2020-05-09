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
        this.selected = false;
    }
}

var obj = {
    playList : [],
    addSong : function(id,name,url,thumb) {
        var song = new Song(id,name,url,thumb);
        this.playList.push(song);
        // console.log(this.playList);
    },

    deleteSong : function(id) {
        // for(var i = 0; i < obj.playList.length; i++) {
        //     if (this.playList[i].id == id) {
        //         return this.playList[i];
        //     }
        // }
        this.playList = this.playList.filter(function(x) {
            return x.id != id;
        });
        // currentSong[0]['selected'] = true;

        // this.playList = this.playList.filter(function(x) {
        //     return x.selected == false;
        // });
        // console.log("Updated playlist",this.playList);
    },

    searchSong : function() {

    }
}