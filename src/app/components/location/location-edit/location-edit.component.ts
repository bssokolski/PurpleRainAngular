import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationModel } from 'src/app/models/location';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  location: LocationModel;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private locationService: LocationService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.locationService.getLocation(params.get('id')).subscribe((location: LocationModel) => {
        this.location = location;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm(){
    this.editForm = this.formBuilder.group({
      OwnerId: new FormControl(this.location.OwnerId),
      LocationId: new FormControl(this.location.LocationId),
      LocationName: new FormControl(this.location.LocationName),
      CityName: new FormControl(this.location.CityName)
       
    });
  }

  onSubmit(form)
  {
    const updatedLocation: LocationModel = {
      OwnerId: this.editForm.value.OwnerId,
      LocationId: this.editForm.value.LocationId,
      LocationName: this.editForm.value.LocationName,
      CityName: this.editForm.value.CityName
    };
    this.locationService.updateLocation(updatedLocation).subscribe(() => {
      this.router.navigate(['/location']);
    });
  }

}
