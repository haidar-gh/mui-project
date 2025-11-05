import { Box, IconButton, InputAdornment, TextField, Typography,  Pagination } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { rowsDashboard } from "../../../mock-data/data";
import { useState} from "react";
import { columnsDashboard } from "../../../columns/columns";

export default function Dashboard() {
    const drawerWidth = 270;
    const [page, setPage] = useState(1);
    const pageSize = 7;
    const paginatedRows = rowsDashboard.slice((page - 1) * pageSize, page * pageSize);

    

    return (
        <Box
            component="main"
            sx={{
                height: '700px',
                marginLeft: '26px',
                flexGrow: 1,
                px: '18px',
                bgcolor: "#2A3342",
                color: "white",
                width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
                borderRadius: '20px',
            }}
        >
            <Box display="flex" alignItems="center" mt="20px" width={'100%'} >
                <TextField
                    fullWidth
                    placeholder="Search..."
                    variant="outlined"
                    sx={{
                        input: { color: 'white' },
                        label: { color: 'white' },
                        m: 0,
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { border: "none" },
                            "&:hover fieldset": { border: "none" }
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconButton sx={{ color: 'white' }}>
                                    <SearchOutlinedIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>

            <Typography sx={{ fontSize: '24px', fontWeight: '800', mt: '41px', mb: 2 }}>
                Latest Transactions
            </Typography>

            <Box sx={{ width: '100%', backgroundColor: '#2A3342', borderRadius: 2 }}>
                <DataGrid
                    disableColumnMenu
                    disableRowSelectionOnClick
                    disableColumnSelector
                    disableDensitySelector
                    disableVirtualization={false}
                    hideFooter
                    rows={paginatedRows}
                    columns={columnsDashboard}
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
                        count={Math.ceil(rowsDashboard.length / pageSize)}
                        page={page}
                        onChange={( newPage:any ) => setPage(newPage) }
                        showFirstButton={false}
                        showLastButton={false}
                        siblingCount={0}
                        boundaryCount={0}
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
            </Box>
        </Box>
    );
}
