import type { GridColDef } from "@mui/x-data-grid";
import { Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const columnsDashboard: GridColDef[] = [
    {
        field: 'from',
        headerName: 'From',
        flex: 1,
        sortable: false,
        renderCell: (params) => (
            <Box display="flex" alignItems="center" gap={1}>
                <img src='/images/USDT.png' style={{ width: 24, height: 24 }} />
                <span>{params.value}</span>
            </Box>
        ),
    },
    {
        field: 'to',
        headerName: 'To',
        flex: 1,
        sortable: false,
        renderCell: (params) => (
            <Box display="flex" alignItems="center" gap={1}>
                <span style={{ width: '25px', height: '25px', backgroundColor: '#E33E23', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>PM</span>
                <span>{params.value}</span>
            </Box>
        ),
    },
    { field: 'amount', headerName: 'Amount', flex: 1, sortable: false, },
    { field: 'received', headerName: 'Received', flex: 1, sortable: false, },
    { field: 'date', headerName: 'Date', flex: 1, sortable: false, },
    {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        sortable: false,
        renderCell: (params) => {
            const status = params.value;
            const color =
                status === 'Successful'
                    ? '#40A578'
                    : status === 'Unsuccessful'
                        ? '#E57373'
                        : '#F5B041';
            return (
                <Chip
                    label={status}
                    sx={{
                        width: '93px',
                        backgroundColor: color,
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        px: 0,
                        fontSize: '11px'
                    }}
                />
            );
        },
    },
    {
        field: 'link',
        headerName: 'Link',
        flex: 1,
        sortable: false,
        renderCell: () => (
            <Link
                to='/'
                style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
            >
                See More
            </Link>
        ),
    },
];

const columnsPartnerProgram: GridColDef[] = [

    {
        field: 'from', headerName: 'Amount', flex: 1, sortable: false,
        renderCell: (params) => (
            <Box display="flex" alignItems="center" gap={1}>
                <img src='/images/USDT.png' style={{ width: 24, height: 24 }} />
                <span>{params.value}</span>
            </Box>
        ),
    },
    { field: 'to', headerName: 'To', flex: 2, sortable: false, },
    { field: 'date', headerName: 'Date', flex: 1, sortable: false, },
    {
        field: 'status', headerName: 'Status', flex: 1, sortable: false,
        renderCell: (params) => {
            const status = params.value;
            const color =
                status === 'Successful'
                    ? '#40A578'
                    : status === 'Unsuccessful'
                        ? '#E57373'
                        : '#F5B041';
            return (
                <Chip
                    label={status}
                    sx={{
                        width: '93px',
                        backgroundColor: color,
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        px: 0,
                        fontSize: '11px'
                    }}
                />
            );
        },
    },

];

export { columnsDashboard, columnsPartnerProgram }