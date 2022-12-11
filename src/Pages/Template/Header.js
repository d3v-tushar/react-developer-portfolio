import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	//const activeRoute = "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-cyan-400 dark:border-cyan-400";
	const NavLinkCSS = "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
  	const active = "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-cyan-400 dark:border-cyan-400";
    return (
        <div className='dark:bg-gray-800 dark:text-gray-100'>
            <header className="p-4">
		<div className="container flex justify-between h-16 mx-auto">
			<a href='/' rel="noopener noreferrer"  aria-label="Back to homepage" className="flex items-center p-2">
				<p className='text-2xl font-semibold'>Mohsin Ahmed</p>
			</a>
			<ul className="items-stretch hidden space-x-3 md:flex">
				<li className="flex">
					<NavLink to='/about' rel="noopener noreferrer"  className={({isActive}) => isActive ? active : NavLinkCSS}>About</NavLink>
				</li>
				<li className="flex">
					<NavLink to='/blog' rel="noopener noreferrer"  className={({isActive}) => isActive ? active : NavLinkCSS}>Blog</NavLink>
				</li>
				<li className="flex">
					<NavLink to='/projects' rel="noopener noreferrer"  className={({isActive}) => isActive ? active : NavLinkCSS}>Projects</NavLink>
				</li>
				<li className="flex">
					<NavLink to='/contact' rel="noopener noreferrer"  className={({isActive}) => isActive ? active : NavLinkCSS}>Contact</NavLink>
				</li>
			</ul>
			<button className="flex justify-end p-4 md:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
	</header>
        </div>
    );
};

export default Header;