const light = new THREE.AmbientLight( 0x404040 ); // soft white light

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.add( directionalLight );

directionalLight.position.set(-10, 10, 10);

export default light

