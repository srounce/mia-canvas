const WIDTH = 800,
    HEIGHT = 600;

const PNG = require('pngjs'),
      Canvas = require('canvas'),
      THREE = require('three'),
      CanvasRenderer = require('./CanvasRenderer');


var canvas = new Canvas(WIDTH, HEIGHT),
    scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(65, WIDTH / HEIGHT, 1, 10000),
    mesh = new THREE.Mesh(
      new THREE.BoxGeometry( 50, 50, 50 ),
      new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } )
    ),
    renderer = new CanvasRenderer(canvas);
    
scene.add(mesh);
camera.position.z = 1000;

var renderTarget = new THREE.WebGLRenderTarget(WIDTH, HEIGHT, {
	minFilter: THREE.LinearFilter,
	magFilter: THREE.NearestFilter,
	format: THREE.RGBAFormat
});

renderer.render(scene, camera, renderTarget, true);
