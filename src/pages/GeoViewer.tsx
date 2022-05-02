import React, {useEffect, useRef} from "react";
import {CustomLayer} from "../gis/CustomLayer";
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import style from './GeoViewer.module.css'
const GeoViewer : React.FC=()=>{
    const mapRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if(mapRef.current !==null) {
            new Map({
                layers: [
                    new TileLayer({source: new CustomLayer()})
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 2
                }),
                target: mapRef.current
            });
        }
    },[mapRef])
    return (
        <div className={style.map} ref={mapRef}/>
    )
}

export default GeoViewer;
