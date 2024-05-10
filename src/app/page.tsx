import PortSection from '../components/Main/PortSection'
import ProjectsSection from '../components/Project/ProjectsSection'
import EmailSection from '../components/Email';
import AboutMe from '../components/AboutMe/AboutMe'

export default function Home() {
  return (
    <main className='main h-auto min-h-screen bg-white dark:bg-black pb-8'>
      <PortSection></PortSection>
      {/* <hr className='line-div' /> */}
      {/* <AboutMe></AboutMe> */}
      <hr className='line-div' />
      <ProjectsSection></ProjectsSection>
      <hr className='line-div' />
      <EmailSection></EmailSection>
    </main>
  );
}