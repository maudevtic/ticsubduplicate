// const IMG_WIDTH = window.screen.width,
//     IMG_HEIGHT = .55 * window.screen.width,
//     SCALE_FACTOR = 50,
//     app = new PIXI.Application({width: IMG_WIDTH, height: IMG_HEIGHT}),
//     container = document.getElementById("parallax");
// container.appendChild(app.view);
// const img = new PIXI.Sprite.from("images/CLI/CLI-head.jpg");
// img.width = IMG_WIDTH,
// img.height = IMG_HEIGHT,
// app.stage.addChild(img),
// depthMap = new PIXI.Sprite.from("images/CLI/CLI-depth.jpg"),
// depthMap.width = IMG_WIDTH,
// depthMap.height = IMG_HEIGHT,
// app.stage.addChild(depthMap),
// displacementFilter = new PIXI.filters.DisplacementFilter(depthMap),
// app.stage.filters = [displacementFilter],
// displacementFilter.scale.x = 0,
// displacementFilter.scale.y = 0,
// container.addEventListener("mousemove", (e => {
//     displacementFilter.scale.x = .1 * (IMG_WIDTH / 2 - e.clientX) / 50,
//     displacementFilter.scale.y = .1 * (IMG_HEIGHT / 2 - e.clientY) / 50
// }));
