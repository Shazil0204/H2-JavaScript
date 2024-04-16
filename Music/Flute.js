class Flute extends Instrument {

    constructor(name, holes, material) {
        super(name);
        this.holes = holes;
        this.material = material;
        this.play('./MusicFiles/Flute.mp3');
    }

}

// Call the playFlute() method on the instance
function playFlute() {
    let Flute1 = new Flute('Flute1', 5, 'wood');
}