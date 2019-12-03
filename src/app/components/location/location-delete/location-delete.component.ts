import { Component, OnInit } from '@angular/core';
import { LocationModel } from 'src/app/models/location';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-location-delete',
  templateUrl: './location-delete.component.html',
  styleUrls: ['./location-delete.component.css']
})
export class LocationDeleteComponent implements OnInit {

location: LocationModel;

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.locationService.getLocation(params.get('id')).subscribe((location: LocationModel)=>{
        this.location=location;
      });
    });
   }

  ngOnInit() {
  }

  onDelete(){
    this.locationService.deleteLocation(this.location.LocationID).subscribe(()=>{
      this.router.navigate(['/location']);
    });
  }

}
