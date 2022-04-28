import React, { useRef, useState,Fragment } from 'react'
import {useFrame, useLoader, useThree} from '@react-three/fiber'
import {Mesh, SphereGeometry} from 'three'
import { TextureLoader } from "three"
import { PresentationControls } from '@react-three/drei'
import {ScaleHelper} from "../helpers/ScaleHelper";
const Earth: React.FC<{}> = () => {
  const meshRef = useRef<SphereGeometry>()
  const colorMap = useLoader(TextureLoader, require('../assets/2k_earth_daymap.jpg'))
  const bumpMap = useLoader(TextureLoader, require('../assets/elev_bump_16k.jpg'))
  const [scale,setScale] = useState(1.0);
  const scaleHelper = new ScaleHelper([scale,setScale] ,0.1);
    const state = useThree()
  useFrame(() => {
      if(meshRef.current!=undefined && meshRef.current.boundingSphere!=undefined) {
          scaleHelper.setDistance(state.camera.position.distanceTo(meshRef.current.boundingSphere.center) - meshRef.current.boundingSphere.radius)
      }
  })

  return (<Fragment>

    <pointLight position={[1, 0,10]} />
    <PresentationControls global polar={[-Math.PI, Math.PI]}
                          azimuth={[-Infinity, Infinity]} >
      <group dispose={null}>


    <mesh  scale={[1,1,1]} position={[0,0,0]}
          onWheel={(event)=> {
            if(event.nativeEvent.deltaY>0){
              scaleHelper.decScale()
            }else{
              scaleHelper.incScale()
            }

          }}

    >
      <sphereGeometry ref={meshRef} args={[scale, 32, 32]} />
      {  /** @ts-ignore**/ }
      <meshStandardMaterial map={colorMap} bumpMap={bumpMap}/>
    </mesh>

      </group>
    </PresentationControls>
  </Fragment>)
}
export default Earth
