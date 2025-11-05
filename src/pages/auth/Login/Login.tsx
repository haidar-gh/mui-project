import { Visibility, VisibilityOff, } from '@mui/icons-material'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { InputAdornment, IconButton } from '@mui/material'
import { Box, Button, Card, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import type { RootState } from '../../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../features/user/usersSlice';
import type { User } from '../../../features/user/usersSlice';
import { Link, useNavigate } from 'react-router-dom';



const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().optional(),
})

const initialValues = {
  email: 'haidar@gmail.com',
  password: '12345678',
  remember: true,
}

export default function Login() {
  const navigage = useNavigate()

  const users: User[] = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }



  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {


    let userIndex = users.findIndex((item) => {
      return item.email == values.email
    })

    if (userIndex != -1 && users[userIndex].password == values.password) {
      navigage('/dashboard',{ state: { refresh: Date.now() } })
      localStorage.setItem('page', 'Dashboard')
      dispatch(loginUser(users[userIndex].email)) 
    } else {
      resetForm()
    }

  }

  return (
    <Stack justifyContent='center' alignItems='center' height={'100vh'} width={'99vw'}>
      <Card sx={{ p: 4, backgroundColor: '#1A202C' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(loginSchema)}
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
                  Login
                </Typography>

                <Typography sx={{ fontSize: '16px', textAlign: 'left' }} color={'#fff'}>
                  Email:
                </Typography>
                <TextField
                  
                  name='email'
                  type='email'
                  placeholder='Please enter your Email'
                  value={values.email}
                  onChange={handleChange}
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

                <Typography sx={{ fontSize: '16px', textAlign: 'left' }} color={'#fff'}>
                  Password:
                </Typography>
                <TextField
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  autoComplete='new-password'
                  placeholder='Please enter your password'
                  value={values.password}
                  onChange={handleChange}
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

                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='remember'
                        checked={values.remember}
                        onChange={handleChange}
                        sx={{ color: 'white' }}
                      />
                    }
                    label={<Typography color='white'>Keep me logged in</Typography>}
                  />

                  <Link
                    to='/auth/forget-password'
                    style={{
                      color: '#1D8D94',
                      fontWeight: '700',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Forgot your password?
                  </Link>
                </Stack>

                <Button type='submit' sx={{ color: '#fff', backgroundColor: '#1D8D94', '&:hover': { backgroundColor: '#147a81' } }}>
                  Login
                </Button>

                <Box sx={{ textAlign: 'center' }} marginTop={4}>
                  <Typography sx={{ display: 'inline', color: '#ABABAB', fontWeight: '700' }}>
                    Don’t have an account?
                  </Typography>
                  <Link
                    to='/auth/register'
                    style={{
                      display: 'inline',
                      color: '#1D8D94',
                      fontWeight: '700',
                      cursor: 'pointer',
                      marginLeft: '4px',
                    }}
                  >
                    Register
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
