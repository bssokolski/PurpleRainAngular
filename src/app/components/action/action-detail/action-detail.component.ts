import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
import { ActionModel } from 'src/app/models/Action';
import { ActionsService } from 'src/app/services/actions.service';


@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {

  action: ActionModel

  constructor(private activatedRoute: ActivatedRoute, private actionService: ActionsService) {}

  ngOnInit() {
    this.activatedRoute.paramap.subscribe(routeData =>{
      this.actionService.getAction(routeData.get('id')).subscribe((singleAction: ActionModel)=> {
        this.action = singleAction;
      });
    });
  }

}
