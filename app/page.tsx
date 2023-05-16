import AboutSection from "@/components/sections/about/about-section"
import ContactSection from "@/components/sections/contact/contact-section"
import HomeSection from "@/components/sections/home/home-section"
import ProjectSection from "@/components/sections/projects/projects-section"

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
