import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';
import NotFound from '../errors/NotFound';

function Layout() {
    const location = useLocation();
    if (location.pathname === '/NotFound') {
        return (
            <>
                <NotFound />
            </>
        );
    }
    return(
        <>
            <Navbar />
                <main>
                    <Outlet/>
                </main>
            <Footer />
        </>
    )
}
export default Layout;