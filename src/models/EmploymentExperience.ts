export default interface EmploymentExperience {
    readonly companyName: string;
    readonly jobTitle: string;
    readonly location?: string;
    readonly startDate: string;
    readonly endDate?: string;
    readonly description: ReadonlyArray<string>;
}