// script.js

let scene, camera, renderer, grid;
let zoomLevel = 1;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.setClearColor(0xffffff);

  grid = new THREE.GridHelper(100, 100, 0xe8e8e8, 0xe8e8e8);
  grid.rotation.x = Math.PI / 2;
  scene.add(grid);

  camera.position.z = 10;

  window.addEventListener("resize", onWindowResize, false);
  window.addEventListener("wheel", onDocumentMouseWheel, false);

  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseWheel(event) {
  zoomLevel += event.deltaY * 0.001;
  zoomLevel = Math.max(0.1, Math.min(zoomLevel, 10));
  camera.zoom = zoomLevel;
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
