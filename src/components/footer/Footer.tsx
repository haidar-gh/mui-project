import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Container maxWidth='lg'>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '52px',
                borderTop: '1px solid #2E3E59',
                mt: '48px'
            }}>
                <Typography sx={{
                    color: '#ABABAB',
                    fontSize: '12px',
                    fontWeight: '300',
                }}>

                    Copyright © 2024 repayment. All rights reserved.
                </Typography>
            </Box>
        </Container>
    )
}
