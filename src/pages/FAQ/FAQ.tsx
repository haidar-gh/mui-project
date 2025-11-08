import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, IconButton, InputAdornment, Stack, TextField, Typography, type AccordionProps } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { FAQArray } from '../../mock-data/data';


const StyledAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ }) => ({
  border: '1px solid #2E3E59',
  borderRadius: '30px',
  backgroundColor: '#242C39',
  overflow: 'hidden',
  marginTop: '26px',
  '&:before': {
    display: 'none',
  },
}));

export default function FAQ() {
  return (
    <Container maxWidth='lg'>

      <Box sx={{ mt: '40px' }}>
        <Box sx={{
          width: '100%',
          backgroundColor: '#2A3342',
          padding: '59px 96px 64px',
          borderRadius: '30px'

        }}>
          <Stack >
            <Typography sx={{
              fontSize: '48px',
              textAlign: 'center',
              background: 'linear-gradient(90deg, #40A578 35%, #99D9A6 50%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700',
              lineHeight: '77px',
              mb: '39px',
            }}>
              Help Center
            </Typography>
            <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2} >
              <TextField placeholder='Find Your Desired Question' sx={{
                input: { color: '#fff', pl: '0px' },
                display: 'flex',
                flexGrow: '1',
                width: '173px',
                height: '57px',
                border: 'none',
              }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='end' sx={{ ml: '0px', padding: '8px 8px 8px 0px' }}>

                      <IconButton sx={{ color: 'white', marginLeft: '0px' }} >

                        <img src='/images/Search-icon.svg' />

                      </IconButton>

                    </InputAdornment>
                  )
                }}
              />

              <Button sx={{
                width: '163px',
                fontSize: '22px',
                height: '60px',
                textTransform: 'capitalize',
              }}>
                Search
              </Button>
            </Stack>
            <Stack direction='row' justifyContent='space-between' gap={1} sx={{ mt: '26px' }}>
              <Button sx={{ width: '174px', height: '57px', backgroundColor: 'transparent', border: '1px solid #596B89', px: '0', color: '#596B89', fontSize: '16px', textTransform: 'capitalize' }}> # Verify Account</Button>
              <Button sx={{ width: '174px', height: '57px', backgroundColor: 'transparent', border: '1px solid #596B89', px: '0', color: '#596B89', fontSize: '16px', textTransform: 'capitalize' }}> # Change Email</Button>
              <Button sx={{ width: '174px', height: '57px', backgroundColor: 'transparent', border: '1px solid #596B89', px: '0', color: '#596B89', fontSize: '16px', textTransform: 'capitalize' }}> # Forget Password</Button>
              <Button sx={{ width: '174px', height: '57px', backgroundColor: 'transparent', border: '1px solid #596B89', px: '0', color: '#596B89', fontSize: '16px', textTransform: 'capitalize' }}> # Payment Problems</Button>
              <Button sx={{ width: '174px', height: '57px', backgroundColor: 'transparent', border: '1px solid #596B89', px: '0', color: '#596B89', fontSize: '16px', textTransform: 'capitalize' }}> # How To Trade</Button>
            </Stack>
          </Stack>
        </Box>
        {FAQArray.map((item) => {
          return (
            <StyledAccordion key={item.id}>
              <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{ color: 'white' }} />}>
                <Stack direction='row' alignItems='center' gap={1}>
                  <PlayArrowIcon sx={{ color: 'white' }} />
                  <Typography sx={{ color: 'white', py: '26px', textTransform: 'capitalize', fontWeight: '700' }}>
                    {item.question}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#ABABAB', pl: '30px', lineHeight: '32px', textTransform: 'capitalize', fontWeight: '700' }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          )
        })}

      </Box>
    </Container>
  )
}
