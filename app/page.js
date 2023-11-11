import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import SpaceDecoration from '@/components/SpaceDecoration'

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen mt-[123px]">
      <div className='container py-10 mx-auto px-4 sm:px-12'>
        <HeroSection />
        <SpaceDecoration imgURL='/assets/images/satellite.png' />
        <AboutSection />
        <SpaceDecoration imgURL='/assets/images/spaceship.png' />
        <SkillsSection />
        <SpaceDecoration imgURL='/assets/images/meteor.png' />
        <ProjectsSection />
      </div>
    </main>
  )
}
