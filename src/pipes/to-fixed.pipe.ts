import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toFixed' })
export class ToFixedPipe implements PipeTransform {

    transform(value: string, numDecimals: number): string {
        return parseFloat(value).toFixed(numDecimals);
    }
}