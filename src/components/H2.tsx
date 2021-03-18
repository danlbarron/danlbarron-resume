import type ReactPDF from '@react-pdf/renderer';

import { Text } from '@react-pdf/renderer';

export interface H2Props {
    children: Readonly<React.ReactNode>;
    style?: Readonly<ReactPDF.Style>;
}

export default function H2({ children, style }: H2Props) {
    const textStyle: ReactPDF.Style = {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase'
    };
    const styleProps = style ? [textStyle, style] : textStyle;
    
    return (<Text style={styleProps}>{children}</Text>);
}