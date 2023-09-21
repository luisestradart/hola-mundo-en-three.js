import camera from "./basic/camera.js";
import scene from "./basic/scene.js";
import renderer from "./basic/rederer.js";
import cube from "./basic/shapes/cube.js";
import light from "./basic/light.js";
import resize from "./basic/resize.js";


scene.add( cube );
scene.add( light );

camera.position.set(2,2,2)

camera.lookAt(cube.position);

setInterval(() => {
    cube.rotation.y += .01
    renderer.render(scene, camera);
}, 1000/60)

resize.start(renderer);