import { Component } from '@angular/core';

@Component({
    templateUrl: 'hydraulic-cylinder.html',
    selector: 'hydraulic-cylinder'
})
export class HydraulicCylinderComponent {
    public numCylinders: string = '2',
    public stroke: string = '15';
    public force: string = '450';
    public psig: string = '85';
    public time: string = '2';

    constructor() {

    }
}