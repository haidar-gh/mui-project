import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  TextareaAutosize,
  TextField,
  Typography
} from '@mui/material'
import { z } from 'zod'
import { Formik, Form } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'

const registerSchema = z.object({
  subject: z.string().max(30, 'A maximum of 30 characters can be used'),
  email: z.string().email('Invalid email address'),
  text: z.string().max(450, 'A maximum of 450 characters can be used'),
})

const initialValues = {
  email: '',
  subject: '',
  text: '',
}

export default function ContactUs() {
  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    console.log(values)
    resetForm()
  }

  return (
    <Container maxWidth='lg'>
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(registerSchema)}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Box
            component={Form}
            sx={{
              height: '800px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                p: 4,
                backgroundColor: '#2A3342',
                borderRadius: '20px',
                width: '500px',
              }}
            >
              <Stack spacing={2}>
                <Typography
                  sx={{
                    fontSize: '32px',
                    textAlign: 'left',
                    background:
                      'linear-gradient(90deg, #40A578 10%, #99D9A6 30%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700',
                  }}
                >
                  Contact Us
                </Typography>

                <Typography
                  sx={{
                    color: '#ABABAB',
                    fontSize: '16px',
                    fontWeight: '700',
                    mt: '10px',
                  }}
                >
                  reach out and we will get in touch within 24 hours.
                </Typography>

                {/* Email */}
                <Typography
                  sx={{
                    color: '#ABABAB',
                    fontSize: '16px',
                    fontWeight: '700',
                    mt: '35px',
                  }}
                >
                  Email:
                </Typography>
                <TextField
                  name='email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Please Enter Your Email'
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    mt: '10px',
                    input: { color: '#fff' },
                  }}
                />

                {/* Subject */}
                <Typography
                  sx={{
                    color: '#ABABAB',
                    fontSize: '16px',
                    fontWeight: '700',
                    mt: '19px',
                  }}
                >
                  Subject:
                </Typography>
                <TextField
                  name='subject'
                  type='text'
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Please Enter Your Subject'
                  error={touched.subject && Boolean(errors.subject)}
                  helperText={touched.subject && errors.subject}
                  sx={{
                    mt: '10px',
                    input: { color: '#fff' },
                  }}
                />

                {/* Message */}
                <Typography
                  sx={{
                    color: '#ABABAB',
                    fontSize: '16px',
                    fontWeight: '700',
                    mt: '21px',
                  }}
                >
                  Message text:
                </Typography>
                <TextareaAutosize
                  name='text'
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  minRows={4}
                  placeholder='Please Enter Your Text'
                  style={{
                    fontWeight: '900',
                    width: '100%',
                    backgroundColor: '#242C39',
                    color: '#fff',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    border: 'none',
                    resize: 'none',
                    outline: 'none',
                    marginBottom: '12px',
                    
                  }}
                />
                {touched.text && errors.text && (
                  <Typography sx={{ color: 'red', fontSize: '14px' }}>
                    {errors.text}
                  </Typography>
                )}

                <Button
                  type='submit'
                  variant='contained'
                  sx={{
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    width: '100%',
                    mt: '23px',
                    mb: '20px',
                    bgcolor: '#1D8D94',
                  }}
                >
                  Send
                </Button>
              </Stack>
            </Card>
          </Box>
        )}
      </Formik>
    </Container>
  )
}
