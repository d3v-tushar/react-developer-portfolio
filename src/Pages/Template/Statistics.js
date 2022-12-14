import React from 'react';

const Statistics = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100 px-10">
            <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold leading-none">Statistics</h1>
          <p className="text-lg">
           
          </p>
        </div>
		<div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3 my-8 border-4 border-black dark:border-yellow-400 rounded-md">
			<div className="flex flex-col justify-start m-2 lg:m-6">
				<p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
				<p className="text-sm sm:text-base">Clients</p>
			</div>
			<div className="flex flex-col justify-start m-2 lg:m-6">
				<p className="text-4xl font-bold leading-none lg:text-6xl">1.2K</p>
				<p className="text-sm sm:text-base">Followers on Linkedln</p>
			</div>
			<div className="flex flex-col justify-start m-2 lg:m-6">
				<p className="text-4xl font-bold leading-none lg:text-6xl">1.5+</p>
				<p className="text-sm sm:text-base">Years of experience</p>
			</div>
		</div>
	</section>
        </div>
    );
};

export default Statistics;