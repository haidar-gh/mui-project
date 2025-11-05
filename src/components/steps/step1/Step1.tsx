import type { Theme } from '@mui/material/styles';
import { Button, Card, Container, MenuItem, OutlinedInput, Select, Stack, TextField, Typography, useTheme, type SelectChangeEvent } from '@mui/material'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../app/store'
import { nextStep, setType, setPM, setTether } from '../../../features/step/stepsSlice'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        sx: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            color: 'white',
            backgroundColor: '#242C39',
            '& .MuiMenuItem-root.Mui-selected': {
                backgroundColor: '#242C39',

            },
            '& .MuiMenuItem-root:hover': {
                backgroundColor: 'rgba(255,255,255,0.5)',

            },
        },
    },
};

const names = [
    'USDT(TRC20)',
    'Perfect Money',

];
function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
};

export default function Step1() {

    const dispatch = useDispatch<AppDispatch>()

    const theme = useTheme();

    const [personName1, setPersonName1] = useState<string[]>([names[0]]);
    const [personName2, setPersonName2] = useState<string[]>([names[1]]);
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    console.log(personName1)
    console.log(personName2)

    const handleChangeFirstSelect = (event: SelectChangeEvent<typeof personName1>) => {
        const {
            target: { value },
        } = event;
        setPersonName1(
            typeof value === 'string' ? value.split(',') : value,
        );
        setPersonName2(value == 'Perfect Money' ? [names[0]] : [names[1]])
        setInputValue1(inputValue2)
        setInputValue2(inputValue1)
    };

    const handleChangeSecondSelect = (event: SelectChangeEvent<typeof personName2>) => {
        const {
            target: { value },
        } = event;

        setPersonName2(
            typeof value === 'string' ? value.split(',') : value,
        );
        setPersonName1(value == 'Perfect Money' ? [names[0]] : [names[1]])
        setInputValue2(inputValue1)
        setInputValue1(inputValue2)
    };

    const inputChangeHandler1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue1(e.target.value)
    }
    const inputChangeHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue2(e.target.value)
    }

    const exChangeHandler = () => {
        setInputValue1(inputValue2)
        setInputValue2(inputValue1)
        setPersonName1(personName2)
        setPersonName2(personName1)
    }

    const makeExchangeHandler = () => {
        if (inputValue1 && inputValue2) {
            dispatch(nextStep())
            if (personName1.includes(names[0])) {
                dispatch(setType('tp'))
                dispatch(setTether(inputValue1))
                dispatch(setPM(inputValue2))
            } else {
                dispatch(setType('pt'))
                dispatch(setTether(inputValue2))
                dispatch(setPM(inputValue1))
            }

        }

    }

    return (
        <Container maxWidth='sm'>
            <Stack sx={{ position: 'relative' }}>
                <Card sx={{
                    mt: '35px',
                    borderRadius: '30px'
                }}
                >
                    <Typography sx={{
                        color: '#ABABAB',
                        fontSize: '16px',
                        fontWeight: '700'


                    }}>
                        From:
                    </Typography>
                    <Stack direction='row' sx={{ mt: '16px', backgroundColor: '#242C39', borderRadius: '10px' }}>
                        <TextField
                            value={inputValue1}
                            onChange={inputChangeHandler1}
                            placeholder='1000'
                            type='number'
                            sx={{
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
                                input: { color: 'white' },
                                flexBasis: '50%',
                                backgroundColor: 'transparent'

                            }} />
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={personName1}
                            onChange={(e) => handleChangeFirstSelect(e)}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}

                            sx={{
                                border: 'none',
                                outline: 'none',
                                flexBasis: '50%',
                                color: '#979E9C',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#9ca3af',
                                    border: 'none',
                                    borderLeft: '1px solid #5B5F5E '
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#5B5F5E'

                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#5B5F5E',
                                },
                                '& .MuiSelect-icon': {
                                    color: 'white',
                                },
                            }}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName1, theme)}
                                >

                                    {name == 'USDT(TRC20)' ? (
                                        <div style={{ display: 'flex', justifyContent: 'start' }}><img src="/images/USDT.png" alt="" style={{ marginRight: '10px' }} /> {name}</div>
                                    ) : <div style={{ display: 'flex', justifyContent: 'start' }}><Typography sx={{ width: '25px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E33E23', borderRadius: '50%', color: 'white', marginRight: '10px', fontSize: '12px' }} >PM</Typography> {name}</div>}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                    <Typography sx={{ color: '#ABABAB', mt: '14px', fontWeight: '400', fontSize: '14px' }}>
                        Min : $100    Max: $4832
                    </Typography>
                </Card>
                <Button onClick={exChangeHandler} sx={{ width: '69px', height: '69px', backgroundColor: '#242C39', borderRadius: '50%', color: '#F3AC76', position: 'absolute', top: '39%', left: 'calc(50% - 34px)' }}>
                   <img src="/public/images/Group 4.svg" alt="" />
                </Button>
                <Card sx={{
                    mt: '27px',
                    borderRadius: '30px'
                }}
                >
                    <Typography sx={{
                        color: '#ABABAB',
                        fontSize: '16px',
                        fontWeight: '700'

                    }}>
                        To:
                    </Typography>
                    <Stack direction='row' sx={{ mt: '16px', backgroundColor: '#242C39', borderRadius: '10px' }}>
                        <TextField
                            value={inputValue2}
                            onChange={inputChangeHandler2}
                            placeholder='1000'
                            type='text'
                            sx={{
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
                                input: { color: 'white' },
                                flexBasis: '50%',
                                backgroundColor: 'transparent'

                            }} />
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={personName2}
                            onChange={handleChangeSecondSelect}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}

                            sx={{
                                border: 'none',
                                outline: 'none',
                                flexBasis: '50%',
                                color: '#979E9C',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#9ca3af',
                                    border: 'none',
                                    borderLeft: '1px solid #5B5F5E '
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#5B5F5E'
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#5B5F5E',
                                },
                                '& .MuiSelect-icon': {
                                    color: 'white',
                                },
                            }}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName2, theme)}
                                >

                                    {name == 'USDT(TRC20)' ? (
                                        <div style={{ display: 'flex', justifyContent: 'start' }}><img src="/images/USDT.png" alt="" style={{ marginRight: '10px' }} /> {name}</div>
                                    ) : <div style={{ display: 'flex', justifyContent: 'start', }}><Typography sx={{ width: '25px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E33E23', borderRadius: '50%', color: 'white', marginRight: '10px', fontSize: '12px' }} >PM</Typography> {name}</div>}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                    <Typography sx={{ color: '#ABABAB', mt: '14px', fontWeight: '400', fontSize: '14px' }}>
                        Min : $100    Max: $4832
                    </Typography>
                </Card>
                <Button onClick={makeExchangeHandler} sx={{ mt: '27px' }}>Make Exchange</Button>
            </Stack>
        </Container>
    )
}
