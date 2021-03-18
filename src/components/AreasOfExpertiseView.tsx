import type AreasOfExpertise from '../models/AreasOfExpertise';

import { Text, View } from '@react-pdf/renderer';
import H2 from './H2';
import H3 from './H3';

export interface AreasOfExpertiseViewProps {
    areasOfExpertise: Readonly<AreasOfExpertise>;
}

export default function AreasOfExpertiseView({ areasOfExpertise }: AreasOfExpertiseViewProps) {
    return (
        <View style={{ marginBottom: 4 }}>
            <H2 style={{marginBottom: 4}}>Areas Of Expertise</H2>
            <View style={{ marginLeft: 30 }}>
                <ExpertiseHeader>Languages and Tools</ExpertiseHeader>
                <ExpertiseItems>{areasOfExpertise.languagesAndTools.join(', ')}</ExpertiseItems>

                <ExpertiseHeader>Technologies</ExpertiseHeader>
                <ExpertiseItems>{areasOfExpertise.technologies.join(', ')}</ExpertiseItems>

                <ExpertiseHeader>Team Collaboration Tools</ExpertiseHeader>
                <ExpertiseItems>{areasOfExpertise.teamCollaborationTools.join(', ')}</ExpertiseItems>

                <ExpertiseHeader>Operating Systems and Platforms</ExpertiseHeader>
                <ExpertiseItems isLastItem={true}>{areasOfExpertise.platforms.join(', ')}</ExpertiseItems>
            </View>
        </View>
    );
}

function ExpertiseHeader({ children }: { children: React.ReactNode }) {
    return (<H3 style={{ marginBottom: 2 }}>{children}</H3>);
}

function ExpertiseItems({ children, isLastItem }: { children: React.ReactNode, isLastItem?: boolean }) {
    return (<Text style={{ fontFamily: 'Roboto', fontWeight: 'light', fontSize: 9, marginBottom: isLastItem ? 0 : 3 }}>{children}</Text>);
}