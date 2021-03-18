import type Education from '../models/Education';
import type ReactPDF from '@react-pdf/renderer';

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
                <View key={index} style={{ flex: 1, flexDirection: 'row', marginBottom: 2 }}>
                    <EducationDateRange startDate={item.startDate} endDate={item.endDate} />
                    <ItemText style={{ marginLeft: 30 }}>{item.schoolName}</ItemText>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <ItemText>{item.degree} of {item.fieldOfStudy}</ItemText>
                    </View>
                </View>
            ))}
        </View>
    );
}

function ItemText({ children, style }: { children: React.ReactNode, style?: ReactPDF.Style}) {
    const textStyle: ReactPDF.Style = {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 10
    }
    const styleProps = style ? [textStyle, style] : textStyle;

    return (<Text style={styleProps}>{children}</Text>);
}