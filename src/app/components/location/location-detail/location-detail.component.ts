import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { LocationModel } from 'src/app/models/location';
@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  location:LocationModel;

  constructor(private _activatedRoute: ActivatedRoute, private _locationService: LocationService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData=>{
      this._locationService.getLocation(routeData.get('id')).subscribe((singleLocation:LocationModel)=>{
        this.location = singleLocation;
      });
    });
  }

}
