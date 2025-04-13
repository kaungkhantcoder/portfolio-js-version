import { useState, useRef } from "react";
import { projects } from "../constants";
import { FaGithub } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

// Group projects by category
const groupProjectsByCategory = (projects) => {
  return projects.reduce((acc, project) => {
    const category = project.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {});
};

const ProjectCarousel = ({ category, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 2; // Show 2 projects at a time
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Touch swipe state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Progress bar drag state
  const progressBarRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalPages ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diffX = touchStartX.current - touchEndX.current;
      const swipeThreshold = 50; // Minimum distance to consider it a swipe

      if (Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
          // Swiped left, go to next
          handleNext();
        } else {
          // Swiped right, go to previous
          handlePrev();
        }
      }
    }
    // Reset touch positions
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle progress bar drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateProgress(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateProgress = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;
    const newProgress = Math.min(Math.max(offsetX / width, 0), 1); // Between 0 and 1
    const newIndex = Math.round(newProgress * (totalPages - 1));
    setCurrentIndex(newIndex);
  };

  // Calculate progress for the green bar
  const progress = ((currentIndex + 1) / totalPages) * 100;

  // Group projects into pages
  const projectPages = [];
  for (let i = 0; i < projects.length; i += projectsPerPage) {
    projectPages.push(projects.slice(i, i + projectsPerPage));
  }

  // Define category descriptions
  const categoryInfo = {
    "AI Projects": {
      description:
        "These are my AI projects, I usually used these technologies and tech stack [Python, TensorFlow, NumPy, Pandas] for my projects.",
    },
    "Web Projects": {
      description:
        "These are my Web projects, I usually used these technologies and tech stack [React, Tailwind, Python, Javascript] for my projects.",
    },
  };

  const { description } = categoryInfo[category] || {
    description: "These are my projects.",
  };

  return (
    <div className="w-screen p-10 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-left text-[40px] md:text-[50px] text-black uppercase">
          {category}
        </h1>

      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side Description */}
        <div className="md:w-1/3">
          <p className="text-black/70 text-lg">{description}</p>
          <div className="md:flex md:mt-10 md:flex-col items-start space-y-4 p-3 md:p-10">
            <div className="hidden md:flex space-x-2">
              <button
                onClick={handlePrev}
                className="p-5 bg-[#76B900] hover:bg-[#66B933] transition"
              >
                <MdArrowBackIosNew className="text-black" />
              </button>
              <button
                onClick={handleNext}
                className="p-5 bg-[#76B900] hover:bg-[#66B933] transition"
              >
                <MdArrowForwardIos className="text-black" />
              </button>
            </div>
            <div className="bg-[#76B900] w-[100px] md:w-auto rounded-lg p-2 md:p-5 text-center hover:scale-105 transition duration-200 ">
              <h2 className="text-[25px] md:text-[40px]">{projects.length - 1}+</h2>
              <p className="text-[20px] md:text-[20px]">projects</p>
            </div>
          </div>

        </div>

        {/* Right Side Carousel */}
        <div
          className="md:w-2/3 flex overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalPages * 100}%`,
            }}
          >
            {projectPages.map((pageProjects, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 p-3 gap-4"
              >
                {/* Projects in a Grid */}
                {pageProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white drop-shadow-md flex-shrink-0 relative hover:scale-[1.02] transition duration-200"
                  >
                    {/* Buttons above the card */}
                    <div className="absolute flex">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#76B900] text-white hover:text-white hover:bg-[#66B933] p-3 rounded-t-none rounded-md text-[10px] md:text-[13px] font-medium"
                      >
                        View on GitHub
                      </a>
                    </div>
                    {/* Project Card Content */}
                    <div className="mb-3">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h5 className="text-black font-semibold text-lg">{project.name}</h5>
                      <p className="text-black/90 text-sm mt-2">{project.description}</p>
                      <div className="mb-2">
                        <h1 className="text-black font-semibold mt-5 text-sm">Creator & Contributors</h1>
                        {
                          project.contributors.map((contributor, index) => (
                            <a
                              key={index}
                              href={contributor.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex mt-2 items-center mb-2 p-2 border border-white rounded-lg bg-gray-900/70 text-white font-medium text-[11px] shadow-sm transition-all duration-300 hover:bg-gray-900 mr-2"
                            >
                              <FaGithub className="mr-2 text-lg" />
                              {contributor.name}
                            </a>
                          ))
                        }
                      </div>


                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Progress Bar */}
      <div
        className="mt-4 cursor-pointer"
        ref={progressBarRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="w-full h-[7px] bg-gray-200 rounded-full">
          <div
            className="h-[7px] bg-[#76B900] transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const groupedProjects = groupProjectsByCategory(projects);

  return (
    <div id="projects">
      {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
        <ProjectCarousel
          key={category}
          category={category}
          projects={categoryProjects}
        />
      ))}
    </div>
  );
};

export default Projects;
