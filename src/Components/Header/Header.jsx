
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between border-b-2 text-2xl p-3'>
            <div className='px-4'>
                <NavLink to="/">Home</NavLink>
            </div>
            <div className='space-x-4'>
                
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact" >Contact</NavLink>
                <NavLink to="/grandpa">Grandpa</NavLink>
                
            </div>
        </div>
    );
}; 

export default Header;