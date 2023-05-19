import './style.css';
import PixiWorld from './PixiWorld';
import * as PIXI from 'pixi.js';

let bundle = {
  background: '../icons/Sabres_Image_BW.png',
  displacementMap: '../icons/displacement_map_repeat.jpg',
  backgroundLogo: '../icons/SSIS__logo.png',
};

PIXI.Assets.addBundle('assets', bundle);

await PIXI.Assets.loadBundle('assets').then((textures) => {
  const world = new PixiWorld(textures);
  const stage = world.getStage();
  const app = world.getApp();

  let text = world.createText('START');
  stage.addChild(text);
});
