import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { ActionsService } from 'src/app/services/actions.service';
import { LocationModel } from 'src/app/models/location';
import { ActionModel } from 'src/app/models/Action';
import { Temp } from 'src/app/models/Temp';
import { MatInputModule } from '@angular/material';
import { OutfitsService } from 'src/app/services/outfits.service';
import { Outfit } from 'src/app/models/Outfit';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-location-index',
  templateUrl: './location-index.component.html',
  styleUrls: ['./location-index.component.css']
})
export class LocationIndexComponent implements OnInit {

  action: ActionModel
  weatherTemp: any;
  temp: Temp;
  locationID: number;
  locationArray: Array<LocationModel>;
  main: LocationModel;
  finalArray: [LocationModel];

  columnNames = ['details', 'LocationID', 'LocationName', 'CityName', 'Outfit', 'Action', 'buttons']
  dataSource: MatTableDataSource<Location>
  constructor(private locationService: LocationService, private actionService: ActionsService, private outfitService: OutfitsService) { }

  columnNames= ['details','LocationID', 'LocationName', 'CityName','Outfit','Action','buttons']
  dataSource: MatTableDataSource<Location>
  //ngOnInit() {
    //this.locationService.getLocations().subscribe((locations: Location[])=>{
      //  this.dataSource = new MatTableDataSource<Location>(locations);

  ngOnInit() {

    this.locationService.getLocations().subscribe((location: LocationModel[]) => {
    this.locationArray = location;
      this.locationArray.forEach(element => {
        this.main.LocationName = element.LocationName;
        this.actionService.getTempOpen(element.CityName).subscribe(data => {
          this.main.Temp = data.main.temp;
<<<<<<< HEAD
          this.actionService.getEnumAction(this.main.Temp, element.LocationID).subscribe((action: ActionModel) =>
            this.main.Action = action);
          this.outfitService.getEnumOutfit(this.main.Temp, element.LocationID).subscribe((outfit: Outfit) =>
            this.main.Outfit = outfit)
          this.locationService.getLocations().subscribe((locations: Location[]) => {
            this.dataSource = new MatTableDataSource<Location>(locations);
            this.finalArray.push(this.main);
          });

        });
=======
          this.actionService.getEnumAction(this.main.Temp, element.LocationID).subscribe((action:ActionModel)=>
      this.main.Action=action);
          this.outfitService.getEnumOutfit(this.main.Temp,element.LocationID).subscribe((outfit:Outfit)=>
          this.main.Outfit=outfit)       
        this.finalArray.push(this.main);
>>>>>>> 8178effe54805bc294cea4b0ab9c1e56b17aa1ff
      });
    }
  }
}
