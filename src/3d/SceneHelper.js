import { Engine, Scene, Vector3, MeshBuilder, StandardMaterial,
    Color3, Color4, HemisphericLight, FreeCamera, Texture, KeyboardEventTypes } from "@babylonjs/core";
import "babylonjs-loaders";

export default {
    cameraControl: function (scene, camera) {
        scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "a":
                        case "A":
                            camera.position.x -= 1.5;
                        break
                        case "d":
                        case "D":
                            camera.position.x += 1.5;
                        break
                        case "w":
                        case "W":
                            camera.position.z += 1.5;
                        break
                        case "s":
                        case "S":
                            camera.position.z -= 1.5;
                        break
                        case "sa":
                        case "SA":
                            camera.position.z -= 1.5;
                            camera.position.x -= 1.5;
                        break
                        case "as":
                        case "AS":
                            camera.position.z -= 1.5;
                            camera.position.x -= 1.5;
                        break
                        case "sd":
                        case "SD":
                            camera.position.x += 1.5;
                            camera.position.z -= 1.5;
                        break
                        case "ds":
                        case "DS":
                            camera.position.x += 1.5;
                            camera.position.z -= 1.5;
                        break
                        case "aw":
                        case "AW":
                            camera.position.z += 1.5;
                            camera.position.z -= 1.5;
                        break
                        case "wa":
                        case "WA":
                            camera.position.z += 1.5;
                            camera.position.z -= 1.5;
                        break
                    }
                break;
            }
        });
    }
    
}