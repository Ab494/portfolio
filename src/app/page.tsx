import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
//import { VoiceControl } from '@/components/voice-control'
import { DynamicAdaptation } from '@/components/dynamic-adaptation'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { WhyWorkWithMe } from '@/components/why-work-with-me'
import { LiveTerminal } from '@/components/live-terminal'
import { Education } from '@/components/education'
import { Interests } from '@/components/interests'
import { Mentorship } from '@/components/mentorship'
import { GitHubIntegration } from '@/components/github-integration'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen md:pl-20">
      <ScrollProgress />
      
      <DynamicAdaptation />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
      <WhyWorkWithMe />
      <LiveTerminal />
      <Education />
      <Interests />
      <Mentorship />
      <GitHubIntegration />
      <Testimonials />
      <Contact />
    </main>
  )
}