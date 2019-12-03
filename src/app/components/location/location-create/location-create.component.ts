import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent implements OnInit {

  locationForm: FormGroup;

  constructor(private form: FormBuilder, private locationService: LocationService, private router: Router) {
     this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.locationForm = this.form.group({
      LocationName: new FormControl,
      CityName: new FormControl // this is now zipcode but we are going to call it city name 

    });
  }

  onSumbit(){
    this.locationService.createLocation(this.locationForm.value).subscribe(()=>{
      this.router.navigate(['/location']);
    });
  }

}
