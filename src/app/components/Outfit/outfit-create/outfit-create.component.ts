import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OutfitsService } from 'src/app/services/outfits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outfit-create',
  templateUrl: './outfit-create.component.html',
  styleUrls: ['./outfit-create.component.css']
})
export class OutfitCreateComponent implements OnInit {

  outfitForm: FormGroup;
  id: string;

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
      this.outfitService.createOutfits(this.id,this.outfitForm.value).subscribe(data => {
        this.router.navigate(['']);
      });
    }
}


