// function as as constructor
// function Song(id, name, url, thumb) {
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

var playListOperations = {
    "playList" : [],
    addSong : function(id, name, url, thumb) {
        if (this.playList.length > 0) {
            for(var i = 0; i < this.playList.length; i++) {
                if(this.playList[i].id == id) {
                    console.log("Song Already Exist...");
                    break;
                }
                else {
                    var song = new Song(id, name, url, thumb);
                    this.playList.push(song);
                    break;
                }
            }
        }
        else {
            var song = new Song(id, name, url, thumb);
            this.playList.push(song);
        }
    },

    deleteSong : function(id) {
        // for(var i = 0; i < this.playList.length; i++) {
        //     if (this.playList[i].id == id) {
        //         this.playList[i].selected = true;
        //         break;
        //     }
        // }

        var toDelete = this.playList.filter(function(obj){
            return obj.id == id;
        });
        toDelete[0].selected = true;

        this.playList = this.playList.filter(function(obj) {
            return obj.selected == false;
        });

    },

    searchSong : function() {

    }
}