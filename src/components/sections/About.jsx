import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="contaner mx-auto py-5 px-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">
            Crafting Architectural Excellence Since 2018
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Artex Architecture emerged from a vision to bridge the gap between
            architectural artistry and practical functionality. Founded by James
            Andlly, an architect with 15 years of experience in both boutique
            residential and large-scale commercial projects. <br />
            Over the years, we've cultivated a reputation for designs that don't
            just look impressive in portfolios—they work beautifully in daily
            life.
          </p>
        </div>

        <div>
          <img
            src="/sectionone.jpg"
            alt="collaboration photo"
            className="w-full h-90 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
