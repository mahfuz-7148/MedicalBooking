import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import successDoctor from "../assets/success-doctor.png";
import review from "../assets/success-review.png";
import successPatients from "../assets/success-patients.png";
import successStaffs from "../assets/success-staffs.png";

const stats = [
  { id: 1, img: successDoctor, count: 199, label: "Total Doctors" },
  { id: 2, img: review, count: 467, label: "Total Reviews" },
  { id: 3, img: successPatients, count: 1900, label: "Patients" },
  { id: 4, img: successStaffs, count: 300, label: "Total Staffs" },
];

const Countup = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
      <div className="mb-20 p-4" ref={ref}>
        <div className="mx-auto max-w-7xl text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            We Provide Best Law Services
          </h1>
          <p className="text-gray-500 mt-2 mb-4">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((item) => (
              <div
                  key={item.id}
                  className="bg-white rounded-2xl py-8 pl-10 flex flex-col items-start justify-start"
              >
                <img src={item.img} alt={item.label} className="h-14 mb-2" />
                <h2 className="text-5xl mb-2 mt-4 font-bold">
                  {inView ? (
                      <CountUp end={item.count} duration={5} separator="," enableScrollSpy/>
                  ) : (
                      0
                  )}
                  +
                </h2>
                <p className="text-xl text-gray-500">{item.label}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Countup;