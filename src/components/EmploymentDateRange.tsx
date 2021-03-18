import type ReactPDF from '@react-pdf/renderer';

import { Text } from '@react-pdf/renderer';
import { parseISO, format } from "date-fns";

export interface EmploymentDateRangeProps {
    startDate: string;
    endDate: string;
    isActiveRole: boolean;
    style?: Readonly<ReactPDF.Style>;
}

export default function EmploymentDateRange({ startDate, endDate, isActiveRole, style }: EmploymentDateRangeProps) {
    const start = parseISO(startDate);
    const end = isActiveRole ? 'Present' : parseISO(endDate);
    return <Text style={style}>{`${format(start, 'MM/yy')} – ${isActiveRole ? end : format(end as Date, 'MM/yy')}`}</Text>
}