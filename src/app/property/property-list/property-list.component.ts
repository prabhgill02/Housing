import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;

  Properties: Array<IProperty>;


  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit() {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(data => {
      this.Properties = data;
    }, error => {
      console.log(error);
    });
  }

}
