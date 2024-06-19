import H2 from './H2';

import { Text, View } from '@react-pdf/renderer';

export interface ProfessionalSummaryViewProps {
    professionalSummary: string;
}

export default function ProfessionalSummaryView({ professionalSummary }: ProfessionalSummaryViewProps) {
    return (
        <View style={{ marginBottom: 4 }}>
            <H2 style={{ marginBottom: 4 }}>Professional Summary</H2>
            <Text style={{ fontFamily: 'Roboto', fontWeight: 'light', fontSize: 10, textIndent: 34 }}>{professionalSummary}</Text>
        </View>
    )
}