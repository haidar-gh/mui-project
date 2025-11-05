import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import type { RootState } from '../../../app/store'
import { useSelector } from 'react-redux'
import ThetherToPmQr from './ThetherToPmQr'
import ExchangeConditions from './ExchangeConditions'
import { useEffect, useState } from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TimeOut from './TimeOut'
import Success from './Success'
import PmToThether from './PmToThether'
import Waiting from './Waiting'

export default function Step3() {
    const steps = useSelector((state: RootState) => state.steps)

    const [time, setTime] = useState(600);
    const [stepStatus, setStepStatus] = useState(steps.type)

    useEffect(() => {
        if (time <= 0) {

            setStepStatus('timeout')
        }
        if (!['success', 'waiting'].includes(stepStatus)) {
            const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    const successHandler = () => {
        setStepStatus('success')
    }

    const waitingHandler = () => {
        setStepStatus('waiting')
    }

    return (
        <Box
            sx={{
                backgroundColor: '#2A3342',
                padding: stepStatus == 'success' ? '91px 77px 66px' : stepStatus == 'tp' ? '28px 77px 61px' : '28px 77px 164px',
                mt: '33px',
                borderRadius: '30px'
            }}
        >
            {!['timeout', 'success', 'waiting'].includes(stepStatus) &&
                <>
                    <Box>
                        <Stack direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography>Transaction Details :</Typography>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: 170,
                                    height: 170,
                                    borderRadius: "50%",
                                    background: "#1B2230",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 0 15px rgba(0, 255, 180, 0.1)",
                                }}
                            >
                                <CircularProgress
                                    variant="determinate"
                                    value={(time / 600) * 100}
                                    size={170}
                                    thickness={0.75}
                                    sx={{
                                        color: "#40A578",
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        "& .MuiCircularProgress-circle": {
                                            strokeLinecap: "round",
                                        },
                                    }}
                                />

                                <Box textAlign="center">
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            color: "#A8B3C3",
                                            mb: "5px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Time For Payment
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "32px",
                                            color: "#40A578",
                                            fontWeight: "bold",
                                            letterSpacing: "2px",
                                        }}
                                    >
                                        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: "#9CAAC1",
                                            mt: "5px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "4px",
                                        }}
                                    >
                                        <NotificationsNoneOutlinedIcon />15:30
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>

                </>
            }

            <Box
                sx={{
                    mt: '54px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    borderBottom: '1px solid #596B89',
                    pb: '34px',
                }}
            >
                {['timeout', 'success', 'waiting'].includes(stepStatus) &&
                    <Typography
                        sx={{
                            fontSize: '24px',
                            fontWeight: '7000',
                            mb: '26px'
                        }}
                    >
                        Transaction Details :
                    </Typography>
                }
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography
                        sx={{
                            fontSize: '19px',
                            fontWeight: '700',
                            color: '#ABABAB',
                        }}
                    >
                        Send :
                    </Typography>

                    {steps.type == 'tp' ? (
                        <Stack direction='row' gap={1.5} alignItems='center' sx={{ color: 'white', fontWeight: '700' }} >
                            {steps.tether}
                            <img src="/images/USDT.png" alt="" />
                            <Typography>
                                USDT
                            </Typography>
                        </Stack>
                    ) : (
                        <Stack direction='row' gap={2} alignItems='center' sx={{ color: 'white', fontWeight: '700' }} >
                            {steps.pm}
                            <Typography sx={{ fontSize: '11px', width: '25px', height: '25px', backgroundColor: '#E33E23', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }} >
                                PM
                            </Typography>
                            <Typography>
                                Perfect Money
                            </Typography>
                        </Stack>
                    )}
                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography
                        sx={{
                            fontSize: '19px',
                            fontWeight: '700',
                            color: '#ABABAB',
                        }}
                    >
                        Receive :
                    </Typography>

                    {steps.type == 'pt' ? (
                        <Stack direction='row' gap={1.5} alignItems='center' sx={{ color: 'white', fontWeight: '700' }} >
                            {steps.tether}
                            <img src="/images/USDT.png" alt="" />
                            <Typography>
                                USDT
                            </Typography>
                        </Stack>
                    ) : (
                        <Stack direction='row' gap={2} alignItems='center' sx={{ color: 'white', fontWeight: '700' }} >
                            {steps.pm}
                            <Typography sx={{ fontSize: '11px', width: '25px', height: '25px', backgroundColor: '#E33E23', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }} >
                                PM
                            </Typography>
                            <Typography>
                                Perfect Money
                            </Typography>
                        </Stack>
                    )}
                </Stack>

            </Box>

            {!['timeout', 'success', 'waiting'].includes(stepStatus) && 
                <>
                    {stepStatus == 'tp' ? <><ThetherToPmQr /><ExchangeConditions /></> : <PmToThether />}

                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', gap: '25px', mt: '42px' }}
                    >
                        <Button
                            onClick={successHandler}
                            sx={{
                                width: '560px',
                                height: '60px'
                            }}>
                            submit
                        </Button>
                        <Button
                            onClick={waitingHandler}
                            sx={{
                                width: '170px',
                                height: '60px',
                                bgcolor: '#FFAF00'
                            }}>
                            Waiting
                        </Button>
                    </Box>
                </>
            }
            {stepStatus == 'timeout' && <TimeOut setTime={setTime} setStepStatus={setStepStatus} steps={steps} />}
            {stepStatus == 'success' && <Success />}
            {stepStatus == 'waiting' && <Waiting/>}


        </Box>
    )
}
