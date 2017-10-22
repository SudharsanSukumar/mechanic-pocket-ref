import { Component } from '@angular/core';

import { Constants } from '../../services/constants/constants.service';

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
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
