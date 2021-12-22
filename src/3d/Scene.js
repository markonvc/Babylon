import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight } from "@babylonjs/core";
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  var inputManager = camera.inputs;
//   inputManager.inputs.add(new BABYLON.FreeCameraGamepadInput());
//   inputManager.inputs.attached.gamepad.gamepadAngularSensibility = 250;
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const plane = MeshBuilder.CreatePlane("wall", {size: 7}, scene);
  const wallMaterial = new StandardMaterial("wall-material", scene);
  wallMaterial.diffuseColor = Color3.Red();
  plane.material = wallMaterial;
  plane.position.y = -1;
  plane.rotation.x = 1;

  const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Blue();
  box.material = material;
  box.position.y = 0;
  box.rotation.x = 0;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };