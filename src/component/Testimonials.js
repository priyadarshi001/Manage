import React from "react";
import anisha from "../assets/avatar-anisha.png"
import ali from "../assets/avatar-ali.png"
import richard from "../assets/avatar-richard.png";

export default function Testimonials() {
  return (
    <section id="Testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/** Testimonial-1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={anisha} alt="anisha" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha</h5>
            <p className="text-sm text-darkGreyishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
          {/** Testimonial-2 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
            <img src={ali} alt="anisha" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGreyishBlue">
              "We have been able to cancel so many other subscriptions since
              using Manage. There isno more cross-channel confusion and everyone
              is much more focused."
            </p>
          </div>
          {/** Testimonial-3 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
            <img src={richard} alt="anisha" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Richard</h5>
            <p className="text-sm text-darkGreyishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
        </div>
        <div className="my-16">
          <a
            href="#button"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

// for testimonials--> on smaller screen showing only one reviews. But for medium & bigger it is displayed flex.
