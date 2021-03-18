import { Text } from '@react-pdf/renderer';
import { parseISO, format } from "date-fns";

export interface EducationDateRangeProps {
    startDate: string;
    endDate: string;
}

export default function EducationDateRange({ startDate, endDate }: EducationDateRangeProps) {
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    return <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 9 }}>{`${format(start, 'yyyy')} – ${format(end as Date, 'yyyy')}`}</Text>
}