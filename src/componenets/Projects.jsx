import SpecialTitle from './SpecialTitle';
import { projects } from '../constants/constants';

const Projects = () => {
  return (
    <div className='pt-[100px]' id='projects'>
    
    <div className="container">
    <SpecialTitle title='Projects' />

<div className="projects grid md:grid-cols-2 xl:grid-cols-3 gap-[50px]">
  {
    projects.map(project=>(

      <div key={project.id} className="project rounded-[10px] overflow-hidden
       relative shadow-main h-[620px] sm:h-[600px]">

        <img className='w-full object-cover h-[250px]' src={project.image} alt="project" />

        <h3 className='text-[#9cc9e3] font-semibold text-[30px] text-center px-3 pt-3'>{project.title}</h3>

        <span className="block bg-[#d0bb57] w-[50px] h-[4px] mx-auto my-[30px]"></span>
        <p className='text-[#e4e6e7] text-center leading-[28px] px-3'>{project.description}</p>

        <a className='absolute left-1/2 -translate-x-1/2 bottom-[20px] bg-blue-gradient
        w-[120px] h-[40px] rounded-[10px] grid place-items-center' href={project.visit} target='__blank'>Live Demo</a>
      </div>
    ))
  }
</div>
    </div>
    </div>
  )
}

export default Projects
