import { Component } from '@angular/core';

//Services
import { Constants } from '../../services/constants/constants.service';

@Component({
    templateUrl: 'pneumatic-cylinder.html',
    selector: 'pneumatic-cylinder'
})
export class PneumaticCylinderComponent {
    public stroke: string = '30';
    public dspi: string = '2500';
    public time: string = '3';
    public force: string = '4500';
    public rod: string = '1.375';

    constructor(
        public constants: Constants
    ) {

    }
}