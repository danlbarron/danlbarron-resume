import H2 from './H2';

import { Text, View } from '@react-pdf/renderer';

export interface ObjectiveViewProps {
    objective: string;
}

export default function ObjectiveView({ objective }: ObjectiveViewProps) {
    return (
        <View style={{ marginBottom: 4 }}>
            <H2 style={{ marginBottom: 4 }}>Objective</H2>
            <Text style={{ fontFamily: 'Roboto', fontWeight: 'light', fontSize: 10, textIndent: 34 }}>{objective}</Text>
        </View>
    )
}