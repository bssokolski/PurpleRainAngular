enum TopType {
    Comfort=1,
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
    Sweatpants=1,
    Shorts,
    Pants,
    Skirt
}
enum Otemperature{
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten
}
export interface Outfit{

OutfitID?: number;
OutfitName?: string;
Top?: TopType;
Bottom?: BottomType;
LocationID: number;
OtempRange: Otemperature;

}