import type { Style } from '@react-pdf/types';

import { Text } from '@react-pdf/renderer';
import { parseISO, format } from "date-fns";

export interface EmploymentDateRangeProps {
    startDate: string;
    endDate?: string;
    style?: Readonly<Style>;
}

export default function EmploymentDateRange({ startDate, endDate, style }: EmploymentDateRangeProps) {
    const start = parseISO(startDate);
    const isActiveRole = !endDate;
    const end = isActiveRole ? 'Present' : parseISO(endDate);
    return <Text style={style}>{`${format(start, 'MM/yy')} – ${isActiveRole ? end : format(end as Date, 'MM/yy')}`}</Text>
}