import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-create',
  templateUrl: './action-create.component.html',
  styleUrls: ['./action-create.component.css']
})
export class ActionCreateComponent implements OnInit {

  actionForm:FormGroup;
  constructor(private actionService: ActionsService, private form: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.actionForm = this.form.group({
      Activity: new FormControl
    });
  }

  onSubmit(){
    this.actionService.createAction(id,this.actionForm.value).subscribe(data=>{
      this.router.navigate([''])
    })
  }
}
