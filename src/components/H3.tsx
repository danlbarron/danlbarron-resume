import type ReactPDF from '@react-pdf/renderer';

import { Text } from '@react-pdf/renderer';

export interface H3Props {
    children: Readonly<React.ReactNode>;
    style?: Readonly<ReactPDF.Style>;
}

export default function H3({ children, style }: H3Props) {
    const textStyle: ReactPDF.Style = {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 11,
        textTransform: 'uppercase'
    };
    const styleProps = style ? [textStyle, style] : textStyle;

    return (<Text style={styleProps}>{children}</Text>);
}