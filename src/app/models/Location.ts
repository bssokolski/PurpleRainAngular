import { Type } from '@angular/compiler';

export interface LocationModel{
    LocationId?: number;
    LocationName?: string;
    CityName?: string;
    OwnerId: number;
    OutfitId?: number;
    Outfit?: Type;
    ActivityID?:number;
    Action?:Type;

}