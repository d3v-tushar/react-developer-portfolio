import React from 'react';
import Hero from '../Hero/Hero';
import Contact from './Contact';
import Projects from './Projects';
import Statistics from './Statistics';

const Template = () => {
    return (
        <div className="space-y-12 dark:bg-gray-800 dark:text-gray-100">
	<Hero></Hero>
	<Statistics></Statistics>
	<section className="py-8">
		<div className="container mx-auto">
			<div className="p-4 mx-auto text-center md:px-10 lg:px-32 grid justify-center">
				<h2 className="text-2xl font-bold leading-none sm:text-4xl">What can I offer to you?</h2>
				<div className="text-justify text-xl">
                <p className="px-8 my-4"><span className='font-semibold dark:text-cyan-400'>Expertise:</span> (ReactJS, JavaScript, ES6, HTML5, CSS3, Bootstrap, Tailwind CSS, SPA, ExpressJS)</p>
                <p className="px-8 my-4"><span className='font-semibold dark:text-cyan-400'>Comfortable:</span> (NodeJS, MongoDB, REST API)</p>
                <p className="px-8 my-4"> <span className='font-semibold dark:text-cyan-400'>Tools & Technologies:</span> (Git, Github, VS Code, FIgma, Firebase, Vercel, Netlify, Chrome Dev Tools)</p>
                </div>
			</div>
		</div>
	</section>
	<Projects></Projects>
	{/* <section>
		<div className="container max-w-6xl p-6 space-y-6 sm:space-y-12">
			<a href='/' rel="noopener noreferrer"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
				<img src="https://source.unsplash.com/random/480x360" alt="Website Design System" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
				<div className="p-6 space-y-2 lg:col-span-5">
					<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
					<span className="text-xs dark:text-gray-400">February 19, 2021</span>
					<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
				</div>
			</a>
			<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<a href='/' rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
					<img alt='' role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
					<div className="p-6 space-y-2">
						<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
						<span className="text-xs dark:text-gray-400">January 21, 2021</span>
						<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
					</div>
				</a>
				<a href='/' rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
					<img alt='' role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
					<div className="p-6 space-y-2">
						<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
						<span className="text-xs dark:text-gray-400">January 22, 2021</span>
						<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
					</div>
				</a>
				<a href='/' rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
					<img alt='' role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
					<div className="p-6 space-y-2">
						<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
						<span className="text-xs dark:text-gray-400">January 23, 2021</span>
						<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
					</div>
				</a>
				<a href='/' rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
					<img alt='' role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
					<div className="p-6 space-y-2">
						<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
						<span className="text-xs dark:text-gray-400">January 24, 2021</span>
						<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
					</div>
				</a>
				<a href='/' rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
					<img alt='' role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
					<div className="p-6 space-y-2">
						<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
						<span className="text-xs dark:text-gray-400">January 25, 2021</span>
						<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
					</div>
				</a>
				<a href='/' rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
					<img alt='' role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
					<div className="p-6 space-y-2">
						<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
						<span className="text-xs dark:text-gray-400">January 26, 2021</span>
						<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
					</div>
				</a>
			</div>
			<div className="flex justify-center">
				<button className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
			</div>
		</div>
	</section> */}
	{/* <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
		<div className="flex flex-col justify-between">
			<div className="space-y-2">
				<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
				<div className="dark:text-gray-400">Contact me for more information</div>
			</div>
			<img src="assets/svg/doodle.svg" alt="Contact our customer support" className="p-6 h-52 md:h-64" />
		</div>
		<form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
			<div>
				<label for="name" className="text-sm">Full name</label>
				<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
			</div>
			<div>
				<label for="email" className="text-sm">Email</label>
				<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
			</div>
			<div>
				<label for="message" className="text-sm">Message</label>
				<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
			</div>
			<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-cyan-400 dark:text-gray-900">Send Message</button>
		</form>
	</div> */}

    <Contact></Contact>
</div>
    );
};

export default Template;