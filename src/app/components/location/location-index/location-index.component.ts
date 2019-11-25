import { Component, OnInit } from '@angular/core';
import {LocationService} from 'src/app/services/location.service';
import {LocationModel} from 'src/app/models/location';

@Component({
  selector: 'app-location-index',
  templateUrl: './location-index.component.html',
  styleUrls: ['./location-index.component.css']
})
export class LocationIndexComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((location:Location[])=>{

    });
  }

}
