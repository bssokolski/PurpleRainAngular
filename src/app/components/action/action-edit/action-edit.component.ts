import { Component, OnInit } from '@angular/core';
import { ActionModel } from 'src/app/models/Action';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActionsService } from 'src/app/services/actions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-action-edit',
  templateUrl: './action-edit.component.html',
  styleUrls: ['./action-edit.component.css']
})
export class ActionEditComponent implements OnInit {

  action: ActionModel;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private actionService: ActionsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.actionService.getAction(params.get('id')).subscribe((action: ActionModel)=>{
        this.action = action;
        this.createForm();
      });
    });
   }

  ngOnInit() {
  }
 createForm(){
  this.editForm = this.formBuilder.group({
    ActivityID: new FormControl(this.action.ActivityID),
    Activity: new FormControl(this.action.Activity)
  });
 }
 
 onSubmit(){
  const updatedAction: ActionModel ={
    ActivityID: this.editForm.value.ActivityID,
    Activity: this.editForm.value.Activity
  };
  this.actionService.updateAction(updatedAction,).subscribe(()=>{
    this.router.navigate([''])
  });
 }
}
