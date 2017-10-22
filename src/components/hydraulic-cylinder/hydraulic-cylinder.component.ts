import { Component } from '@angular/core';

@Component({
    templateUrl: 'hydraulic-cylinder.html',
    selector: 'hydraulic-cylinder'
})
export class HydraulicCylinderComponent {
    public numCylinders: string = '2';
    public stroke: string = '15';
    public force: string = '450';
    public psig: string = '85';
    public time: string = '2';

    public theoreticalVals = {
        area: 0
    };

    public safetyFactorVals = {
        bore: 0,
        area: 0
    };

    public oneCylVals = {
        bore: 3,
        area: 0,
        volume: 0,
        cf: 0,
        delP: 0,
        psig2: 0,
        scfm: 0,
        cv: 0
    };

    constructor() {
        this.recalculateValues();
    }

    recalculateValues() {
        console.log('hey');
        this.calcTheoretical();
        this.calcSafetyFactor();
        this.calc1Cyl();
    }

    calcTheoretical() {
        this.theoreticalVals.area = parseFloat(this.force) / parseFloat(this.psig);
    }

    calcSafetyFactor() {
        this.safetyFactorVals.area = this.theoreticalVals.area * 1.25;
        this.safetyFactorVals.bore = Math.sqrt(this.safetyFactorVals.area / (Math.PI / 4));
    }

    calc1Cyl() {
        this.oneCylVals.area = Math.pow(this.oneCylVals.bore / 2, 2) * Math.PI;
        this.oneCylVals.volume = parseFloat(this.stroke) * this.oneCylVals.area;
        this.oneCylVals.cf = (parseFloat(this.psig) + 14.7) / 14.7;
        this.oneCylVals.delP = parseFloat(this.psig) * 0.1;
        this.oneCylVals.psig2 = parseFloat(this.psig) - this.oneCylVals.delP;
        this.oneCylVals.scfm = (this.oneCylVals.volume * this.oneCylVals.cf) / (parseFloat(this.time) * 28.8);
        this.oneCylVals.cv = (this.oneCylVals.scfm * 1.024) / Math.sqrt(this.oneCylVals.delP * (this.oneCylVals.psig2 + 14.7));
    }
}