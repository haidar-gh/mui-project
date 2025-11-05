import {
    Box,
    Button,
    Stack,

} from '@mui/material'
import {
    Dashboard,
    Person,
    Group,
    ExitToApp,
} from '@mui/icons-material'
import type { SvgIconComponent } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import type { RootState } from '../../app/store';
import type { User } from '../../features/user/usersSlice';
import { logoutUser } from '../../features/user/usersSlice'; 

interface MenuLinks {
    id: string,
    title: string,
    icon_name: SvgIconComponent,
    path: string,
}


export default function SideBar() {
    const users: User[] = useSelector((state:RootState) => state.user.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const menuArray: MenuLinks[] = [
        {title:'Dashboard', icon_name: Dashboard , path: '/dashboard', id: '1'},
        {title:'profile', icon_name: Person , path: '/profile', id: '2'},
        {title:'partner program', icon_name: Group , path: '/partner-program', id: '3'}
    ]
    
    const [activeLink, setActiveLink] = useState('Dashboard')

    const drawerWidth = 270;


    const ChaneLinkHandler = (item: MenuLinks) => {
        setActiveLink(item.title)
        navigate(item.path)
    }

    const exitAccountHandler = ( ) => {
        const indexUserLogin = users.findIndex((index) => {
            return index.islogin === true
        })
        navigate('/auth/login' ,{ state: { refresh: Date.now() } })
        localStorage.setItem('page',"Login")
        dispatch(logoutUser(users[indexUserLogin].email)) 
    }

    return (
        <Box
            sx={{
                paddingY: '40px',
                paddingLeft: '32px',
                paddingRight: '42px',
                width: drawerWidth,
                height: '294px',
                flexShrink: 0,
                backgroundColor: '#2A3342',
                borderRadius: '20px',
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: '',
                    color: 'white',
                    borderRight: '1px solid #1F2736',
                },
            }}
        >

            <Stack direction='column' alignItems={'start'}>
                {menuArray.map((item) => {
                    const Icon = item.icon_name
                    return (
                        <Button
                            key={item.id}
                            sx={{ backgroundColor: 'transparent', color: 'white' }}
                            startIcon={<Icon sx={{color : activeLink == item.title ? 'white' : '#ABABAB' }}/>}
                            onClick={() => ChaneLinkHandler(item)}
                            >
                            <Link to={item.path}   style={{ color: activeLink == item.title ? 'white' : '#ABABAB'  , textDecoration: 'none'  }}>{item.title}</Link>
                        </Button>
                    )

                })}

                <Button
                    onClick={exitAccountHandler}
                    sx={{ backgroundColor: 'transparent', color: '#ABABAB' }}
                    startIcon={<ExitToApp />}>
                    Exit
                </Button>

            </Stack>
        </Box>
    )
}
