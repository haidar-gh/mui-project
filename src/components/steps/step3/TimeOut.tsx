import { Box, Button, Stack, Typography } from "@mui/material";
import React, { type SetStateAction } from "react";

interface ChildProps {
    setTime : React.Dispatch<SetStateAction<number>>,
    setStepStatus: React.Dispatch<SetStateAction<string>>,
    steps : {
        step: number,
        tether: string,
        pm: string
        type: string
    }
}

export default function TimeOut( {setTime , setStepStatus, steps} : ChildProps) {

    const resetStepHandler = () => {
        setTime(600)
        setStepStatus(steps.type)
    }

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            gap={3.75}
            sx={{
                mt: '68px'
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    alignItems:'center'
                }}
            >
                <Typography
                    sx={{
                        color: '#F66066',
                        fontSize: '60px',
                        fontWeight: '900',
                        mr: '12px'
                    }}
                >
                    ×
                </Typography>
                <Typography
                    sx={{
                        display: "flex",
                        alignItems: 'center',
                        color: '#F66066',
                        fontSize: '32px',
                        textTransform: 'capitalize',
                        fontWeight: '700'
                    }}
                >



                    Your payment time has expired !
                </Typography>
            </Box>
            <Typography
                sx={{
                    fontSize: '19px',
                    textTransform: 'capitalize',
                    fontWeight: '700',
                    color: '#ABABAB'
                }}
            >
                Please complete the payment process again
            </Typography>
            <Box>
                <Button
                    onClick={resetStepHandler}
                    sx={{
                        width: '173px',
                        height: '68px'
                    }}
                >
                    Try Again
                </Button>
            </Box>
        </Stack>
    )
}
