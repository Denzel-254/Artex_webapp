import './App.css'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import SectionWrapper from './components/common/Sectionwrapper'
import Expertise from './components/sections/Expertise'
import Projects from './components/sections/Project'
import About from './components/sections/About'
import Showcase from './components/sections/Showcase'
import Card from './components/common/Card'
import Testimonial from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <SectionWrapper className=" absolute top-160 left-0 right-0 mx-auto w-11/12 md:w-3/4 md:absolute md:top-125 md:left-0 md:right-0 md:mx-auto ">
        <Stats />
      </SectionWrapper>

      <SectionWrapper className="mt-8 bg-gray-50">
        <Expertise />
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <Projects />
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <About />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-50">

        <Showcase />

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card projectName="Hyundai Towers" location="China" cost="$100,000" image="/complete1.png" />
          <Card projectName="Sunset Villas" location="Spain" cost="$250,000" image="/complete2.png" />
          <Card projectName="Oceanview Apartments" location="Australia" cost="$300,000" image="/complete3.png" />
          <Card projectName="Mountain Retreat" location="Switzerland" cost="$400,000" image="/complete4.png" />
          <Card projectName="City Center Offices" location="USA" cost="$500,000" image="/complete5.png" />
          <Card projectName="Lakeside Homes" location="Canada" cost="$350,000" image="/complete6.png" />
          <Card projectName="Desert Oasis" location="UAE" cost="$450,000" image="/complete7.png" />
          <Card projectName="Forest Cabins" location="Finland" cost="$200,000" image="/complete8.png" />
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-gray-50">
        <Testimonial />
      </SectionWrapper>
      <SectionWrapper className="bg-blue-950">
        <Contact />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-500">
        <Footer />
      </SectionWrapper>

    </>
  )
}

export default App





