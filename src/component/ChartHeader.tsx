import { Typography } from '@mui/material';

export default function ChartHeader() {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h3">63,179.71 USD</Typography>
            <Typography variant="subtitle1" style={{ color: 'green' }}>
                +2,161.42 (3.54%)
            </Typography>
        </div>
    );
}
