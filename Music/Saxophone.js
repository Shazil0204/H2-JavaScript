class Saxophone extends Instrument{

    constructor(name, material){
        super(name);
        this.material = material;
        this.play('./MusicFiles/Saxophone.mp3');
    }

}

// Call the playSaxophone() method on the instance
function playSaxophone() {
    let Saxophone1 = new Saxophone('Saxophone1', 5, 'wood');
}