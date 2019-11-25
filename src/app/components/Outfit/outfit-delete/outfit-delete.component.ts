import { Component, OnInit } from '@angular/core';
import { Outfit } from 'src/app/models/Outfit';
import { ActivatedRoute, Router } from '@angular/router';
import { OutfitsService } from 'src/app/services/outfits.service';

@Component({
  selector: 'app-outfit-delete',
  templateUrl: './outfit-delete.component.html',
  styleUrls: ['./outfit-delete.component.css']
})
export class OutfitDeleteComponent implements OnInit {

  outfit: Outfit;

  constructor(private activatedRoute: ActivatedRoute, private outfitService: OutfitsService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.outfitService.getOutfits(params.get('id')).subscribe((singleOutfit: Outfit) =>{
        this.outfit=singleOutfit;
      });
    });
   }

  ngOnInit() {
  }

  onDelete(){
    this.outfitService.deleteOutfit(this.outfit.OutfitID).subscribe(()=>{
      this.router.navigate(['']);
    });
  }

}
