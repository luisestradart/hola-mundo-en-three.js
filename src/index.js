import camera from "./basic/camera.js";
import scene from "./basic/scene.js";
import renderer from "./basic/rederer.js";
import cube from "./basic/shapes/cube.js";
import light from "./basic/light.js";
import resize from "./basic/resize.js";
import plane from "./basic/shapes/plane.js";
import loopMachine from "./basic/loopmachine.js";

scene.add( cube );
scene.add( light );
scene.add( plane );


camera.position.set(2,2,2)

camera.lookAt(cube.position);

loopMachine.addCallback(() => {
    cube.rotation.y += .01
    renderer.render(scene, camera);
});


resize.start(renderer);
loopMachine.start()