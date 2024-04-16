class Harp extends Stringed {
    
    constructor(name, numberOfStrings, height){
        super(name, numberOfStrings);
        this.height = height;
        this.play('./MusicFiles/Harp.mp3');
    }

}

// Call the playHarp() method on the instance
function playHarp() {
    let Harp1 = new Harp('Harp1', 5, 10);
}