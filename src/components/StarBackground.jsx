import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const Stars = ({ count = 5000 }) => {
  const ref = useRef();

  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2 + seededRandom(i * 3 + 1) * 3;
      const theta = 2 * Math.PI * seededRandom(i * 3 + 2);
      const phi = Math.acos(2 * seededRandom(i * 3 + 3) - 1);

      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const StarBackground = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none bg-[#030014]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars count={isMobile ? 1500 : 4000} />
      </Canvas>
    </div>
  );
};

export default StarBackground;
