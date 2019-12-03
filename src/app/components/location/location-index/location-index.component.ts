import { Component, OnInit } from '@angular/core';
import {LocationService} from 'src/app/services/location.service';
import {LocationModel} from 'src/app/models/location';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-location-index',
  templateUrl: './location-index.component.html',
  styleUrls: ['./location-index.component.css']
})
export class LocationIndexComponent implements OnInit {

  columnNames= ['details','LocationID', 'LocationName', 'CityName','Outfit','Action','buttons']
  dataSource: MatTableDataSource<Location>

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((locations: Location[])=>{
        this.dataSource = new MatTableDataSource<Location>(locations);

    });
  }

}
