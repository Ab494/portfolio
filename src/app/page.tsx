import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
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
