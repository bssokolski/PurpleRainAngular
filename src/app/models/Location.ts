import { Type } from '@angular/compiler';

export interface LocationModel{
    LocationID?: number;
    LocationName?: string;

    CityName: number; //actually telling the users to use a zip code instead of city name
    OwnerId: number;
    OutfitId?: number;
    Outfit?: any;
    ActivityID?:number;
    Action?:any;
    Temp?: any;

}