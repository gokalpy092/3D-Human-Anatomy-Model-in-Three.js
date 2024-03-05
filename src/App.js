import { useRef, useState, useEffect, useCallback } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, ContactShadows, Environment, OrbitControls, Billboard, Text } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
  color: '#999',
  items: {
    Cube002: {
      color: "#f00",
      label: "This is a label"
    },
    Cylinder001: {
      color: "#f00",
      label: "This is a label"
    },
    BezierCurve: {
      color: "#f00",
      label: "This is a label"
    },
    BezierCurve001: {
      color: "#f00",
      label: "This is a label"
    },
    BezierCurve002: {
      color: "#f00",
      label: "This is a label"
    },
    Plane: {
      color: "#f00",
      label: "This is a label"
    },
    Cube002_2: {
      color: "#f00",
      label: "This is a label"
    },
    Plane002: {
      color: "#f00",
      label: "This is a label"
    },
    Plane003: {
      color: "#f00",
      label: "This is a label"
    },
    Plane004: {
      color: "#f00",
      label: "This is a label"
    },
    Plane005: {
      color: "#f00",
      label: "This is a label"
    },
    Sphere004: {
      color: "#f00",
      label: "This is a label"
    },
    Plane006: {
      color: "#f00",
      label: "This is a label"
    },
    Plane007: {
      color: "#f00",
      label: "This is a label"
    },
    Cube001: {
      color: "#f00",
      label: "This is a label"
    },
    Cube003: {
      color: "#f00",
      label: "This is a label"
    },
    Cube005_1: {
      color: "#f00",
      label: "This is a label"
    },
    Cube005_2: {
      color: "#f00",
      label: "This is a label"
    },
    Cube001_1: {
      color: "#f00",
      label: "This is a label"
    },
    Cube001_2: {
      color: "#f00",
      label: "This is a label"
    },
    Cube002: {
      color: "#f00",
      label: "This is a label"
    }
  },
})

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Heart />
        <Environment preset="city" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
        {/* material-color={snap.color} */}
      </Canvas>
    </>
  )
}

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const { viewport } = useThree();

  return (
    <>
      This is the tooltip content
    </>
  );
};

function Heart() {
  const ref = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("Heart1.glb")

  const [hovered, hover] = useState(false)
  // const meshes =
  //   Object.entries(nodes).map(([key, node], index) => (
  //     // node.name
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes[key].geometry}
  //       material={node.name}
  //       position={[node.position.x, node.position.x, node.position.x]}
  //       // material-color={snap.color}
  //       rotation={[node.rotation.x, node.rotation.y, node.rotation.z]}>
  //     </mesh>
  //   ))
  // console.log(meshes)
  useFrame((state) => {
    // const t = state.clock.getElapsedTime()
    // ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="#fff-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    }
  }, [hovered])

  return (
    <>
      <Tooltip />
      <group ref={ref}>
        {/* {meshes} */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Cube002}
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={(e) => (e.stopPropagation(), hover(false))}
          material-color={hovered ? '#f00' : 'white'}
          position={[-1.28, 0.371, -0.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Cylinder001}          
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={(e) => (e.stopPropagation(), hover(false))}
          material-color={hovered ? '#f00' : 'white'}
          position={[-1.158, 1.645, -0.26]}
          rotation={[0.524, -0.134, 0.511]}>
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve.geometry}
          material={materials.BezierCurve}
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={(e) => (e.stopPropagation(), hover(false))}
          material-color={hovered ? '#f00' : 'white'}
          position={[-0.583, -0.23, 0.117]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve001.geometry}
          material={materials.Blue}
          material-color={snap.color}
          position={[-0.583, -0.23, 0.117]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve002.geometry}
          material={materials.Blue}
          material-color={snap.color}
          position={[-0.583, -0.23, 0.117]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Heart}
          position={[-0.836, 1.211, -0.589]}
          material-color={snap.color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Heart}
          position={[-0.542, 0.553, -0.822]}
          rotation={[0.386, -0.099, -0.51]}
          material-color={snap.color}
        />
        <group position={[-0.326, 0.219, 0.813]} rotation={[0, 0, 0.184]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material-color={snap.color}
            material={materials.Heart}
          />
          <mesh
            material-color={snap.color}
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials.Inner}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material-color={snap.color}
          material={materials.Heart}
        />
        <mesh
          material-color={snap.color}
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Blue}
          position={[-0.426, 1.019, -0.443]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.Inner}
          material-color={snap.color}
          position={[-0.616, 0.341, -0.562]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Inner}
          material-color={snap.color}
          position={[-0.45, 0.283, -0.508]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.Inner}
          position={[-0.241, 0.223, 0.475]}
          rotation={[0.297, 0.364, -0.055]}
          material-color={snap.color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials.Material}
          position={[-0.332, 0.754, -0.167]}
          scale={0.124}
          material-color={snap.color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Blue.001"]}
          position={[-0.848, 0.844, 0.265]}
          material-color={snap.color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.Red02}
          position={[-0.848, 0.844, 0.265]}
          material-color={snap.color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Heart}
          position={[-0.326, 0.219, 0.813]}
          rotation={[0, 0, 0.184]}
          material-color={snap.color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Heart}
          position={[-0.542, 0.553, -0.822]}
          rotation={[0.386, -0.099, -0.51]}
          material-color={snap.color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.Heart}
        />
        <mesh
          material-color={snap.color}
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials.Inner}
        />
        <mesh
          material-color={snap.color}
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Heart}
        />
        <mesh
          material-color={snap.color}
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Inner}
        />
      </group>
    </>
  )
}
