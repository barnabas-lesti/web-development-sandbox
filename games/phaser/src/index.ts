import { AUTO, Game, Scene } from "phaser";

import "./index.css";

class ExampleScene extends Scene {
  preload() {
    this.load.setBaseURL("/assets");

    this.load.image("sky", "skies/space3.png");
    this.load.image("logo", "sprites/phaser3-logo.png");
    this.load.image("red", "particles/red.png");
  }

  create() {
    this.add.image(400, 300, "sky");

    const particles = this.add.particles(0, 0, "red", {
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    particles.startFollow(logo);
  }
}

new Game({
  type: AUTO,
  scene: ExampleScene,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200, x: 0 },
    },
  },
});
