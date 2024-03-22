import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

const marks = [
    {
        value: 0,
        label: '₹0',
    },
    {
        value: 500,
        label: '₹500',
    },
    {
        value: 1000,
        label: '₹1000',
    },
    {
        value: 1500,
        label: '₹1500',
    },
    {
        value: 2000,
        label: '₹2000',
    },
];

export default function RangeSlider({ value, setValue }) {


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Slider
                getAriaLabel={() => 'price range'}
                value={value}
                min={0}
                max={2000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                marks={marks}
                step={100}
            />
        </Box>
    );
}