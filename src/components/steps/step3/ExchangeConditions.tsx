import { Box, Stack, Typography } from "@mui/material";
import { conditions } from "../../../mock-data/data";

const indexConditions = [1, 2, 3]

export default function ExchangeConditions() {
    return (
        <Box
            sx={{
                mt: '54px'
            }}
        >
            <Typography>Exchange Conditions:</Typography>
            <Box
                sx={{
                    mt: '31px',
                }}
            >
                {indexConditions.map((item) => {
                    return (
                        <Stack
                            key={item}
                            direction='row'
                            gap={1.6}
                            sx={{ mt: '12px' }}
                        >
                            <Typography sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#1D8D94', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700' }}>
                                {item}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '300',
                                    textTransform: 'capitalize',
                                }}
                            >
                                {conditions[item -1]}
                            </Typography>
                        </Stack>
                    )
                })}
            </Box>
        </Box>
    )
}
