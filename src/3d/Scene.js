import { Engine, Scene, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight, FreeCamera } from "@babylonjs/core";
const createScene = (canvas) => {
  const engine = new Engine(canvas, true);

  const scene = new Scene(engine);
  scene.enablePhysics(null, CannonJSPlugin());

  const camera = new FreeCamera("camera1", new Vector3(0, 0, -15), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  window.addEventListener("resize", () => {
    console.log("resize");
    engine.resize();
  })

  new HemisphericLight("light", Vector3.Up(), scene);

  const flor = MeshBuilder.CreatePlane("wall", {size: 45}, scene);
  const wallMaterial = new StandardMaterial("wall-material", scene);
  wallMaterial.diffuseColor = Color3.Red();
  flor.material = wallMaterial;
  flor.position.y = -20;
  flor.rotation.x = 1.6;
  flor.material.backFaceCulling = false;

  const ceiling = MeshBuilder.CreatePlane("wall", {size: 45}, scene);
  wallMaterial.diffuseColor = Color3.Red();
  ceiling.material = wallMaterial;
  ceiling.position.y = 24;
  ceiling.rotation.x = 1.58;
  ceiling.material.backFaceCulling = false;

  const wallBack = MeshBuilder.CreatePlane("wall-left", {size: 45}, scene);
  wallBack.material = wallMaterial;
  wallBack.position.y = 2;
  wallBack.position.z = 22;
  wallBack.material.backFaceCulling = false;

  const wallFront = MeshBuilder.CreatePlane("wall-left", {size: 45}, scene);
  wallFront.material = wallMaterial;
  wallFront.position.y = 2;
  wallFront.position.z = -22;
  wallFront.material.backFaceCulling = false;

  const wallLeft = MeshBuilder.CreatePlane("wall-left", {size: 45}, scene);
  wallLeft.material = wallMaterial;
  wallLeft.position.y = 2;
  wallLeft.rotation.y = -1.58;
  wallLeft.position.x = -22;
  wallLeft.material.backFaceCulling = false;

  const wallRight = MeshBuilder.CreatePlane("wall-left", {size: 45}, scene);
  wallRight.material = wallMaterial;
  wallRight.position.y = 2;
  wallRight.rotation.y = 1.55;
  wallRight.position.x = 22;
  wallRight.material.backFaceCulling = false;

  const box = MeshBuilder.CreateBox("box", { size: 0.5 }, scene);
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Blue();
  box.material = material;
  box.position.y = 0.5;
  box.material.backFaceCulling = false;



  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };