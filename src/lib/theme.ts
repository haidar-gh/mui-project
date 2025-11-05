import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    direction: "rtl",
    typography: {

    },
    palette: {
        background: {
            default: '#242C39'
        }

    },
    components: {
        ...({
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#242C39',
                        color: '#fff',
                        border: '1px solid #313A4B',
                        borderRadius: '12px',
                    },
                    columnHeaders: {
                        backgroundColor: '#313A4B',
                        color: '#ABABAB',
                        fontWeight: 'bold',
                        borderBottom: '1px solid #313A4B',
                    },
                    cell: {
                        color: '#fff',
                        borderBottom: '1px solid #313A4B',
                    },
                    footerContainer: {
                        backgroundColor: '#1C2530',
                        color: '#fff',
                        borderTop: '1px solid #313A4B',
                    },
                    row: {
                        '&:hover': {
                            backgroundColor: '#2E3745',
                        },
                    },
                },
            }
        } as any),
        MuiCard: {
            styleOverrides: {
                root: {
                    width: '560px',
                    minWidth: '560px',
                    maxWidth: '560px',
                    backgroundColor: '#2A3342',
                    boxShadow: '1px 1px 25px -15px rgba(0,0,0,0.8)',
                    borderRadius: '25px',
                    padding: '32px 25px 25px'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: '#1D8D94',
                    height: '60px',
                    borderRadius: '10px'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#fff'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    input: { color: '#fff', fontWeight: '700', },
                    height: '57px',
                    backgroundColor: '#242C39',
                    color: 'white',
                    borderRadius: '12px',
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { border: "none" },
                        "&:hover fieldset": { border: "none" }
                    }

                }

            }
        },
        


    }
})


export default theme