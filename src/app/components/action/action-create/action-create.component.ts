import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationModel } from 'src/app/models/location';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material';

@Component({
  selector: 'app-action-create',
  templateUrl: './action-create.component.html',
  styleUrls: ['./action-create.component.css']
})
export class ActionCreateComponent implements OnInit {

  actionForm:FormGroup;
  location: LocationModel

  constructor(private actionService: ActionsService, private form: FormBuilder, private router: Router,
    private activatedRoute:ActivatedRoute) { 
    this.createForm();
  }

  ngOnInit() {
   
  }

  createForm(){
    this.actionForm = this.form.group({
      Activity: new FormControl,
      AtempRange:new FormControl
    });
  }

  onSubmit(){
    this.activatedRoute.paramMap.subscribe(routeData=> {
      this.actionService.getAction(routeData.get('locationId')).subscribe((locationn:LocationModel)=>{
        this.location=locationn;
    this.actionService.createAction(locationn.LocationID,this.actionForm.value).subscribe(data=>{
      this.router.navigate([''])
    })
  });
});
  }
}
