import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav nav-tabs' style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'space-around',
            backgroundColor: '#f0f0f0',
            padding: '10px 0',
            borderBottom: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',}}>
            <li className='nav-item'>
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/Portfolio'
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Contact'
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Resume'
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;