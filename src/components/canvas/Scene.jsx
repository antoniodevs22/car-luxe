import React, { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  ContactShadows,
  Html,
  useProgress,
  Float,
  Preload,
  AdaptiveDpr,
  AdaptiveEvents
} from '@react-three/drei';
import { Porsche } from './Porsche';

const Loader = memo(() => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-4 w-[200px] pointer-events-none">
        <div className="w-full h-[1px] bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gold-main transition-all duration-300 ease-out shadow-[0_0_10px_rgba(201,168,76,0.5)]" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <p className="text-gold-main font-mono text-[9px] uppercase tracking-[0.5em] whitespace-nowrap opacity-80 animate-pulse">
          Sincronizando {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
});

export const Scene = memo(() => {
  return (
    <Canvas 
      shadows 
      dpr={[1, 2]} 
      gl={{ 
        antialias: true, 
        alpha: true, 
        powerPreference: "high-performance",
        stencil: false,
        depth: true
      }}
      className="w-full h-full"
      style={{ pointerEvents: 'auto', background: 'transparent' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      
      <PerspectiveCamera makeDefault position={[7, 3, 7]} fov={30} />
      
      <Suspense fallback={<Loader />}>
        <Environment preset="city" />
        
        <ambientLight intensity={0.8} />
        
        <spotLight 
          position={[10, 15, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={2.5} 
          castShadow 
          shadow-mapSize={[512, 512]}
        />
        
        <spotLight 
          position={[-10, 10, -10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.5} 
          color="#D4AF37" 
        />

        <Float 
          speed={1.5} 
          rotationIntensity={0.2} 
          floatIntensity={0.5}
          floatingRange={[-0.1, 0.1]}
        >
          <Porsche 
            scale={window.innerWidth < 768 ? 1.2 : 1.7} 
            position={[0, -0.2, 0]} 
            rotation={[0, -Math.PI / 4, 0]} 
          />
        </Float>
        
        <ContactShadows 
          position={[0, -0.85, 0]} 
          opacity={0.4} 
          scale={15} 
          blur={2} 
          far={1.5} 
          color="#000000"
          resolution={256}
        />
        
        <Preload all />
      </Suspense>

      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2.5} 
        maxPolarAngle={Math.PI / 2.1}
        makeDefault 
      />
    </Canvas>
  );
});
