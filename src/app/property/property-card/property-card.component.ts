import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

// decorator gives us a way to modify a class that how to behave
@Component({
  selector: 'app-property-card',
  // template: `<h1>I am a card</h1>`,
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
  // styles: ['h1{font-weight: normal;}']
})

export class PropertyCardComponent {
  @Input() property: IProperty
  // Property: any = {
  //   "Id":1,
  //   "Name":"Birla House",
  //   "Type":"House",
  //   "Price":12000
  // }

}
