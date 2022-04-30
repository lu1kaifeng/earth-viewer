import React, {useEffect, useRef} from "react";
import { Map,Scene } from '@esri/react-arcgis';
import styles from "./GeoViewer.module.css"
import {CustomLayer} from "../gis/CustomLayer";
import {loadModules} from "esri-loader";

const GeoViewer : React.FC=()=>{
    const customLayer = new CustomLayer();
    useEffect(()=>{
        (async ()=>{
            await loadModules(["esri/Map",
                "esri/request",
                "esri/Color",
                "esri/views/SceneView",
                "esri/widgets/LayerList",
                "esri/layers/BaseTileLayer"])
        })()

console.log(customLayer)
    })
    return (
        <Map mapProperties={{layers:[customLayer]}} className={styles.map}/>
    )
}

export default GeoViewer;
