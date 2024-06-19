import type Education from '../models/Education';

import { Text, View } from '@react-pdf/renderer';
import EducationDateRange from './EducationDateRange';
import H2 from './H2';

export interface EducationViewProps {
    education: ReadonlyArray<Readonly<Education>>;
}

export default function EducationView({ education }: EducationViewProps) {
    return (
        <View wrap={false}>
            <H2 style={{ marginBottom: 4 }}>Education</H2>
            {education.map((item, index) => (
                <View key={index} style={{ flexDirection: 'column', fontFamily: 'Roboto', fontSize: 9, marginBottom: 2 }}>
                    <EducationDateRange style={{ fontWeight: 'normal', fontStyle: 'italic' }} startDate={item.startDate} endDate={item.endDate} />
                    <Text style={{ fontWeight: 'bold' }}>{item.schoolName}</Text>
                    <Text style={{ fontWeight: 'normal' }}>{item.degree} of {item.fieldOfStudy}</Text>
                </View>
            ))}
        </View>
    );
}