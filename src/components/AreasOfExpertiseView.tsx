import type AreasOfExpertise from '../models/AreasOfExpertise';

import { Text, View } from '@react-pdf/renderer';
import H2 from './H2';

export interface AreasOfExpertiseViewProps {
    areasOfExpertise: Readonly<AreasOfExpertise>;
}

export default function AreasOfExpertiseView({ areasOfExpertise }: AreasOfExpertiseViewProps) {
    return (
        <View style={{ flexDirection: 'column', marginBottom: 4 }}>
            <H2 style={{marginBottom: 4}}>Areas Of Expertise</H2>
            <ExpertiseList title='Programming Languages'>{areasOfExpertise.programmingLanguages.join(', ')}</ExpertiseList>
            <ExpertiseList title='Frameworks & Libraries'>{areasOfExpertise.frameworksAndLibraries.join(', ')}</ExpertiseList>
            <ExpertiseList title='Tools & Platforms'>{areasOfExpertise.tools.concat(areasOfExpertise.platforms).join(', ')}</ExpertiseList>
            <ExpertiseList title='Methodologies' isLastItem={true}>{areasOfExpertise.methodologies.join(', ')}</ExpertiseList>
        </View>
    );
}

function ExpertiseList({ title, children, isLastItem }: { title: string, children: React.ReactNode, isLastItem?: boolean }) {
    return (
        <View style={{ flexDirection: 'row', fontFamily: 'Roboto', fontSize: 9 }}>
            <Text style={{ fontWeight: 'bold', marginLeft: 20, marginRight: 3 }}>{title}:</Text>
            <Text style={{ fontWeight: 'light', maxWidth: 358, marginBottom: isLastItem ? 0 : 3 }}>{children}</Text>
        </View>
    );
}