'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Menu, X, Phone, Mail, MapPin, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioProjects, type PortfolioProject } from '@/data/portfolioData'

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<{ project: PortfolioProject; idx: number } | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const DEFAULT_VISIBLE = 6
  const visibleProjects = showAllProjects ? portfolioProjects : portfolioProjects.slice(0, DEFAULT_VISIBLE)

  const openLightbox = (project: PortfolioProject, idx = 0) => setLightbox({ project, idx })
  const closeLightbox = () => setLightbox(null)
  const prevImage = () => setLightbox(prev => prev ? { ...prev, idx: (prev.idx - 1 + prev.project.images.length) % prev.project.images.length } : prev)
  const nextImage = () => setLightbox(prev => prev ? { ...prev, idx: (prev.idx + 1) % prev.project.images.length } : prev)

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappLink = `https://wa.me/923161547081?text=Hello%20TM%20Builders`



  const services = [
    {
      title: 'House Construction',
      description: 'Complete residential construction from design to handover'
    },
    {
      title: 'Project Management',
      description: 'Professional oversight ensuring quality and timely delivery'
    },
    {
      title: 'Design Consultation',
      description: 'Expert guidance on architectural design and customization'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality standards for every project'
    }
  ]

  return (
    <div className="w-full bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jfif-YMbHuarxVABQJz5z2CykkC5oV2qzRh.jpeg"
                  alt="TM Builders Logo"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white drop-shadow">TM Builders</h1>
                <p className="text-xs text-white/70">Construction Company</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white/90 hover:text-amber-400 transition font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-amber-400 transition font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-amber-400 transition font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white/90 hover:text-amber-400 transition font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/90 hover:text-amber-400 transition font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 text-white/90 hover:text-amber-400 rounded transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-white/90 hover:text-amber-400 rounded transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-white/90 hover:text-amber-400 rounded transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-4 py-2 text-white/90 hover:text-amber-400 rounded transition"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-white/90 hover:text-amber-400 rounded transition"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero-background.jpg"
          alt="TM Builders - Building Your Dream Home at Bahria Town"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Building Your Dream Home at Bahria Town
          </h2>
          <p className="text-lg sm:text-xl mb-10 text-white/90 max-w-2xl mx-auto drop-shadow">
            TM Builders specializes in premium residential construction with a track record of excellence and customer satisfaction across Bahria Town, Rawalpindi.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-amber-500 hover:bg-amber-400 text-black px-10 py-4 rounded-xl font-bold text-lg transition shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">About TM Builders</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-foreground mb-6">
                TM Builders is a leading construction company in Bahria Town, Rawalpindi, with a proven track record of delivering premium residential properties since 2018. We combine architectural excellence with superior craftsmanship to create homes that exceed expectations.
              </p>
              <p className="text-lg text-foreground mb-6">
                Our team is dedicated to understanding your vision and transforming it into reality. With years of experience and a portfolio of successful projects, we stand as your trusted partner in construction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-accent">{portfolioProjects.length}+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-accent">2018</p>
                  <p className="text-sm text-muted-foreground">Since Established</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-2">Tahir Bashir Malik</h3>
                <p className="text-accent mb-4 font-semibold">CEO</p>
                <p className="text-foreground mb-6">
                  Leading TM Builders with a vision for excellence and innovation in residential construction. Tahir brings expertise and dedication to every project.
                </p>
                <div className="relative w-full md:max-w-xs mx-auto aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEO-267GfNq0LHry8ApYlNyT6ENCpsaqzq.jpeg"
                    alt="CEO Tahir Bashir Malik"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Card>

              <Card className="p-6 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-2">Eng Zahid Bashir Malik</h3>
                <p className="text-accent mb-4 font-semibold">Director</p>
                <p className="text-foreground mb-6">
                  An accomplished engineer with extensive expertise in construction management and quality assurance, ensuring every project meets the highest standards.
                </p>
                <div className="relative w-full md:max-w-xs mx-auto aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Director%20Picture-n8gItdDLhlePrFBvo9nK2YjzLDMdNj.jpeg"
                    alt="Director Eng Zahid Bashir Malik"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 border border-border hover:shadow-lg transition">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-accent-foreground">{index + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Our Portfolio</h2>
          <p className="text-center text-foreground mb-16 max-w-2xl mx-auto">
            Explore our collection of completed projects showcasing our commitment to quality and excellence in residential construction.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border border-border hover:shadow-xl transition cursor-pointer group"
                onClick={() => openLightbox(project, 0)}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition duration-300"
                  />
                  {/* image count badge */}
                  <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {project.images.length} photos
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shrink-0 ml-2">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-foreground flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    {project.location}, Bahria Town
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* View More / View Less */}
          {portfolioProjects.length > DEFAULT_VISIBLE && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition px-10"
                onClick={() => setShowAllProjects(prev => !prev)}
              >
                {showAllProjects ? 'View Less' : `View More (${portfolioProjects.length - DEFAULT_VISIBLE} more)`}
              </Button>
            </div>
          )}

          {/* Lightbox */}
          {lightbox && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>

              {/* Prev */}
              {lightbox.project.images.length > 1 && (
                <button
                  className="absolute left-4 text-white hover:text-gray-300 z-10 bg-black/40 rounded-full p-2"
                  onClick={(e) => { e.stopPropagation(); prevImage() }}
                >
                  <ChevronLeft size={32} />
                </button>
              )}

              {/* Image */}
              <div
                className="relative w-full max-w-4xl max-h-[85vh] aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightbox.project.images[lightbox.idx]}
                  alt={`${lightbox.project.title} – photo ${lightbox.idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Next */}
              {lightbox.project.images.length > 1 && (
                <button
                  className="absolute right-4 text-white hover:text-gray-300 z-10 bg-black/40 rounded-full p-2"
                  onClick={(e) => { e.stopPropagation(); nextImage() }}
                >
                  <ChevronRight size={32} />
                </button>
              )}

              {/* Caption + thumbnails */}
              <div
                className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-white text-sm font-semibold">
                  {lightbox.project.title} &mdash; {lightbox.idx + 1} / {lightbox.project.images.length}
                </p>
                <div className="flex gap-2 overflow-x-auto max-w-lg px-2">
                  {lightbox.project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox(prev => prev ? { ...prev, idx: i } : prev)}
                      className={`relative w-14 h-10 shrink-0 rounded overflow-hidden border-2 transition ${
                        i === lightbox.idx ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt={`thumb-${i}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <Card className="p-8 bg-primary-foreground text-primary border-none">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Office Location</h3>
              <p className="text-foreground">
                Office # 7, Commercial Complex, Safari Villas 2, Bahria Town, Phase 7, Islamabad
              </p>
            </Card>

            {/* Phone */}
            <Card className="p-8 bg-primary-foreground text-primary border-none">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone Number</h3>
              <a href="tel:+923161547081" className="text-foreground hover:text-accent font-semibold">
                0316-1547081
              </a>
              <p className="text-sm text-muted-foreground mt-2">Available for calls and inquiries</p>
            </Card>

            {/* Email */}
            <Card className="p-8 bg-primary-foreground text-primary border-none">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Address</h3>
              <a href="mailto:tmbuilders92@gmail.com" className="text-foreground hover:text-accent font-semibold">
                tmbuilders92@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
            </Card>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <p className="text-lg mb-6 opacity-90">Quick inquiry? Chat with us on WhatsApp</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] text-white hover:bg-[#1ebe57] px-8 py-4 text-lg flex items-center gap-2 mx-auto">
                <MessageCircle size={20} />
                Start WhatsApp Chat
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jfif-YMbHuarxVABQJz5z2CykkC5oV2qzRh.jpeg"
                  alt="TM Builders Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-bold">TM Builders</span>
            </div>
            <p className="text-sm opacity-75">
              © 2024 TM Builders. All rights reserved. | Premium Construction at Bahria Town
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
