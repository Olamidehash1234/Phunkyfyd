interface ProcessStep {
  title: string;
  description: string;
  index?: string; // Optional index for numbering steps
  icon: string;
}

const ProcessSection: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      title: "Design Services",
      description:
        "A process of providing design solutions to meet your space needs and sizes, involving measurements and scope outline through MOOD BOARD - a design template we use creatively with drawings and sketches.",
      icon: "/icons/about/design.svg",
      index: "01",
    },
    {
      title: "Quotation",
      description:
        "We send out quotations based on all details in the scope of work down to the civil works in 10 working days depending on the volume of project work ",
      icon: "/icons/about/quote.svg",
      index: "02",
    },
    {
      title: "Presentations",
      description:
        "We ensure a one on one meeting with the client showing color of choice in fabrics, boards, woods, metal finishes, etc. before execution of project. ",
      icon: "/icons/about/present.svg",
      index: "03",
    },
    {
      title: "Valid Contract",
      description:
        "This is an Offer/An well drafted Agreement to bind and manage the affairs of the project; to be signed by both parties to protect the interest of our valuable clients, signed and sealed by our reputable Law Firm ",
      icon: "/icons/about/contract.svg",
      index: "04",
    },
    {
      title: "Sourcing",
      description:
        "We have a great relationship with artisans that we have worked with over the years that understand our style and attention to details in bespoke furnishing and wood work. We also source lightings intentionally and decor objects that makes the icing on the cake",
      icon: "/icons/about/source.svg",
      index: "05",
    },
    {
      title: "FF&E",
      description:
        "We also get involved in the buying of the right equipment’s for the home or store that would best fits the space functionally. (of which is optional) this decision helps in the overall output of the space which brings harmony in place ",
      icon: "/icons/about/ffe.svg",
      index: "06",
    },
    {
      title: "Execution",
      description:
        "We agree on a timeline that best fits the scope of work of the project. We do regular site visits from our team members ensuring that clients satisfaction is met while we communicate job process at site visits to client ",
      icon: "/icons/about/execute.svg",
      index: "07",
    },
    {
      title: "Aftercare",
      description:
        "After completion and hand over of project, we carefully curate a form for client to air their opinions about if their satisfaction was met while also providing a styling manual on how to care for the furniture’s, and finishing we’ve curated to enhance your living by us because it is paramount to us that you continually fall in love with your space over and over again ❤.",
      icon: "/icons/about/care.svg",
      index: "08",
    },
  ];

  return (
    <div className="py-[40px] border-y-[1px] border-[#0000001A] px-[16px] lg:px-[80px] lg:pt-[40px] lg:pb-[80px]">
      <h2 className="text-[30px] lg:text-[60px] font-bold mb-6 lg:mb-[30px]">
        OUR PROCESS
      </h2>
      <div className="text-[18px] lg:text-[20px] text-[#040323] font-medium mb-12 lg:mb-[60px] text-justify">
        <p className="lg:mb-[10px]">
          We pay attention to your needs and desires by listening thoroughly to
          you. We have an{" "}
          <span className="text-[#ECAF21] font-semibold">
            “onsite-creativity gift”
          </span>{" "}
          to see your vision coming to life most of the times.
        </p>{" "}
        <p className="font-bold lg:mb-[10px]">
          An overview of our design services:
        </p>
        <span className="lg:text-[18px] lg:leading-[26px]">
          This is a process of providing a design solution to meet your space
          needs and sizes which involves taking measurement and getting your
          scope of work outlined through a{" "}
          <span className="text-[#ECAF21] font-bold">MOOD BOARD:</span> this
          a design template that can be creatively used by us to design the
          space, we mostly explain this through drawings and sketches of
          proposed design which enables us to put our design in paper
          meticulously for client to understand. Then we also have the{" "}
          <span className="text-[#ECAF21] font-bold">
            development of design concepts and 3D rendering
          </span>{" "}
          if necessary
          <span className="text-[#ECAF21] font-bold">
            (3Ds attract a Separate charge depending on the volume of renders/
            size{" "}
          of space)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-[30px]">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="p-8 relative border border-[#04032333] rounded-[6px]"
          >
            <span className="absolute -top-6 left-8 text-[#ECAF21] text-[40px] lg:text-[60px] font-bold bg-[#FDFCF6] px-4">
              {step.index}
            </span>
            <div className="w-full flex justify-center mt-6 mb-6">
              <h3 className="text-xl uppercase lg:text-[24px] font-bold">
                {step.title}
              </h3>
            </div>
            <p className="text-base w-full flex justify-center lg:text-[18px] text-[#040323] leading-relaxed text-justify">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
