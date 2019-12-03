import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OutfitsService } from 'src/app/services/outfits.service';
import { Router } from '@angular/router';
import { LocationModel } from '../models/location';

@Component({
  selector: 'app-outfit-create',
  templateUrl: './outfit-create.component.html',
  styleUrls: ['./outfit-create.component.css']
})
export class OutfitCreateComponent implements OnInit {

  outfitForm: FormGroup;
  location:LocationModel
  

  constructor(private outfitService: OutfitsService, private form: FormBuilder, private router: Router) {
    
   }

  ngOnInit() {
  }

  createForm(){
    this.outfitForm = this.form.group({
      OutfitName: new FormControl,
      Top: new FormControl,
      Bottom: new FormControl,
      OutfitID: new FormControl

    });
  }

    onSubmit() {
      this.activatedRoute.paramMap.subscribe(routeData=> {
        this.outfitService.getOutfits(routeData.get('locationId')).subscribe((locationn:LocationModel)=>{
          this.location=locationn;
      this.outfitService.createOutfits(locationn.LocationId,this.outfitForm.value).subscribe(data=>{
        this.router.navigate([''])
        this.actionService.createAction(locationn.LocationId,this.actionForm.value).subscribe(data=>{
      this.router.navigate([''])
      });
    }
}


