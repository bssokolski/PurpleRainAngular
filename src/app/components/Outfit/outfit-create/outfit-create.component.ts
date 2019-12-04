import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OutfitsService } from 'src/app/services/outfits.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationModel } from 'src/app/models/location';
import { ActionCreateComponent } from '../../action/action-create/action-create.component';


@Component({
  selector: 'app-outfit-create',
  templateUrl: './outfit-create.component.html',
  styleUrls: ['./outfit-create.component.css']
})
export class OutfitCreateComponent implements OnInit {

  outfitForm: FormGroup;
  location:LocationModel
  Action:ActionCreateComponent
  constructor(private outfitService: OutfitsService, private form: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit() {
  }

  createForm(){
    this.outfitForm = this.form.group({
      OutfitName: new FormControl,
      Top: new FormControl,
      Bottom: new FormControl,
      OutfitID: new FormControl,
      ActionActivity: new FormControl,
      ActionATempRange: new FormControl

    });
  }

    onSubmit() {
      var outfitCreate = {
OutfitName: this.outfitForm.value.OutfitName,
Top: this.outfitForm.value.Top,
Bottom: this.outfitForm.value.Bottom,
OutfitID: this.outfitForm.value.OutfitID
      }
      var actionCreate = {
ActionActivity: this.outfitForm.value.Activity,
ActionAtempRange: this.outfitForm.value.AtempRange
      }
      this.activatedRoute.paramMap.subscribe(routeData=> {
        this.outfitService.getOutfits(routeData.get('locationId'))
        .subscribe((locationn:LocationModel)=>{
          this.location=locationn;
      this.outfitService.createOutfits(locationn.LocationID,this.outfitForm.value)
      .subscribe(data=>{
        this.router.navigate([''])
      });
    });
  });

}

}


