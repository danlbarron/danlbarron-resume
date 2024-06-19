import type AreasOfExpertise from './AreasOfExpertise';
import type EmploymentExperience from './EmploymentExperience';
import type Education from './Education';

export default interface Resume {
    readonly firstName: string;
    readonly lastName: string;
    readonly title: string;
    readonly professionalSummary: string;
    readonly areasOfExpertise: Readonly<AreasOfExpertise>;
    readonly employmentHistory: ReadonlyArray<Readonly<EmploymentExperience>>;
    readonly education: ReadonlyArray<Readonly<Education>>;
}