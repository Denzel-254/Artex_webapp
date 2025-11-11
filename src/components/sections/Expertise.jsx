import { FaCheckCircle } from "react-icons/fa";

function Expertise() {
  return (
    <section className="container mx-auto py-7">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
        <div>
          <img
            src="/femaleworker.jpg"
            alt="collaboration photo"
            className="w-full h-auto object-cover rounded-3xl"
            data-aos="fade-right"
          />
        </div>

        <div className="container mx-auto">
          <h2 className="text-4xl text-blue-950 font-bold  mb-4 mt-4 md:text-5xl  ">
            A Smarter Approach to Architecture
          </h2>
          <p className="text-lg text-gray-700 mb-4 md:text-xl">
            We blend creativity with technology to deliver exceptional
            architectural solutions.
          </p>

          <div className="mb-4">
            <p className="flex items-start text-lg font-medium  gap-2">
              <FaCheckCircle className="text-blue-950 text-lg mr-2" />
              Holistic Approach
            </p>
            <p className="pl-9">
              We blend creativity with technology to deliver exceptional
              architectural solutions that work well for you.
            </p>
          </div>

          <div>
            <p className="flex items-start text-lg font-medium  gap-2">
              <FaCheckCircle className="text-blue-950 text-lg mr-2" />
              Technical Excellence.
            </p>
            <p className="pl-9">
              Our designs are efficient and compliant Through iterative design
              sessions, 3D visualizations, and meticulous attention to detaill.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
