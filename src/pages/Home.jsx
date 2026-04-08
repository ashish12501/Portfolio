import BlogList from '../components/BlogList';
import Experience from '../components/Experience';
import Freelance from '../components/Freelance';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';
import Community from '../components/Community';
import { data } from '../data';

const Home = () => {
  const { projects, skills } = data;

  return (
    <div>
      <Intro />
      <Experience />
      <Skills skills={skills} />
      <ProjectList projects={projects.slice(0, 3)} />
      <Community />
      <BlogList />
      <Freelance />
    </div>
  );
};
export default Home;
