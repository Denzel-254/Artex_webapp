import './App.css'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import SectionWrapper from './components/common/Sectionwrapper'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <SectionWrapper className=" absolute top-160 left-0 right-0 mx-auto w-11/12 md:w-3/4 md:absolute md:top-125 md:left-0 md:right-0 md:mx-auto ">
        <Stats />
      </SectionWrapper>
    </>
  )
}

export default App





