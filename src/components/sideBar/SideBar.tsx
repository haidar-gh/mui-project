import {
    Box,
    Button,
    Stack,

} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import type { User } from '../../features/user/usersSlice';
import { logoutUser } from '../../features/user/usersSlice';
import DashboardIcon from '/public/images/Dashboard-icon.svg?react';
import ProfileIcon from '/public/images/profile-icon.svg?react';
import PartnerProgramIcon from '/public/images/partner-program-icon.svg?react';
import ExitIcon from '/public/images/exit-icon.svg?react'

interface MenuLinks {
    id: string;
    title: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    path: string;
}


export default function SideBar() {
    const users: User[] = useSelector((state: RootState) => state.user.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const menuArray: MenuLinks[] = [
        { title: 'dashboard', path: '/dashboard', id: '1', icon: DashboardIcon },
        { title: 'profile', path: '/profile', id: '2', icon: ProfileIcon },
        { title: 'partner program', path: '/partner-program', id: '3', icon: PartnerProgramIcon },
    ];

    const [activeLink, setActiveLink] = useState('dashboard')

    const drawerWidth = 270;


    const ChaneLinkHandler = (item: MenuLinks) => {
        setActiveLink(item.title)
        console.log(item)
        navigate(item.path)
    }

    const exitAccountHandler = () => {
        const indexUserLogin = users.findIndex((index) => {
            return index.islogin === true
        })
        navigate('/auth/login', { state: { refresh: Date.now() } })
        localStorage.setItem('page', "Login")
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
                    const Icon = item.icon;
                    return (
                        <Button
                            key={item.id}
                            sx={{
                                backgroundColor: 'transparent',
                                color: activeLink === item.title ? 'white' : '#ABABAB',
                                display: 'flex',
                                textTransform: 'capitalize',
                                justifyContent: 'flex-start',
                                gap: 1,
                            }}
                            onClick={() => ChaneLinkHandler(item)}
                            startIcon={
                                <Icon
                                    width={20}
                                    height={20}
                                />
                            }
                        >
                            {item.title}
                        </Button>
                    );
                })}

                <Button
                    onClick={exitAccountHandler}
                    sx={{ backgroundColor: 'transparent', color: '#ABABAB' }}
                    startIcon={<ExitIcon style={{ width: '20px', height: '20px', color: '#ABABAB' }} />}>
                    Exit
                </Button>

            </Stack>
        </Box>
    )
}
