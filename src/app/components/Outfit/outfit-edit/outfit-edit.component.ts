import { Component, OnInit } from '@angular/core';
import { Outfit } from 'src/app/models/Outfit';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OutfitsService } from 'src/app/services/outfits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { runInThisContext } from 'vm';
import { Location } from '@angular/common';

@Component({
  selector: 'app-outfit-edit',
  templateUrl: './outfit-edit.component.html',
  styleUrls: ['./outfit-edit.component.css']
})
export class OutfitEditComponent implements OnInit {

  outfit: Outfit;

  editOutfitForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private outfitService: OutfitsService, private ar: ActivatedRoute, private router: Router){

      this.ar.paramMap.subscribe(params =>{
        this.outfitService.getOutfits(params.get('id')).subscribe((outfit: Outfit)=>{
          this.outfit = outfit;
          this.createForm();
        });
      });
     }

  ngOnInit() {
  }

  createForm(){
    this.editOutfitForm = this.formBuilder.group({
      OutfitID: new FormControl(this.outfit.OutfitID),
      OutfitName: new FormControl(this.outfit.OutfitName),
      Top: new FormControl(this.outfit.Top),
      Bottom: new FormControl(this.outfit.Bottom),
      LocationID: new FormControl(this.outfit.LocationID),
      OtempRange: new FormControl(this.outfit.OtempRange)
    });
  }

  onSubmit() {
    const updateOutfit: Outfit = {
      OutfitID: this.editOutfitForm.value.OutfitID,
      OutfitName: this.editOutfitForm.value.OutfitName,
      Top: this.editOutfitForm.value.Top,
      Bottom: this.editOutfitForm.value.Bottom,
      LocationID:this.editOutfitForm.value.LocationID,
      OtempRange: this.editOutfitForm.value.OtempRange
    };
    this.outfitService.updateOutfit(LocationID).subscribe(()=>{
      this.router.navigate(['']);
    });
  }
}
