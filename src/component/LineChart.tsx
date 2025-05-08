import {
    LineChart as ReLineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

type PricePoint = {
    date: string;
    value: number;
};

interface Props {
    data: PricePoint[];
}

export default function LineChart({ data }: Props) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <ReLineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis domain={['auto', 'auto']} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#1976d2"
                    strokeWidth={2}
                    dot={false}
                />
            </ReLineChart>
        </ResponsiveContainer>
    );
}
