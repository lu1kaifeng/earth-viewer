import React, {useEffect, useRef} from "react";
import { Map,Scene } from '@esri/react-arcgis';
import styles from "./GeoViewer.module.css"
const GeoViewer : React.FC=()=>{
    const canvasRef = useRef(null);
    useEffect(()=>{
        if(canvasRef!==null){
            console.log()
        }
    })
    return (
        <Map mapProperties={{layers:""}} className={styles.map}/>
    )
}

export default GeoViewer;