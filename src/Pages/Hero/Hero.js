import React from 'react';

const Hero = () => {
    return (
        <section className="space-y-12 dark:bg-gray-800 dark:text-gray-100">
		<div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
			<h1 className="text-4xl font-bold leading-none sm:text-5xl">Md. Mohsin Ahmed
				<span className="dark:text-cyan-400"></span>
			</h1>
			<p className="px-8 mt-8 mb-12 text-2xl font-semibold dark:text-cyan-400">MERN Stack Developer</p>
			<div className="flex flex-wrap justify-center">
				<a href='https://drive.google.com/uc?export=download&id=1SePO_a5VRZwPm4rfrgGrsKVcjTM-eZnu' className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-cyan-400 dark:text-gray-900">Resume</a>
				<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Hire Me</button>
			</div>
		</div>
	</section>
    );
};

export default Hero;