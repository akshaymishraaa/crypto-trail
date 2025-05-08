import { useState } from 'react';
import { Container, Box, Tabs, Tab, Button } from '@mui/material';
import ChartHeader from './component/ChartHeader';
import TimeRangeSelector from './component/TimeRangeSelector';
import LineChart from './component/LineChart';
import { mockPriceData } from './data/MockData';


function App() {
  const [selectedRange, setSelectedRange] = useState('1W');
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <Container>
      <ChartHeader />

      <Tabs value={tabIndex} onChange={(_, val) => setTabIndex(val)}>
        <Tab label="SUMMARY" />
        <Tab label="CHART" />
        <Tab label="STATISTICS" />
        <Tab label="ANALYSIS" />
        <Tab label="SETTINGS" />
      </Tabs>

      {tabIndex === 1 && (
        <Box mt={3}>
          <Box mb={2} display="flex" gap={1} flexWrap="wrap">
            <Button variant="outlined">FULLSCREEN</Button>
            <Button variant="outlined">COMPARE</Button>
            <TimeRangeSelector selected={selectedRange} onSelect={setSelectedRange} />
          </Box>
          <LineChart data={mockPriceData[selectedRange]} />
        </Box>
      )}
    </Container>
  );
}

export default App;
