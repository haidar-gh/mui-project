import { Box, Button, DialogContent, DialogTitle, Grid, IconButton, Pagination, Stack, TextField, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import { rowsPartner } from '../../../mock-data/data';
import { useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from 'notistack'
import type { VariantType, } from 'notistack'
import { columnsPartnerProgram } from '../../../columns/columns';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));




export default function PartnerProgram() {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const pageSize = 4;
  const paginatedRows = rowsPartner.slice((page - 1) * pageSize, page * pageSize);

  const url = 'https://en.flashobmen.com/ref/acc0c4c8-c799-4216-a281-6d3d3c43a480'

  const { enqueueSnackbar } = useSnackbar()

 


  const drawerWidth = 270

  const copyHandler = async (variant: VariantType) => {
    try {
      await navigator.clipboard.writeText(url)
      enqueueSnackbar('The address was copied', { variant, autoHideDuration: 1000 })

    } catch {
      console.log('error in copy')
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }



  return (
    <Box
      component="main"
      sx={{
        height: '775px',
        marginLeft: '26px',
        flexGrow: 1,
        px: '18px',
        bgcolor: "#2A3342",
        color: "white",
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        borderRadius: '20px',
        padding: '39px 19px 61px 19px'
      }}
    >
      <Stack>

        <Typography
          sx={{
            color: '#ABABAB',
            fontSize: '20px',
            marginBottom: '16px',


          }}>
          Your Affiliate Link :
        </Typography>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            borderRadius: '10px',
            backgroundColor: '#242C39',
            pl: '26px',
          }}
        >
          <Typography
          >
            {url}
          </Typography>
          <Button
            startIcon={<ContentCopyIcon />}
            onClick={() => { copyHandler('success') }}
            sx={{
              width: '106px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#353F50',
              color: '#ABABAB',
              textTransform: 'capitalize'
            }}
          >
            copy
          </Button>
        </Stack>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Box
              sx={{
                backgroundColor: '#242C39',
                height: '112px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '10px',
                marginTop: '11px',
                padding: '22px 30px 22px 17px'

              }}
            >
              <Stack direction='row' >

                <Box sx={{
                  width: '67px',
                  height: '67px',
                  borderRadius: '50%',
                  backgroundColor: '#40A578',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '16px'
                }}>
                  <DiamondOutlinedIcon
                    sx={{
                      color: 'white',
                      width: '35px',
                      height: '35px',
                    }}
                  />
                </Box>
                <Stack>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      mb: '14px'
                    }}
                  >
                    Your Wallet Balance
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      color: '#40A578',
                      fontWeight: 'bold'
                    }}
                  >
                    320 USDT
                  </Typography>
                </Stack>
              </Stack>
              <Button
                onClick={handleClickOpen}
                sx={{
                  backgroundColor: '#40A578',
                  textTransform: 'capitalize',
                  color: 'white',
                  px: '32px',
                  py: '15px',
                }}
              >
                Withdraw
              </Button>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{ height: '420px', }}
                PaperProps={{
                  sx: {
                    position: 'absolute',
                    top: '50%',
                    left: 'calc(50% - 550)',
                    borderRadius: '20px',
                    backgroundColor: '#2A3342'
                  }
                }}
              >
                <DialogTitle sx={{ m: 0, px: '39px', py: '33px', color: 'white', width: '550px', textTransform: 'capitalize' }} id="customized-dialog-title">
                  withdraw
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={(theme) => ({
                    position: 'absolute',
                    right: "39px",
                    top: '33px',
                    color: theme.palette.grey[500],
                  })}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent sx={{ color: 'white' }} dividers>
                  <Stack sx={{ mx: '26px', }}>
                    <Typography gutterBottom sx={{ mb: '25px' }}>
                      Your Wallet Address (Tether TRC20)
                    </Typography>
                    <TextField sx={{ input: { color: '#fff' }, mb: '20px' }} placeholder='Address' />

                    <Button autoFocus onClick={handleClose} sx={{ mb: '34px', height: '57px', textTransform: 'capitalize', fontSize: '20px', fontWeight: '700'}}>
                      Confirm
                    </Button>
                  </Stack>
                </DialogContent>
              </BootstrapDialog>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                backgroundColor: '#242C39',
                height: '112px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '10px',
                marginTop: '11px',
                padding: '22px 30px 22px 17px'

              }}
            >
              <Stack direction='row' >

                <Box sx={{
                  width: '67px',
                  height: '67px',
                  borderRadius: '50%',
                  backgroundColor: '#F05A7E',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '19px'
                }}>
                  <DiamondOutlinedIcon
                    sx={{
                      color: 'white',
                      width: '35px',
                      height: '35px',
                    }}
                  />
                </Box>
                <Stack>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      mb: '14px'
                    }}
                  >
                    Your Friends
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      color: '#F05A7E',
                      fontWeight: 'bold'
                    }}
                  >
                    32
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: '11px'
          }}
        >
          Get  10  <DiamondOutlinedIcon sx={{ color: '#40A578', mx: '5px' }} />  For Each Invited User
        </Typography>

      </Stack>

      <Stack sx={{ mt: '44px' }}>

        <Typography sx={{ fontSize: '24px', fontWeight: '600', mb: '22px' }}>
          Your Impressions
        </Typography>

        <DataGrid
          disableColumnMenu
          disableRowSelectionOnClick
          disableColumnSelector
          disableDensitySelector
          disableVirtualization={false}
          hideFooter
          rows={paginatedRows}
          columns={columnsPartnerProgram}
          pageSizeOptions={[7]}
          sx={{
            backgroundColor: '#242C39',
            borderRadius: "10px",
            border: "solid 1px #313A4B",
            '& .MuiDataGrid-cell': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: '#242C39',
              borderBottom: '1px solid #313A4B',
            },
            "& .MuiDataGrid-cellContent": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "1px solid #313A4B",
              textAlign: "center",
              backgroundColor: "#1C2530",
              color: "#ABABAB",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              justifyContent: "center",
            },
            "& .MuiDataGrid-footerContainer": {
              display: "none",
              minHeight: 0,
              height: 0,
            },
            "& .MuiDataGrid-columnSeparator": { display: "none" },
            "& .MuiDataGrid-filler": { display: "none" },
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={Math.ceil(rowsPartner.length / pageSize)}
            page={page}
            onChange={(newPage: any) => setPage(newPage)}
            showFirstButton={false}
            showLastButton={false}
            siblingCount={1}
            boundaryCount={1}
            sx={{
              '& .MuiPaginationItem-root': {
                borderRadius: '50%',
                width: 36,
                height: 36,
                margin: '0 4px',
                border: '1px solid #313A4B',
                color: '#ABABAB',
                backgroundColor: 'transparent',
              },
              '& .MuiPaginationItem-previousNext': { display: 'none' },
              '& .Mui-selected': {
                backgroundColor: '#40A578 !important',
                color: '#fff !important',
                border: 'none',
              },
            }}
          />
        </Box>

      </Stack>

    </Box>
  )
}
