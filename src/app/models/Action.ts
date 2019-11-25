enum ActivityType{
    Biking,
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
export interface ActionModel{
    ActivityID: number;
    Activity: ActivityType;

}