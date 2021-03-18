export default interface EmploymentExperience {
    readonly companyName: string;
    readonly jobTitle: string;
    readonly location?: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly isActiveRole: boolean;
    readonly description: ReadonlyArray<string>;
}