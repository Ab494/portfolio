import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { VoiceControl } from '@/components/voice-control'
import { ParticleSystem } from '@/components/particle-system'
import { DynamicAdaptation } from '@/components/dynamic-adaptation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { LiveTerminal } from '@/components/live-terminal'
import { Education } from '@/components/education'
import { Interests } from '@/components/interests'
import { Mentorship } from '@/components/mentorship'
import { GitHubIntegration } from '@/components/github-integration'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParticleSystem />
      <ScrollProgress />
      <VoiceControl />
      <DynamicAdaptation />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LiveTerminal />
      <Education />
      <Interests />
      <Mentorship />
      <GitHubIntegration />
      <Contact />
    </main>
  )
}