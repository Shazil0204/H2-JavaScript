class Instrument {

    constructor(name) {
      this.name = name;
    }
  
    play(sound) {
      new Audio(sound).play()
      console.log(`${this.name} is playing.`);
    }
  
}
