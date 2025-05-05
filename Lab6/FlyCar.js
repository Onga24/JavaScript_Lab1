import { Car } from "./car.js";

export class FlyingCar extends Car {
    
    canFly ;
    
    constructor( modle, year ){
        super(modle,year);
        this.canFly= true; 
    }

    toString(){

        return `${super.toString()} and I also can Fly`
    }

}