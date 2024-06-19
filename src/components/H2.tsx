import type { Style } from '@react-pdf/types';

import { Text } from '@react-pdf/renderer';

export interface H2Props {
    children: Readonly<React.ReactNode>;
    style?: Readonly<Style>;
}

export default function H2({ children, style }: H2Props) {
    const textStyle: Style = {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 11,
        textTransform: 'uppercase'
    };
    const styleProps = style ? [textStyle, style] : textStyle;
    
    return (<Text style={styleProps}>{children}</Text>);
}