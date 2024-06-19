import type AreasOfExpertise from '../models/AreasOfExpertise';
import type EmploymentExperience from '../models/EmploymentExperience';
import type Education from '../models/Education';

import { registerFonts } from '../services/FontService';

import { Document, Page, View } from '@react-pdf/renderer';
import HeaderView from '../components/HeaderView';
import ProfessionalSummaryView from '../components/ProfessionalSummaryView';
import AreasOfExpertiseView from '../components/AreasOfExpertiseView';
import EmploymentHistoryView from '../components/EmploymentHistoryView';
import EducationView from '../components/Education';

export interface ResumeProps {
    fullName: string;
    title: string;
    professionalSummary: string;
    areasOfExpertise: Readonly<AreasOfExpertise>;
    employmentHistory: ReadonlyArray<Readonly<EmploymentExperience>>;
    education: ReadonlyArray<Readonly<Education>>;
}

export default function Resume({ fullName, title, professionalSummary, areasOfExpertise, employmentHistory, education }: ResumeProps) {
    registerFonts();

    return (
        <Document
            author={fullName}
            creator={fullName}
            producer={fullName}
            keywords=''
            subject=''
            title={`${fullName} | Resume`}>
                <Page style={{ paddingTop: 48, paddingLeft: 52, paddingRight: 52, paddingBottom: 48 }}>
                    <View>
                        <HeaderView fullName={fullName} title={title} />
                        <ProfessionalSummaryView professionalSummary={professionalSummary} />
                        <AreasOfExpertiseView areasOfExpertise={areasOfExpertise} />
                        <EmploymentHistoryView employmentHistory={employmentHistory} />
                        <EducationView education={education} />
                    </View>
                </Page>
        </Document>
    );
}