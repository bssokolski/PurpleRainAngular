import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
import { ActionModel } from 'src/app/models/Action';
import { ActionsService } from 'src/app/services/actions.service';
import { Temp} from 'src/app/models/Temp';
import { LocationModel } from 'src/app/models/location';


@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {

  action: ActionModel;
  weatherTemp:any;
  temp:Temp;
  locationID: number;
  
  constructor(private activatedRoute: ActivatedRoute, private actionService: ActionsService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData =>{
      this.actionService.getAction(routeData.get('id')).subscribe((singleAction: ActionModel)=> {
        this.action = singleAction;
      });
    });
    //this.actionService.getTempOpen(this.temp.Zipcode).subscribe(data => this.weatherTemp = data.main.temp)
   // return this.weatherTemp;

    this.actionService.getTempOpen(this.temp.Zipcode).pipe(
      map(temps => {
        const degrees = this.action.
      
      }),
      mergeMap(var => )
    )
    this.actionService.getEnumAction(this.weatherTemp,this.locationID).subscribe(this.action.Activity)=>{}
  }

}
