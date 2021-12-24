import { Engine, Scene, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight, FreeCamera, Texture } from "@babylonjs/core";
const createScene = (canvas) => {
  const engine = new Engine(canvas, true);

  const scene = new Scene(engine);
  scene.gravity = new Vector3(0, -0.1, 0)
  scene._app
  scene.collisionsEnabled = true;
  
  const camera = new FreeCamera("camera1", new Vector3(0, 0, -15), scene);
  camera._needMoveForGravity = true;
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);
  camera.checkCollisions = true;
  camera.applyGravity = true;
  camera.ellipsoid = new Vector3(1, 3, 1);

  window.addEventListener("resize", () => {
    console.log("resize");
    engine.resize();
  })

  new HemisphericLight("light", (0, 0, 0), scene);

  const floor = MeshBuilder.CreatePlane("floor", {size: 300}, scene);
  const floorMaterial = new StandardMaterial("floor-material", scene);
  
  // floorMaterial.diffuseColor = Color3.Green();
  floorMaterial.diffuseTexture = new Texture("./grassNatural.jpg", scene);
  floorMaterial.diffuseTexture.scale(10)

  floor.material = floorMaterial;
  floor.position.y = -20;
  floor.rotation.x = 1.6;
  floor.material.backFaceCulling = false;
  floor.checkCollisions = true;

  // const ceiling = MeshBuilder.CreatePlane("wall", {size: 45}, scene);
  // const ceilingMaterial = new StandardMaterial("ceiling-material", scene);
  // ceilingMaterial.diffuseColor = Color3.Red();
  // ceiling.material = ceilingMaterial;
  // ceiling.position.y = 24;
  // ceiling.rotation.x = 1.58;
  // ceiling.material.backFaceCulling = false;

  // const wallBack = MeshBuilder.CreatePlane("wall-left", {size: 45}, scene);
  // wallBack.material = ceilingMaterial;
  // wallBack.position.y = 2;
  // wallBack.position.z = 22;
  // wallBack.material.backFaceCulling = false;

  // const wallFront = MeshBuilder.CreatePlane("wall-left", {size: 45}, scene);
  // wallFront.material = ceilingMaterial;
  // wallFront.position.y = 2;
  // wallFront.position.z = -22;
  // wallFront.material.backFaceCulling = false;

  // const wallLeft = MeshBuilder.CreatePlane("wall-left", {size: 45}, scene);
  // wallLeft.material = ceilingMaterial;
  // wallLeft.position.y = 2;
  // wallLeft.rotation.y = -1.58;
  // wallLeft.position.x = -22;
  // wallLeft.material.backFaceCulling = false;

  // const wallRight = MeshBuilder.CreatePlane("wall-left", {size: 45}, scene);
  // wallRight.material = ceilingMaterial;
  // wallRight.position.y = 2;
  // wallRight.rotation.y = 1.55;
  // wallRight.position.x = 22;
  // wallRight.material.backFaceCulling = false;

  const box = MeshBuilder.CreateBox("box", { size: 0.5 }, scene);
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Blue();
  box.material = material;
  box.position.y = -15;
  box.material.backFaceCulling = false;

  const box2 = MeshBuilder.CreateBox("box", { size: 0.5 }, scene);
  const material2 = new StandardMaterial("box-material", scene);
  material2.diffuseColor = Color3.Red();
  box2.material = material2;
  box2.position.y = -15;
  box2.position.x = -2;
  box2.material.backFaceCulling = false;



  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };