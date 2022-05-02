import {XYZ} from "ol/source";
import {TileCoord} from "ol/tilecoord";
import {Projection} from "ol/proj";


export class CustomLayer extends XYZ{
    crossOrigin="anonymous"
    tileUrlFunction(tileCoord: TileCoord, pixelRatio: number, projection: Projection): string | undefined {
        console.log("/appmaptile?style=6&x="+tileCoord[1]+"&y="+tileCoord[2]+"&z="+tileCoord[0])
        return "/appmaptile?style=6&x="+tileCoord[1]+"&y="+tileCoord[2]+"&z="+tileCoord[0]
    }

}
