import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen mt-[123px]">
      <div className='container py-10 mx-auto px-4 sm:px-12'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
