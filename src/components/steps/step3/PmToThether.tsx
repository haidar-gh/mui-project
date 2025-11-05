import { Autocomplete, Box, Stack, TextField, Typography } from '@mui/material'


const options = [
    { label: 'TRON', id: 1 },
];

export default function PmToThether() {
    return (
        <Stack
            gap={2}
            sx={{
                mt: '16px'
            }}
        >
            <Box>
                <Typography
                    sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#ABABAB',
                    }}
                >
                    Perfect Money Code :
                </Typography>
                <TextField
                    placeholder='Please Enter Your Perfect Money Code'
                    sx={{
                        fontSize: '16px',
                        width: '100%'
                    }}
                />
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#ABABAB',
                    }}
                >
                    Perfect Money Number :
                </Typography>
                <TextField
                    placeholder='Please Enter Your Perfect Money Number'
                    sx={{
                        fontSize: '16px',
                        width: '100%'
                    }}
                />
            </Box>
            <Box>

                <Typography
                    sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        mb:'12px',
                        color: '#ABABAB',
                    }}
                >
                    Choose Network And Enter Tether Address :
                </Typography>
                <Stack direction='row' >

                    <Autocomplete
                        disableClearable
                        options={options}
                        defaultValue={{ label: 'TRON', id: 1 }}
                        sx={{
                            
                            width: '126px',
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
                    <TextField
                        placeholder='please Enter Address'
                        type='text'
                        sx={{
                            input: { backgroundColor: '#242C39', color: 'White' },
                            flexGrow: '1',
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
                </Stack>
            </Box>
        </Stack>
    )
}
