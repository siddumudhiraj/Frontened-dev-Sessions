import { Component } from "@angular/core";
@Component({
    selector: 'app-custom',
    templateUrl: `./custom.html`,
    styles: `h1{color:blue}`
})
export class Custom{
    eventHandler(event: PointerEvent | Event | MouseEvent){
        console.log(event);
    }
}