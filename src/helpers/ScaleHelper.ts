import {Dispatch, SetStateAction} from "react";

export type ScaleState = [number, Dispatch<SetStateAction<number>>]
export class ScaleHelper{
    scale : ScaleState
    distance: number = Infinity;
    step : number;
    stack: Array<{step:number,distance:number } > = []
    constructor(scale : ScaleState,step: number) {
        this.scale =scale;
        this.step = step;
    }
    incScale() {
        console.log(this.step, this.distance)
        let newStep = this.halveIfLarger(this.step,this.distance);
        if(newStep === this.step){
            this.scale[1](this.scale[0]+this.step);
        }else {
            console.log("now")
            this.stack.push({step:this.step,distance:this.distance});
            this.step = newStep;
            if(isFinite(this.distance - this.scale[0]))this.scale[1](this.scale[0]+newStep);
        }
    }
    decScale(){
        if(this.stack.length!== 0 && this.distance >= this.stack[this.stack.length - 1].distance){
            let top = this.stack.pop();
            if(top !== undefined){
                this.step = top.step;
                this.scale[1](this.scale[0]-this.step);
            }
        }else{
            this.scale[1](this.scale[0]-this.step);
        }
    }
    private halveIfLarger( num: number,target: number) : number{
            if(target < 0){
                return 0;
            }
            if(target - num < 1e-8 ){
                return this.halveIfLarger(num / 2,target);
            }else{
                return num;
            }
    }
    setDistance(distance : number){
        this.distance = distance - this.step;
    }
}
