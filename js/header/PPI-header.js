// PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
// const IMG_WIDTH = window.innerWidth,
//     IMG_HEIGHT = 1.2 * window.innerHeight,
//     SCALE_FACTOR = 25;
// let app = new PIXI.Application({width: IMG_WIDTH, height: IMG_HEIGHT});
// const container = document.getElementById("parallax");
// container.appendChild(app.view);
// const img = new PIXI.Sprite.from("images/PPI/ppi-head.webp");
// img.width = IMG_WIDTH,
// img.height = IMG_HEIGHT,
// img.position.x = 0,
// img.position.y = 0,
// app.stage.addChild(img),
// depthMap = new PIXI.Sprite.from("images/PPI/ppi-depth.jpg"),
// depthMap.position.x = 0,
// depthMap.position.y = 0,
// depthMap.width = IMG_WIDTH,
// depthMap.height = IMG_HEIGHT,
// app.stage.addChild(depthMap),
// displacementFilter = new PIXI.filters.DisplacementFilter(depthMap),
// app.stage.filters = [displacementFilter],
// displacementFilter.scale.x = 0,
// displacementFilter.scale.y = 0,
// window.onmousemove = function (e) {
//     displacementFilter.scale.x = .1 * (window.innerWidth / 2 - e.clientX) / 20,
//     displacementFilter.scale.y = .1 * (window.innerHeight / 2 - e.c.jpglientY) / 20
// };
