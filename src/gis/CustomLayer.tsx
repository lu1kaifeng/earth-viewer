import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import BaseTileLayer from "@arcgis/core/layers/BaseTileLayer";

export class CustomLayer extends  BaseTileLayer{
    title="Baidu"
    getTileUrl(level: number, row: number, col: number): string {

        return "http://webst04.is.autonavi.com/appmaptile?style=6&x="+col+"&y="+row+"&z="+level
    }

}
