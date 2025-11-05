import Login from './pages/auth/Login/Login'
import Register from './pages/auth/Register/Register'
import ForgetPassword from './pages/auth/Forget-Password/ForgetPassword'
import ChangePassword from './pages/auth/Change-Password/ChangePassword'
import SideBar from './components/sideBar/SideBar'
import Dashboard from './pages/userPanel/dashboard/Dashboard'
import Profile from './pages/userPanel/profile/Profile'
import PartnerProgram from './pages/userPanel/partner-program/PartnerProgram'
import  Home  from './pages/Home/Home'
import AboutUs from './pages/about-us/AboutUs'
import ContactUs from './pages/contact-us/ContactUs'
import FAQ from './pages/FAQ/FAQ'
import { Container } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout( {children} : MainLayoutProps ) {
    return (
        <Container maxWidth='lg'  >

            <div style={{ display: 'flex', marginTop: '35px' }}>
                <SideBar  />
                <main style={{ display: 'flex', flexGrow: '4' }} >
                    <SnackbarProvider maxSnack={3} anchorOrigin={{
                        vertical:'top',
                        horizontal: 'center'
                    }}>
                        {children}
                    </SnackbarProvider>
                </main>
            </div>
        </Container>
    )
}

const RoutesApp = [

    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/dashboard', element: <MainLayout><Dashboard /></MainLayout> },
    { path: '/profile', element: <MainLayout><Profile /></MainLayout> },
    { path: '/partner-program', element: <MainLayout><PartnerProgram /></MainLayout> },
    { path: '/auth/login', element: <Login /> },
    { path: '/auth/register', element: <Register /> },
    { path: '/auth/forget-password', element: <ForgetPassword /> },
    { path: '/auth/change-password', element: <ChangePassword /> },

]


export default RoutesApp