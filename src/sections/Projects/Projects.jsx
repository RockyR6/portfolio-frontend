import styles from './ProjectsStyles.module.css';
import weatericon from '../../assets/weather-icon.png';
import freshBurger from '../../assets/fresh-burger.png';
import viberr from '../../assets/viberr.png';
import todoicon from '../../assets/todo.png.png';
import ProjectCard from '../../common/ProjectCard';
import logocart from '../../assets/LogoCart.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
         <ProjectCard
          src={logocart}
          link="https://logo-cart.vercel.app/"
          h3="LogoCart"
          p="E-commerce"
        />
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
        <ProjectCard
          src={viberr}
          link="https://instagramclone-tdhc.onrender.com"
          h3="InstagramClone"
          p="Connect with your friends"
        />
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
