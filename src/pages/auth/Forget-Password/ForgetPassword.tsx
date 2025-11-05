import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { InputAdornment, IconButton } from '@mui/material'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import type { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';
import type { User } from '../../../features/user/usersSlice';
import { useNavigate } from 'react-router-dom';



const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
})

const initialValues = {
  email: '',
  password: '',
  remember: false,
}

export default function Login() {
  const navigage = useNavigate()

  const users: User[] = useSelector((state: RootState) => state.user.users);


  const handleSubmit = (values: typeof initialValues, {

  }: any) => {

    console.log('salam-2')

    const userIndex = users.findIndex((item) => {
      return item.email == values.email
    })

    if (userIndex != -1 && users[userIndex].email == values.email) {

      navigage('/auth/change-password')
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
                  forget password
                </Typography>

                <Typography sx={{ fontSize: '16px', textAlign: 'left' }} color={'#fff'}>
                  Email:
                </Typography>
                <TextField
                  style={{ marginBottom: '46px' }}
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



                <Button style={{ marginBottom: '40px' }} type='submit' sx={{ color: '#fff', backgroundColor: '#1D8D94', '&:hover': { backgroundColor: '#147a81' } }}>
                  confirm
                </Button>


              </Stack>
            </Box>
          )}
        </Formik>
      </Card>
    </Stack>
  )
}
