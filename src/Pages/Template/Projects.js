import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("projects.json");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <section className="py-6  dark:bg-gray-800 dark:text-gray-50">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold leading-none">Projects</h1>
          <p className="text-lg">Please visit my most recent projects below</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-10 my-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-lg p-4 shadow-md dark:bg-gray-900 bg-indigo-400 rounded-md dark:text-gray-100"
            >
              <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                  <a
                    rel="noopener noreferrer"
                    href={project.livesite}
                    target="_blank"
                    className="mb-0 capitalize text-xl dark:text-gray-100"
                  >
                    {project.name}
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src="https://source.unsplash.com/random/480x360/?4"
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <a rel="noopener noreferrer" href="/" className="block">
                    <h3 className="text-xl font-semibold dark:text-cyan-400">
                      {project.title}
                    </h3>
                  </a>
                  <p className="leading-snug dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Repellat, excepturi.
                  </p>
				  <Link to={`/project/${project.id}`}><button className="btn p-2 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Learn More</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
