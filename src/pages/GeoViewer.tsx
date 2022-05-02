import React, {useEffect, useRef} from "react";
import {SatLayer} from "../gis/Layers";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import style from './GeoViewer.module.css'
import {TopoJSON} from "ol/format";
import {Vector} from "ol/source";
import {Vector as VectorLayer} from "ol/layer";
import {Fill, Stroke, Style} from "ol/style";
const GeoViewer : React.FC=()=>{
    const mapRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const cnBorder = new VectorLayer({
            source:new Vector({
                features: new TopoJSON({
                }).readFeatures(require('../topojson/china.json'),{
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                }),
                overlaps: false,
            }),
            style: new Style({
                fill: new Fill({
                    color: 'rgba(0,255,0,0)'
                }),
                stroke: new Stroke({
                    color: 'rgba(0,255,0,1)',
                    width: 1
                })
            })
        })
        cnBorder.setZIndex(1)
        if(mapRef.current !==null) {
            new Map({
                layers: [
                    cnBorder,
                    new TileLayer({source: new SatLayer()})

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
