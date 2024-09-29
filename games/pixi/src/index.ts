import { Application, Assets, Sprite, type Texture, type TickerCallback } from "pixi.js";

import "./index.css";

(async () => {
  const app = new Application();

  await app.init({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
  });

  app.ticker.maxFPS = 60;

  const clampyTexture = await Assets.load<Texture>("clampy.png");

  document.addEventListener("click", (event) => {
    const clampySprite = new Sprite({
      texture: clampyTexture,
      height: clampyTexture.height / 10,
      width: clampyTexture.width / 10,
      anchor: 0.5,
      x: event.clientX,
      y: event.clientY,
    });

    const tickerHandler: TickerCallback<void> = (time) => {
      console.debug(document.body.clientWidth, document.body.clientHeight);
      clampySprite.rotation += 0.1 * time.deltaTime;
    };

    app.ticker.add(tickerHandler);
    app.stage.addChild(clampySprite);

    setTimeout(() => {
      app.stage.removeChild(clampySprite);
      app.ticker.remove(tickerHandler);
    }, 2000);
  });

  document.body.appendChild(app.canvas);
})();
