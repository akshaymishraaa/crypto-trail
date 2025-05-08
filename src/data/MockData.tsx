export type PricePoint = {
    date: string;
    value: number;
};

const generateMockData = (days: number): PricePoint[] => {
    const now = new Date();
    const data: PricePoint[] = [];

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        const value = 62000 + Math.sin(i / 2) * 500 + Math.random() * 1000;
        data.push({ date: date.toISOString().split('T')[0], value: +value.toFixed(2) });
    }

    return data;
};

export const mockPriceData = {
    '1D': generateMockData(1),
    '3D': generateMockData(3),
    '1W': generateMockData(7),
    '1M': generateMockData(30),
    '6M': generateMockData(180),
    '1Y': generateMockData(365),
    'MAX': generateMockData(1000),
};
