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
            <H2 style={{ marginBottom: 4}}>Employment History</H2>

            {employmentHistory.map(experience => (
                <View key={experience.startDate}>
                    {/* DateRange    CompanyName         JobTitle */}
                    <View style={{ flex: 1, flexDirection: 'row', fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 10, marginBottom: 4, maxWidth: 500, maxHeight: 14 }}>
                        <EmploymentDateRange
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            isActiveRole={experience.isActiveRole}
                            style={{ marginRight: 30}} />
                        <Text>{experience.companyName}</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text>{experience.jobTitle}</Text>
                        </View>
                    </View>

                    {/* Description */}
                    <View style={{ flex: 1, flexDirection: 'column', marginBottom: 2 }}>
                        {experience.description.map((description, index) => (
                            <View key={index} style={{ flex: 1, flexDirection: 'row', fontFamily: 'Roboto', fontSize: 9, marginBottom: 2, maxHeight: '100%' }}>
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