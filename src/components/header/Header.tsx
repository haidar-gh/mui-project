import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, useTheme, useMediaQuery, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import type { RootState } from '../../app/store';
import { useSelector, } from 'react-redux';
import type { User } from '../../features/user/usersSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const users: User[] = useSelector((state: RootState) => state.user.users);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const location = useLocation();
  const navigate = useNavigate()

  const [acive, setAcive] = useState('Home')
  const [userName, setUserName] = useState('Login / Register')


  useEffect (() => {
      if(location.pathname == '/') {
        setAcive('Home')
      }else if(location.pathname == '/about-us') {
        setAcive('About Us')
      }else if (location.pathname == '/contact-us') {
        setAcive('Contact Us')
      }else if (location.pathname == '/blog') {
        setAcive('Blog')
      }else if (location.pathname == '/faq') {
        setAcive('FAQ')

      }
  },[location.pathname])

  useEffect(() => {
    
    
    let userIndex = users.findIndex((item) => {
      return item.islogin == true
    })
    let pageName = localStorage.getItem('page')
    if (pageName === 'Home') {
      navigate('/')
      setAcive('Home')
    } else if (pageName == 'About Us') {
      navigate('/about-us')
      setAcive('About Us')
    } else if (pageName == 'Contact Us') {
      navigate('/contact-us')
      setAcive('Contact Us')
    } else if (pageName == 'FAQ') {
      navigate('/faq')
      setAcive('FAQ')
    }
    if (userIndex !== -1) {
      setUserName(users[userIndex].fullname)

      location.state?.refresh
    } else if (userIndex == -1) {
      setUserName('Login / Register')
    }

  }, [location.state?.refresh])

  const menuClickHandler = (item: string) => {
    setAcive(item)
    localStorage.setItem('page', item)
  }

  const linkLoginClcikHandler = () => {
    if(userName === 'Login / Register'){
      setAcive('login')
    }else{
      setAcive('dashboard')
    }
  }


  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#242C39',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingY: 1,
      }}
    >
      <Container maxWidth="lg" >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* --- Logo --- */}
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              component="img"
              src="/images/header-logo.png" // مسیر لوگو
              alt="PMUSDT Logo"
              sx={{ width: 35, height: 35 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: '#2ED4A7',
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              PMUSDT.COM
            </Typography>
          </Box>

          {/* --- Menu (Desktop) --- */}
          {!isMobile && (
            <Box display="flex" alignItems="center" gap={4}>
              {['Home', 'About Us', 'Contact Us', 'Blog', 'FAQ'].map((item) => (
                <div key={item}>
                  <Link
                    key={item}
                    className='header-link'
                    onClick={() => menuClickHandler(item)}
                    to={`${item == 'Home' ? '/' : item == 'About Us' ? '/about-us' : item == 'Contact Us' ? '/contact-us' : item == 'Blog' ? '/blog' : '/faq'}`}
                    style={{
                      fontSize: '0.95rem',
                    }}
                  >
                    <Box key={item} sx={{
                      display: `${item == acive ? 'block' : 'none'}`,
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#40A578',
                      borderRadius: '50%',
                      position: 'absolute',
                      left: '-15px'
                    }} />
                    {item}
                  </Link>
                </div>
              ))}
            </Box>
          )}

          {/* --- Login/Register --- */}

          {!isMobile ? (
            <Link
              className='header-link'
              onClick={linkLoginClcikHandler}
              to={userName == 'Login / Register' ? '/auth/login ' : '/dashboard'}
            >
              <AccountCircleOutlinedIcon sx={{
                width: '24px',
                height: '24px',
                marginRight: '13px'
              }} />
              {userName}
            </Link>
          ) : (
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
