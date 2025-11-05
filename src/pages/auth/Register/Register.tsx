import { Visibility, VisibilityOff, } from '@mui/icons-material'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { InputAdornment, IconButton } from '@mui/material'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import { z } from 'zod'
import type { AppDispatch } from '../../../app/store'
import { addUser } from '../../../features/user/usersSlice'
import { useDispatch } from 'react-redux'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Link , useNavigate} from 'react-router-dom'


const registerSchema = z.object({
  name: z.string().regex(/^[a-z]+$/, 'salam'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'For the password, it must be 8 characters long ')

})

const initialValues = {
  email: '',
  password: '',
  name: '',
  remember: false,

}

export default function Login() {
  const [pass, setPass] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }



  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    console.log('mmd')

    dispatch(addUser({
      fullname: values.name,
      email: values.email,
      password: values.password,
      islogin: true 
    }));


    navigate('/',{ state: { refresh: Date.now() } })

  }
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFieldValue: (field: string, value: string) => void) => {
    const value = e.target.value

    setFieldValue('name', value)
    setFullname(value)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFieldValue: (field: string, value: string) => void) => {
    const value = e.target.value

    setFieldValue('email', value)
    setEmail(value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFieldValue: (field: string, value: string) => void) => {
    const value = e.target.value

    // ست کردن مقدار در Formik
    setFieldValue('password', value)
    setPassword(value)

    const onlyNumbers = /^[0-9]+$/
    const onlyLowercase = /^[a-z]+$/
    const onlyUppercase = /^[A-Z]+$/


    const numberAndLower = /^(?=.*[0-9])(?=.*[a-z])[a-z0-9]+$/
    const lowerAndUpper = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/
    const numberAndUpper = /^(?=.*[0-9])(?=.*[A-Z])[A-Z0-9]+$/

    const numberLowerUpper = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]+$/

    if (onlyNumbers.test(value) || onlyLowercase.test(value) || onlyUppercase.test(value)) {
      setPass('very-week')
    } else if (numberAndLower.test(value) || lowerAndUpper.test(value) || numberAndUpper.test(value)) {
      setPass('week')
    } else if (numberLowerUpper.test(value)) {
      setPass('strong')
    }



  }

  return (
    <Stack justifyContent='center' alignItems='center' height={'100vh'} width={'99vw'}>
      <Card sx={{ p: 4, backgroundColor: '#1A202C' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(registerSchema)}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, values, setFieldValue }) => (
            <Box component={Form} noValidate>
              <Stack direction='column' justifyContent='center' spacing={2}>

                <Typography
                  sx={{
                    fontSize: '36px',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #1D8D94 0%, #91D2A3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700',
                  }}
                >
                  Register
                </Typography>

                <Typography sx={{ fontSize: '16px', textAlign: 'left' }} color={'#fff'}>
                  name:
                </Typography>
                <TextField
                  name='name'
                  type='text'
                  placeholder='Please enter your Name'
                  value={values.name}
                  onChange={(e) => handleNameChange(e, setFieldValue)}
                  error={touched.name && Boolean(errors.name)}
                  helperText={errors.name}
                  sx={{
                    input: { color: 'white' },
                    label: { color: 'white' },
                    '& input:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 1000px #242C39 inset !important',
                      WebkitTextFillColor: 'white !important',
                    },
                  }}

                />
                <Typography sx={{ fontSize: '16px', textAlign: 'left' }} color={'#fff'}>
                  Email:
                </Typography>
                <TextField
                  name='email'
                  type='email'
                  placeholder='Please enter your Email'
                  value={values.email}
                  onChange={(e) => handleEmailChange(e, setFieldValue)}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    input: { color: 'white' },
                    label: { color: 'white' },
                    '& input:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 1000px #242C39 inset !important',
                      WebkitTextFillColor: 'white !important',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        {errors.email && touched.email ? (
                          <IconButton onClick={() => { setFieldValue('email', '') }} sx={{ color: 'red' }} >
                            <HighlightOffOutlinedIcon />
                          </IconButton>
                        ) : (
                          <IconButton sx={{ color: 'white' }} >
                            {values.email !== '' ? (
                              <CheckCircleOutlinedIcon />
                            ) : null}
                          </IconButton>
                        )}
                      </InputAdornment>
                    )
                  }}
                />
                <Stack direction='row' justifyContent='space-between'>
                  <Typography sx={{ fontSize: '16px', textAlign: 'left' }} color={'#fff'}>
                    Password:
                  </Typography>
                  {pass == 'very-week' ? (
                    <Typography sx={{ color: '#F66066' }}>very week</Typography>
                  ) : pass == 'week' ? (
                    <Typography sx={{ color: '#FF6600' }}>week</Typography>
                  ) : pass == 'strong' ? (
                    <Typography sx={{ color: '#6EC207' }}>strong</Typography>
                  ) : null}
                </Stack>
                <TextField
                  style={{ marginBottom: '16px' }}
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  autoComplete='new-password'
                  placeholder='Please enter your password'
                  value={values.password}
                  onChange={(e) => handlePasswordChange(e, setFieldValue)}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    input: { color: 'white' },
                    label: { color: 'white' },
                    '& input:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 1000px #242C39 inset !important',
                      WebkitTextFillColor: 'white !important',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        {errors.password && touched.password ? (
                          <IconButton onClick={handleClickShowPassword} sx={{ color: 'red' }} >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        ) : (
                          <IconButton onClick={handleClickShowPassword} sx={{ color: 'white' }} >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        )}
                      </InputAdornment>
                    )
                  }}
                />

                <Button type='submit' sx={{ color: '#fff', backgroundColor: '#1D8D94', '&:hover': { backgroundColor: '#147a81' } }}>
                  Login
                </Button>

                <Box sx={{ textAlign: 'center' }} marginTop={4}>
                  <Typography sx={{ display: 'inline', color: '#ABABAB', fontWeight: '700' }}>
                    Don’t have an account?
                  </Typography>
                  <Link
                    to='/auth/login'
                    style={{
                      display: 'inline',
                      color: '#1D8D94',
                      fontWeight: '700',
                      cursor: 'pointer',
                      marginLeft: '4px',
                    }}
                  >
                    Login
                  </Link>
                </Box>
              </Stack>
            </Box>
          )}
        </Formik>
      </Card>
    </Stack>
  )
}
