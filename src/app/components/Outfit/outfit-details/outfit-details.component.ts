import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ActionsService } from 'src/app/services/actions.service';
import { OutfitsService } from 'src/app/services/outfits.service';
import { Outfit } from 'src/app/models/Outfit';

@Component({
  selector: 'app-outfit-details',
  templateUrl: './outfit-details.component.html',
  styleUrls: ['./outfit-details.component.css']
})
export class OutfitDetailsComponent implements OnInit {

  outfit:Outfit;
  constructor(private activatedRoute: ActivatedRoute, private outfitService: OutfitsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData =>{
      this.outfitService.getOutfits(routeData.get('id')).subscribe((outfit: Outfit)=> {
        this.outfit = outfit;
      });
    });
  }

}
