"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { animate } from "framer-motion";

export default function DentalHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBlock, setActiveBlock] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    let width = container.clientWidth;
    let height = container.clientHeight;

    const aspect = width / height;
    const frustumSize = 14;
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );

    camera.position.set(14, 14, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(16, 22, 12);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd4e4ff, 1.2);
    fillLight.position.set(-16, 12, -12);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xcea656, 2.5);
    rimLight.position.set(0, -12, 18);
    scene.add(rimLight);

    // 3. Precision Dental Ceramic Blocks
    const cubeCount = 10;
    const cubes: THREE.Mesh[] = [];
    const basePositions: THREE.Vector3[] = [];
    const baseRotations: THREE.Euler[] = [];

    const geometry = new RoundedBoxGeometry(1.2, 1.2, 1.2, 4, 0.18);

    for (let i = 0; i < cubeCount; i++) {
      const t = (i / (cubeCount - 1)) * 2 - 1; // -1 to 1
      const x = t * 6.0;
      const z = -Math.pow(t, 2) * 2.0 + 1.0;
      const y = Math.sin(t * Math.PI) * 0.5;

      const pos = new THREE.Vector3(x, y, z);
      basePositions.push(pos.clone());

      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0xf6f8fc),
        roughness: 0.18,
        metalness: 0.08,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        reflectivity: 0.95,
        emissive: new THREE.Color(0x000000),
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { index: i };

      const angleY = -Math.atan2(z, x) * 0.3;
      mesh.rotation.y = angleY;
      baseRotations.push(mesh.rotation.clone());

      cubes.push(mesh);
      mainGroup.add(mesh);
    }

    // Shadow Floor Plane
    const shadowFloorGeo = new THREE.PlaneGeometry(30, 30);
    const shadowFloorMat = new THREE.ShadowMaterial({ opacity: 0.08 });
    const shadowFloor = new THREE.Mesh(shadowFloorGeo, shadowFloorMat);
    shadowFloor.rotation.x = -Math.PI / 2;
    shadowFloor.position.y = -2.2;
    shadowFloor.receiveShadow = true;
    scene.add(shadowFloor);

    // 4. Framer Motion Powered Sequential Domino Loop
    let controlsList: { stop: () => void }[] = [];

    const runDominoCycle = () => {
      cubes.forEach((cube, idx) => {
        const basePos = basePositions[idx];
        const baseRot = baseRotations[idx];

        // Lift + rotate snap using Framer Motion animate
        const c1 = animate(
          cube.position.y,
          [basePos.y, basePos.y + 1.0, basePos.y],
          {
            duration: 1.2,
            delay: idx * 0.1,
            ease: ["easeInOut", "easeOut"],
            onUpdate: (latest) => {
              cube.position.y = latest;
            },
          }
        );

        const c2 = animate(
          cube.rotation.x,
          [baseRot.x, baseRot.x + Math.PI / 2, baseRot.x],
          {
            duration: 1.2,
            delay: idx * 0.1,
            ease: ["easeInOut", "easeOut"],
            onUpdate: (latest) => {
              cube.rotation.x = latest;
            },
          }
        );

        const mat = cube.material as THREE.MeshPhysicalMaterial;
        const c3 = animate(
          0,
          1,
          {
            duration: 1.2,
            delay: idx * 0.1,
            ease: "easeInOut",
            onUpdate: (progress) => {
              const pulse = Math.sin(progress * Math.PI);
              mat.emissive.setRGB(0.81 * pulse, 0.65 * pulse, 0.34 * pulse);
            },
          }
        );

        controlsList.push(c1, c2, c3);
      });
    };

    runDominoCycle();
    const cycleInterval = setInterval(runDominoCycle, 4000);

    // 5. Mouse Parallax & Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    const targetGroupRotation = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      mouse.x = (x / container.clientWidth) * 2 - 1;
      mouse.y = -(y / container.clientHeight) * 2 + 1;

      targetGroupRotation.y = (mouse.x * Math.PI) / 14;
      targetGroupRotation.x = (-mouse.y * Math.PI) / 18;
    };

    const handleMouseLeave = () => {
      mouse.set(-999, -999);
      targetGroupRotation.x = 0;
      targetGroupRotation.y = 0;
      setActiveBlock(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    let hoveredCube: THREE.Mesh | null = null;
    let animationFrameId: number;

    const animateLoop = () => {
      animationFrameId = requestAnimationFrame(animateLoop);

      mainGroup.rotation.y += (targetGroupRotation.y - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetGroupRotation.x - mainGroup.rotation.x) * 0.05;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubes);

      if (intersects.length > 0) {
        const topIntersect = intersects[0].object as THREE.Mesh;
        if (hoveredCube !== topIntersect) {
          if (hoveredCube) {
            const prevCube = hoveredCube;
            const prevIdx = prevCube.userData.index;
            animate(prevCube.position.y, basePositions[prevIdx].y, {
              duration: 0.3,
              onUpdate: (latest) => { prevCube.position.y = latest; },
            });
            const prevMat = prevCube.material as THREE.MeshPhysicalMaterial;
            animate(prevMat.emissive.r, 0, {
              duration: 0.3,
              onUpdate: (val) => prevMat.emissive.setRGB(val, val, val),
            });
          }

          hoveredCube = topIntersect;
          setActiveBlock(hoveredCube.userData.index);

          const curCube = hoveredCube;
          const curIdx = curCube.userData.index;
          animate(curCube.position.y, basePositions[curIdx].y + 0.4, {
            duration: 0.25,
            ease: "backOut",
            onUpdate: (latest) => { curCube.position.y = latest; },
          });

          const curMat = curCube.material as THREE.MeshPhysicalMaterial;
          animate(0, 1, {
            duration: 0.2,
            onUpdate: (val) => curMat.emissive.setRGB(0.81 * val, 0.65 * val, 0.34 * val),
          });
        }
      } else if (hoveredCube) {
        const prevCube = hoveredCube;
        const prevIdx = prevCube.userData.index;
        animate(prevCube.position.y, basePositions[prevIdx].y, {
          duration: 0.3,
          onUpdate: (latest) => { prevCube.position.y = latest; },
        });
        const prevMat = prevCube.material as THREE.MeshPhysicalMaterial;
        animate(prevMat.emissive.r, 0, {
          duration: 0.3,
          onUpdate: (val) => prevMat.emissive.setRGB(val, val, val),
        });
        hoveredCube = null;
        setActiveBlock(null);
      }

      renderer.render(scene, camera);
    };

    animateLoop();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;

      const newAspect = width / height;
      camera.left = (frustumSize * newAspect) / -2;
      camera.right = (frustumSize * newAspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(cycleInterval);
      controlsList.forEach((c) => c.stop());

      cubes.forEach((cube) => {
        cube.geometry.dispose();
        (cube.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="hero-3d-wrapper">
      <div ref={containerRef} className="hero-3d-canvas" />

      {/* Interactive 3D Technical Calibration Badge */}
      <div className="tech-badge">
        <div className="status-dot" />
        <span className="badge-title">3D DIGITAL CLINIC ARCH</span>
        <span className="badge-value">
          {activeBlock !== null ? `CERAMIC BLOCK #${String(activeBlock + 1).padStart(2, "0")}` : "10-AXIS ACTIVE"}
        </span>
      </div>
    </div>
  );
}
