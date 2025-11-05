import { Box, Button, Checkbox,  FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import { conditions } from "../../../mock-data/data";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { nextStep } from "../../../features/step/stepsSlice";
import { useDispatch } from "react-redux";

export default function Step2() {

    const steps = useSelector((state: RootState) => state.steps)
    const users = useSelector((state: RootState) => state.user.users)

    const dispatch = useDispatch()

    const [checked, setChecked] = useState(false);
    const [isEmail, setIsEmail] = useState(false)

    useEffect(() => {
        const useIndex = users.findIndex((item) => {
            return item.islogin == true
        })
        if (useIndex != -1) {
            setIsEmail(true)
        }
    }, [])


    let indexUser = users.findIndex((item) => {
        return item.islogin == true
    })

    const confirmClickHandler = () => {
        if (checked && isEmail) {
            dispatch(nextStep())
        }
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (emailRegex.test(e.target.value)) {
            setIsEmail(true)
        }
    }

    return (

        <Box sx={{ w: '100%', backgroundColor: '#2A3342', borderRadius: '30px', padding: '29px 77px 39px', mt: '33px' }}>

            <Box sx={{
                borderBottom: '1px solid #596B89',
                pb: '34px'

            }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '700', }}>Invoice Details :</Typography>
                <Stack direction='row' justifyContent='space-between' sx={{ mt: '43px' }}>
                    <Typography sx={{ fontSize: '19px', fontWeight: '700', color: '#ABABAB' }} >Send :</Typography>
                    <Box>
                        {steps.type == 'tp' ? (
                            <Stack direction='row' gap={1.5} alignItems='center' sx={{ color: 'white' }} >
                                {steps.tether}
                                <img src="/images/USDT.png" alt="" />
                                <Typography>
                                    USDT
                                </Typography>
                            </Stack>
                        ) : (
                            <Stack direction='row' gap={2} alignItems='center' sx={{ color: 'white' }} >
                                {steps.pm}
                                <Typography sx={{ fontSize: '11px', width: '25px', height: '25px', backgroundColor: '#E33E23', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }} >
                                    PM
                                </Typography>
                                <Typography>
                                    Perfect Money
                                </Typography>
                            </Stack>
                        )}
                    </Box>
                </Stack>
                <Stack direction='row' justifyContent='space-between' sx={{ mt: '16px' }}>
                    <Typography sx={{ fontSize: '19px', fontWeight: '700', color: '#ABABAB' }} >Receive :</Typography>
                    <Box>
                        {steps.type == 'pt' ? (
                            <Stack direction='row' gap={1.5} alignItems='center' sx={{ color: 'white' }} >
                                {steps.tether}
                                <img src="/images/USDT.png" alt="" />
                                <Typography>
                                    USDT
                                </Typography>
                            </Stack>
                        ) : (
                            <Stack direction='row' gap={2} alignItems='center' sx={{ color: 'white' }} >
                                {steps.pm}
                                <Typography sx={{ fontSize: '11px', width: '25px', height: '25px', backgroundColor: '#E33E23', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }} >
                                    PM
                                </Typography>
                                <Typography>
                                    Perfect Money
                                </Typography>
                            </Stack>
                        )}
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ mt: '16px', display: indexUser != -1 ? 'none' : 'block' }} >
                <Typography sx={{ fontSize: '16px', fontWeight: '700', color: '#ABABAB', lineHeight: '100%' }} >Email:</Typography>
                <TextField onChange={(event) => changeEmailHandler(event)} type="email" sx={{ input: { color: "#fff" }, width: '100%', borderRadius: '10px', mt: '12px' }} placeholder="Please Enter Your Email" />
            </Box>
            <Box sx={{ mt: indexUser == -1 ? '43px' : '39px' }}>
                <Box>
                    <Typography sx={{ fontSize: '19px', fontWeight: '700', mb: '31px' }}>Exchange Conditions:</Typography>
                </Box>
                {conditions.map((item, index) => {
                    return (
                        <Stack key={item} direction='row' gap={1.5} sx={{ mt: '12px' }} >
                            <Typography sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#1D8D94', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                                {index + 1}
                            </Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: '300', textTransform: 'capitalize' }}>
                                {item}
                            </Typography>
                        </Stack>
                    )
                })}
                <Box sx={{ mt: '31px ' }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                                sx={{
                                    color: "#2A3342",
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                        backgroundColor: '#242C39',
                                        borderRadius: '6px',
                                        transition: 'all 0.2s ease',
                                    },
                                    '&.Mui-checked': {
                                        color: "#00B5AD",
                                    },
                                }}
                            />
                        }
                        label={<Typography color='white' sx={{ fontWeight: '600' }}>I Agree With The <Link to="/" style={{ color: '#60A7F8', textDecoration: 'none' }}>AML Policy</Link> And <Link to='/' style={{ color: '#60A7F8', textDecoration: 'none' }}>User Agreement</Link>. </Typography>}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '60px' }}>
                    <Button onClick={confirmClickHandler} sx={{ width: '560px', py: '20px', fontSize: '15px' }}>Confirm</Button>
                </Box>
            </Box>
        </Box>


    )
}
