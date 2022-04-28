import React from 'react'
import { Canvas} from '@react-three/fiber'

import Earth from './Earth'

const EarthCanvas: React.FC<{

}> = ({}) => {

  return (<Canvas style={{ 'height': '1000px' }}>
    <Earth/>
  </Canvas>)
}
export default EarthCanvas
