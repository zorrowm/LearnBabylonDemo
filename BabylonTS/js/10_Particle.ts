/// <reference path="../lib/babylon.module.d.ts"/>
class Particle {
  public static CreateScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2,
      10,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    const ground = BABYLON.MeshBuilder.CreateGround('myGround', {
      width: 50,
      height: 50,
      subdivisions: 4
    });

    const groundMaterial = new BABYLON.StandardMaterial('material', scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    ground.material = groundMaterial;

    camera.attachControl(canvas, true); // 相机绑定控制
    new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene); // 添加半球光用来模拟环境光

    // 创建发射器和粒子系统
    const emitter = BABYLON.MeshBuilder.CreateBox('', {}, scene),
      particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene);

    emitter.position.y = 1;
    particleSystem.particleTexture = new BABYLON.Texture('./textures/flare.png', scene); // 粒子贴图
    // particleSystem.emitter = emitter; // 设置粒子发射器
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.0, 0.0); // 粒子在其生命周期结束时的颜色
    // 粒子的尺寸在[0.1,0.8]内随机
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.8;
    // 粒子的生命周期在[0.3,1]内随机
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1;
    // 发射器的速率（一帧释放的粒子数）
    particleSystem.emitRate = 1000;
    // 每个粒子发射后的随机方向，位于 direction1 和 direction2 之间
    particleSystem.direction1 = new BABYLON.Vector3(-2, 8, 3);
    particleSystem.direction2 = new BABYLON.Vector3(2, 8, -3);
    particleSystem.updateSpeed = 0.02; // 整体更新速度(0.01是默认的更新速度。更新越快,动画越快)

    particleSystem.start(); // 启动粒子系统
    return scene;
  }
}
