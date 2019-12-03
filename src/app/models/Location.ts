import { Type } from '@angular/compiler';

export interface LocationModel{
    LocationID?: number;
    LocationName?: string;
    CityName?: string;
    OwnerID: number;
    OutfitID?: number;
    Outfit?: Type;
    ActivityID?:number;
    Action?:Type;

}