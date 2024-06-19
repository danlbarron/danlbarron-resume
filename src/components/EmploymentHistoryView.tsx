import type EmploymentExperience from '../models/EmploymentExperience';

import { Text, View } from '@react-pdf/renderer';
import EmploymentDateRange from './EmploymentDateRange';
import H2 from './H2';

export interface EmploymentHistoryViewProps {
    employmentHistory: ReadonlyArray<Readonly<EmploymentExperience>>;
}

export default function EmploymentHistoryView({ employmentHistory }: EmploymentHistoryViewProps) {
    return (
        <View style={{ marginBottom: 4 }}>
            <H2 style={{ marginBottom: 4 }}>Employment History</H2>

            {employmentHistory.map(experience => (
                <View key={experience.startDate}>
                    {/* DateRange    CompanyName         JobTitle */}
                    <View style={{ flexDirection: 'column', fontFamily: 'Roboto', fontSize: 9, marginBottom: 4, maxWidth: 500 }}>
                        <EmploymentDateRange style={{ fontWeight: 'medium' }}
                                             startDate={experience.startDate}
                                             endDate={experience.endDate} />
                        <Text style={{ fontWeight: 'bold' }}>
                            {experience.companyName}
                        </Text>
                        <Text style={{ fontWeight: 'normal', fontStyle: 'italic' }}>
                            {experience.jobTitle}
                        </Text>
                    </View>

                    {/* Description */}
                    <View style={{ flexDirection: 'column', marginBottom: 2 }}>
                        {experience.description.map((description, index) => (
                            <View key={index} style={{ flexDirection: 'row', fontFamily: 'Roboto', fontSize: 9, marginBottom: 2 }} wrap={false}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 20, marginRight: 10 }}>•</Text>
                                <Text style={{ fontWeight: 'light', width: 415 }}>{description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
}