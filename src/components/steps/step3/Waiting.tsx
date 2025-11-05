import { Box, Stack, TextField, Typography } from '@mui/material'

export default function Waiting() {
    return (
        <Stack
            sx={{
                mt: '28px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '7px'
                }}
            >
                <img style={{ width: '41px', height: '41px' }} src="/images/waiting.svg" alt="" />
                <Typography
                    sx={{
                        fontSize: '32px',
                        fontWeight: '700',
                        color: '#FFAF00'
                    }}
                >
                    Waiting ...
                </Typography>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#ABABAB',
                        textAlign: 'center',
                        lineHeight: '40px',
                        textTransform: 'capitalize',
                        mt: '24px',
                        mb: '37px'
                    }}
                >
                    Your payment was successful and we will soon pay the amount of 100 Tether to this address :
                </Typography>
            </Box>
            <Box>
                <Stack direction='row' justifyContent='space-between' alignItems='center' >
                    
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#ABABAB'
                        }}
                    >
                        Address:
                    </Typography>

                    <TextField
                        value='x09aa998ee454c456255daf3ac94908f1dcfb7033'
                        sx={{
                            width: '791px'
                        }}
                    />

                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: '19px' }} >
                    
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#ABABAB'
                        }}
                    >
                        Amount:
                    </Typography>

                    <TextField
                        value='100 USDT'
                        sx={{
                            width: '791px'
                        }}
                    />

                </Stack>

            </Box>
        </Stack>
    )
}
