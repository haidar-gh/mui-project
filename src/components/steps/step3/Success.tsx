import { Box, Stack, TextField, Typography } from "@mui/material";
import { inputSuccesData } from "../../../mock-data/data";

export default function Success() {
  return (
    <Box
      sx={{
        mt: '67px'
      }}
    >

      <Stack>


        <Stack direction='row' justifyContent='center' alignItems='center' gap={2}>
          <img style={{ width: "41px", height: '41px', }} src="/images/Vector.svg" alt="" />
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#40A578',

            }}
          >
            Payment Success !
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#ABABAB',
            textAlign: 'center',
            lineHeight: '40px',
            mt: '25px',
          }}
        >
          The transaction was successfully completed and the amount of 100 Tether was deposited to this address
        </Typography>

        <Stack>
          {inputSuccesData.map((item) => {
            return <Stack direction='row' key={item.id} justifyContent='space-between' sx={{ mt: item.id == '3' ? '25px' : '18px' }}>
              <Typography
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#ABABAB',
                }}
              >
                {item.labelTitle}
              </Typography>
              <TextField
                value={item.inputValue}
                sx={{
                  width: '791px'
                }}
              />
            </Stack>
          })}

        </Stack>


      </Stack>


    </Box>
  )
}
