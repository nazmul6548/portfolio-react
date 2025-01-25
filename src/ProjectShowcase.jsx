
import PropTypes from 'prop-types'; // Import PropTypes

const ProjectCard = ({ title, description, stack, link }) => {
  return (
    <div className="max-w-7xl mx-auto group relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300  w-[350px]  lg:[400px]">
      
      
            <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Short Description */}
        <p className="mt-3   flex-grow text-gray-600">{description}</p>
        
        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover Details */}
        <div className="absolute inset-0 bg-purple-500 bg-opacity-90 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
       
          <p className="mb-4">Click to view more details</p>
          <a
            href={link}
            className="bg-white text-purple-500 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate stack as an array of strings
  link: PropTypes.string.isRequired,
};

const Portfolio = () => {
  const projects = [
    {
      title: 'Take A trip',
      description: '"Take a Trip is a travel planning app designed to simplify your travel experience.',
      stack: ['HTML', 'CSS', 'Responsive'],
      link: 'https://nazmul6548.github.io/travel-agency-ass-2',
    },
    {
      title: 'Recipes Calorie',
      description: '"This is a recipe-sharing platform that lets users explore and share a variety of delicious recipes, offering easy navigation and detailed instructions."',
      stack: ['Tailwind', 'DOM', 'javaScript'],
      link: 'https://right-button.surge.sh',
    },
    {
      title: 'royal Hotel',
      description: '"Royal Hotel is a luxury accommodation platform offering top-tier services, modern amenities, and a seamless booking experience for travelers seeking comfort and elegance."',
      stack: ['Tailwind', 'javaScript', 'DOM'],
      link: 'https://playful-gelato-1c1320.netlify.app',
    },
    {
      title: 'New Year Party',
      description: '"New Year Party Celebration is a platform to organize and enjoy exciting New Years Eve parties, featuring tools for managing guest lists and activities."',
      stack: ['HTML', 'CSS'],
      link: 'https://nazmul6548.github.io/p-hero-1st-assignment',
    },
    {
      title: "Hockey's",
      description: '"Hokeys is an interactive platform offering fun games and challenges designed to engage users in an entertaining and social experience."',
      stack: ['Tailwind', 'HTML', 'Responsive'],
      link: 'https://nazmul6548.github.io/hockeys-assignment-3',
    },
    // {
    //   title: 'Project 3',
    //   description: 'A task management tool with robust CRUD operations.',
    //   stack: ['Next.js', 'MongoDB', 'Express'],
    //   link: 'https://thunderous-kataifi-150326.netlify.app',
    // },
    {
      title: 'Mission 2023',
      description: '"Mission 2023 focuses on personal growth through hard work, perseverance, and determination, helping individuals set and achieve goals while evolving positively."',
      stack: ['CSS', 'Responsive', 'HTML'],
      link: 'https://nazmul6548.github.io/html-css-practice-project-3',
    },
    // {
    //   title: 'Project 3',
    //   description: 'A task management tool with robust CRUD operations.',
    //   stack: ['Next.js', 'MongoDB', 'Express'],
    //   link: 'https://nazmul6548.github.io/html-css-project-4',
    // },
    // {
    //   title: 'Project 3',
    //   description: 'A task management tool with robust CRUD operations.',
    //   stack: ['Next.js', 'MongoDB', 'Express'],
    //   link: 'https://nazmul6548.github.io/no1portfolio',
    // },
    

  ];

  return (
    <div className=" pt-12 max-w-7xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          stack={project.stack}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Portfolio;


