enum TopType {
    Comfort,
    Tshirt,
    Sweater,
    Hoody,
    Jacket,
    Coat,
    Dressshirt,
    Suit,
    Prince
}

enum BottomType{
    Sweatpants,
    Shorts,
    Pants,
    Skirt
}
export interface Outfit{

OutfitID?: number;
OutfitName?: string;
Top?: TopType;
Bottom?: BottomType;

}