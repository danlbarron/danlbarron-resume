import { Text, View } from '@react-pdf/renderer';

export interface HeaderViewProps {
    fullName: string;
    title: string;
}

export default function HeaderView({ fullName, title }: HeaderViewProps) {
    return (
        <View style={{ marginBottom: 4 }}>
            <Text style={{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 16, lineHeight: 1 }}>{fullName}</Text>
            <Text style={{ fontFamily: 'Open Sans', fontStyle: 'italic', fontWeight: 'light', fontSize: 14 }}>{title}</Text>
        </View>
    )
}