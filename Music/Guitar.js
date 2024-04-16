class Guitar extends Stringed {

    constructor(name, numberOfStrings, material){
        super(name, numberOfStrings);
        this.material = material;
        this.play('./MusicFiles/Guitar.mp3');
    }

}

// Call the playGuitar() method on the instance
function playGuitar() {
    let Guitar1 = new Guitar('guitar1', 5, 'wood');
}