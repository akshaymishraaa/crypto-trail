import { Button, ButtonGroup } from '@mui/material';

interface Props {
  selected: string;
  onSelect: (range: string) => void;
}

const ranges = ['1D', '3D', '1W', '1M', '6M', '1Y', 'MAX'];

export default function TimeRangeSelector({ selected, onSelect }: Props) {
  return (
    <ButtonGroup variant="outlined">
      {ranges.map((range) => (
        <Button
          key={range}
          variant={selected === range ? 'contained' : 'outlined'}
          onClick={() => onSelect(range)}
        >
          {range}
        </Button>
      ))}
    </ButtonGroup>
  );
}
