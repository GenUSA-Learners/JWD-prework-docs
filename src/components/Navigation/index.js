import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation () {
	return (
		<>
			<div className='nav'>
                <Link to='/' className='nav-link'>
                    {/* homepage */}
                    Home
                </Link>
                <Link to='/Mod-01' className='nav-link'>
                    Module 01
                </Link>
                <Link to='/Mod-02' className='nav-link'>
                    Module 02
                </Link>
                <Link to='/Mod-03' className='nav-link'>
                    Module 03
                </Link>
                <Link to='/Mod-04' className='nav-link'>
                    Module 04
                </Link>
                <Link to='/Mod-05' className='nav-link'>
                    Module 05
                </Link>
                <Link to='/Mod-06' className='nav-link'>
                    Module 06
                </Link>
				<Link to='/Mod-07' className='nav-link'>
                    Module 07
                </Link>
				<Link to='/Mod-08' className='nav-link'>
                    Module 08
                </Link>
				<Link to='/Mod-09' className='nav-link'>
                    Module 09
                </Link>
				<Link to='/Mod-10' className='nav-link'>
                    Module 10
                </Link>
            </div>
		</>
	);
}
