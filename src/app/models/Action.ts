enum ActivityType{
    Biking=1,
    Walking,
    Hiking,
    Swimming,
    Sports,
    Gaming,
    Movie,
    Reading,
    Studying,
    Skiing,
    Snowboarding,
    Surfing,
    Roleplaying,
    Dancing
}

enum Atemperature{
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
export interface ActionModel{
    ActivityID: number;
    Activity: ActivityType;
    AtempRange: Atemperature;
    LocationID: number;

}