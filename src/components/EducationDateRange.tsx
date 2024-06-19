import type { Style } from '@react-pdf/types';

import { Text } from '@react-pdf/renderer';
import { parseISO, format } from "date-fns";

export interface EducationDateRangeProps {
    startDate: string;
    endDate: string;
    style?: Readonly<Style>;
}

export default function EducationDateRange({ startDate, endDate, style }: EducationDateRangeProps) {
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    return <Text style={style}>{`${format(start, 'yyyy')} – ${format(end as Date, 'yyyy')}`}</Text>
}