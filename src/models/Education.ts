export default interface Education {
    readonly schoolName: string;
    readonly degree: string;
    readonly fieldOfStudy: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly description?: ReadonlyArray<string>;
}