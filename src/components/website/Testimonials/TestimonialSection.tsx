import { Testimonial,testimonials } from "@/data/Testimonial";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


const TestimonialSection = function TestimonialSection() {
  const words = "Testimonial"
  return (
    <div id="testimonials" className="flex flex-col items-center bg-gradient-to-br  from-indigo-400 to-indigo-200">
      <h1 className="mt-6 font-bold bg-gradient-to-br  from-indigo-300 to-indigo-200 rounded-md p-4 text-primary font-serif text-5xl md:text-6xl backdrop-blur-md dark:font-black ">{words}</h1>
    <div className="flex flex-wrap justify-center py-10 gap-2 ">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} {...testimonial} />
      ))}
    </div>
    </div>
    )
}


export default TestimonialSection



function TestimonialCard({ name, review, profileLink }: Testimonial) {
    return (
        <CardContainer className="inter-var mx-2 md:mx-0">
        <CardBody className="bg-slate-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-4 border">
            <div className="flex items-center gap-4">
                <CardItem
                    translateZ="100"
                    className="text-xl font-bold rounded-xl text-neutral-600 dark:text-white"
                >
                    <img
                    src={profileLink}
                    height="1000"
                    width="1000"
                    className="w-16 h-16 object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="100"
                    className="text-black text- font-bold max-w-sm mt-2 dark:text-neutral-300"
                >
                    {name}
                </CardItem>
          </div>
          <CardItem translateZ="50" className="w-full mt-4">
            {review}
          </CardItem>
        </CardBody>
      </CardContainer>
    );
  }