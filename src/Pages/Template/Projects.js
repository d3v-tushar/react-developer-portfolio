import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold leading-none">Projects</h1>
          <p className="text-lg">
            Please visit my most recent projects below
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-10 my-8">
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="/" className="mb-0 capitalize dark:text-gray-100">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="/">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="/" className="block">
				<h3 className="text-xl font-semibold dark:text-cyan-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
        </div>
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="/" className="mb-0 capitalize dark:text-gray-100">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="/">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="/" className="block">
				<h3 className="text-xl font-semibold dark:text-cyan-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
        </div>
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="/" className="mb-0 capitalize dark:text-gray-100">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="/">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="/" className="block">
				<h3 className="text-xl font-semibold dark:text-cyan-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
        </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;
