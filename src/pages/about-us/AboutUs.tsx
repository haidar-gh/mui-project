import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

export default function AboutUs() {
  return (
    <Container maxWidth='lg' >
      <Box sx={{
        width: '1px',
        height: '834px',
        borderRight: '1px solid #2E3E59',
        position: 'absolute',
        left: 'calc(50% - 1px)',
        top: '600px',
        zIndex: '-100'
      }} />
      <Box sx={{
        mt: '50px',
        width: '100%',
        backgroundColor: '#2A3342',
        borderRadius: '30px',
        padding: '33px 55px 80px'
      }}>
        <Stack direction='row' justifyContent='space-between'>
          <Stack flexBasis='50%'>
            <Typography sx={{
              width: '498px',
              fontSize: '48px',
              textAlign: 'left',
              background: 'linear-gradient(90deg, #40A578 10%, #99D9A6 30%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700',
            }}>
              We Are Here To Make Your Transaction Much Easier
            </Typography>
            <Typography sx={{
              mt: '20px',
              width: '488px',
              color: '#ABABAB',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '42px'
            }}>
              At Pmusdt.com, We Believe That Everyone Should Have The Freedom To Earn, Hold, Spend, Share And Give Their Money - No Matter Who You Are Or Where You Come From.
            </Typography>
          </Stack>
          <Box sx={{
            display: 'flex',
            flexBasis: '50%',
            position: 'relative'
          }}>
            <img src="/images/about-us.png" style={{ position: 'absolute', top: '-20px', width: '535px', height: '535px', borderRadius: '50%', backgroundColor: '#242C39' }} alt="" />
          </Box>
        </Stack>
      </Box>
      <Stack direction='column' alignItems='center' sx={{ mt: '80px' }}>
        <Box sx={{
          width: '657px',
          height: '318px',
          borderRadius: '30px',
          border: '1px solid #2E3E59 ',
          padding: '28px 48px 20px',
          backgroundColor: '#242C39'
        }}>
          <Stack>
            <Typography sx={{
              textTransform: 'capitalize',
              fontSize: '32px',
              color: '#fff',
              fontWeight: '700',
              lineHeight: '96px'

            }}>
              Our mission
            </Typography>
            <Typography sx={{
              textTransform: 'capitalize',
              color: '#ABABAB',
              fontSize: '18px',
              lineHeight: '42px',
              mb: '40px'

            }}>
              Today, pmusdt.com is the world’s leading blockchain ecosystem, with a product suite that includes the largest digital asset exchange. Our mission is to be the infrastructure provider for crypto in tomorrow’s world.
            </Typography>
          </Stack>
        </Box>
        <Box sx={{
          width: '657px',
          height: '318px',
          borderRadius: '30px',
          border: '1px solid #2E3E59 ',
          padding: '28px 48px 20px',
          mt: '55px',
          backgroundColor: '#242C39'
        }}>
          <Stack>
            <Typography sx={{
              textTransform: 'capitalize',
              fontSize: '32px',
              color: '#fff',
              fontWeight: '700',
              lineHeight: '96px'

            }}>
              Our Vision
            </Typography>
            <Typography sx={{
              textTransform: 'capitalize',
              color: '#ABABAB',
              fontSize: '18px',
              lineHeight: '42px',
              mb: '40px'

            }}>
              Our vision is to increase the freedom of money globally. We believe that by spreading this freedom, we can significantly improve lives around the world.
            </Typography>
          </Stack>
        </Box>
        <Box sx={{
          width: '657px',
          height: '318px',
          borderRadius: '30px',
          border: '1px solid #2E3E59 ',
          padding: '28px 48px 20px',
          mt: '55px',
          mb: '117pxOur mission',
          backgroundColor: '#242C39'
        }}>
          <Stack>
            <Typography sx={{
              textTransform: 'capitalize',
              fontSize: '32px',
              color: '#fff',
              fontWeight: '700',
              lineHeight: '96px'

            }}>
              Our values
            </Typography>
            <Typography sx={{
              textTransform: 'capitalize',
              color: '#ABABAB',
              fontSize: '18px',
              lineHeight: '42px',
              mb: '40px'

            }}>
              pmusdt.com Core Values guide our behavior, decisions, and action, enabling unified collaboration across our diverse, international teams.
            </Typography>
          </Stack>
        </Box>

      </Stack>



    </Container>
  )
}
