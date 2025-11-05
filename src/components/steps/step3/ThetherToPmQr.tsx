import { Autocomplete, Box, Grid, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import QRCode from 'qrcode-svg';

const options = [
    { label: 'TRON', id: 1 },
];

export default function ThetherToPmQr() {
    const [svgCode, setSvgCode] = useState<string>('')
    const qrValue = 'x09aa998ee454c456255daf3ac94908f1dcfb7033';

    useEffect(() => {
        const qr = new QRCode({
            content: qrValue,
            padding: 2,
            width: 191,
            height: 191,
            color: '#ABABAB',
            background: '#2A3342',
            ecl: 'M',
        });
        setSvgCode(qr.svg());
    }, [qrValue])


    return (
        <Box
            sx={{
                mt: '56px'
            }}
        >
            <Grid container spacing={10} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid size={9}>
                    <Stack>
                        <Typography
                            sx={{
                                color: '#ABABAB',
                                fontSize: '20px',
                                fontWeight: '700'
                            }}
                        >
                            choose network and To receive 120 Perfect Money, please deposit 100 Tether to the Tether address below:
                        </Typography>
                        <Grid container
                            sx={{ mt: '38px' }}
                        >
                            <Grid size={2}>
                                <Autocomplete
                                    disableClearable
                                    options={options}
                                    defaultValue={{ label: 'TRON', id: 1 }}
                                    sx={{
                                        width: '100%',
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#1D8D94',
                                            borderRadius: '8px',
                                        },
                                        '& .MuiSvgIcon-root': {

                                            color: 'white',
                                        },
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="" // ❌ حذف لیبل
                                            placeholder="Select option..." // (اختیاری) متن جایگزین
                                            InputLabelProps={{ shrink: false }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', // حذف بوردر
                                                },
                                                '& .MuiInputBase-input': {
                                                    color: 'white', // رنگ متن داخل input
                                                },
                                            }}
                                        />
                                    )}

                                />
                            </Grid>
                            <Grid size={10}>
                                <TextField
                                    value='x09aa998ee454c456255daf3ac94908f1dcfb7033'
                                    type='text'
                                    sx={{
                                        input: { backgroundColor: '#242C39', color: 'White' },
                                        width: '100%',
                                        BackgroundColor: '#242C39',
                                        border: 'none',
                                        "& .MuiOutlinedInput-root": {
                                            border: 'noen',
                                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                                WebkitAppearance: "none",
                                                margin: 0,
                                            },
                                            "& input[type=number]": {
                                                MozAppearance: "textfield",
                                            },
                                            "& fieldset": {
                                                borderColor: "transparent",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "transparent",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "transparent ",
                                            },

                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white",
                                        },
                                        "& .MuiInputBase-input": {
                                            color: "white",
                                        },

                                        "& label.Mui-focused": {
                                            color: "inherit",
                                        },
                                        flexBasis: '50%',
                                        backgroundColor: 'transparent'

                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid size={2}>
                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
