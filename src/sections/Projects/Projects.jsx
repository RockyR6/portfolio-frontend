import styles from './ProjectsStyles.module.css';
import weatericon from '../../assets/weather-icon.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import todoicon from '../../assets/todo.png.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weatericon}
          link="https://weather-report-liard-five.vercel.app/"
          h3="Weather"
          p="Weather App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://feed-me-cyan.vercel.app/"
          h3="FEEDme"
          p="Online Restaurant"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        /> */}
        <ProjectCard
          src={todoicon}
          link="https://to-do-list-umber-eta.vercel.app/"
          h3="ToDo"
          p="To-Do App"
        />
      </div>
    </section>
  );
}

export default Projects;
