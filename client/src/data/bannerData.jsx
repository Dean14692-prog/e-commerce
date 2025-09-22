export const banners = [
  {
    // A colorful banner to showcase electronics
    id: 1,
    heading: (
      <span className="text-4xl font-extrabold mb-1">
        JUMIA <span className="font-normal text-xl">ELECTRONICS</span>
      </span>
    ),
    subheading: (
      <span className="text-3xl font-light leading-snug">
        Discover the Latest <br /> in Gadgets.
      </span>
    ),
    description: (
      <>
        <p className="mt-4 text-sm font-light">
          From smartphones to smartwatches.
        </p>
        <p className="text-xs font-light">Up to 30% off!</p>
      </>
    ),
    buttonText: "SHOP NOW",
    image:
      "https://images.pexels.com/photos/356852/pexels-photo-356852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "A collection of modern electronic gadgets",
    bgClass: "bg-orange-600",
    textPosition: "left",
  },
  {
    // A fashion-focused banner with a different color scheme
    id: 2,
    heading: (
      <span className="text-6xl font-extrabold leading-none">
        FASHION <br /> FORWARD
      </span>
    ),
    subheading: (
      <span className="text-2xl font-normal mt-4 block">
        Style that speaks for itself.
      </span>
    ),
    description: (
      <span className="inline-block bg-white text-black py-2 px-4 rounded-md font-bold text-lg mt-6">
        NEW ARRIVALS
      </span>
    ),
    buttonText: "EXPLORE",
    image:
      "https://images.pexels.com/photos/1036322/pexels-photo-1036322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Fashionable woman in a colorful setting",
    bgClass: "bg-pink-600",
    textPosition: "left",
  },
  {
    // A food and drink banner
    id: 3,
    heading: (
      <span className="text-8xl font-black mb-1 flex items-center">
        <span className="bg-white rounded-full p-2 mr-4 text-green-600">
          EAT
        </span>
        & DRINK
      </span>
    ),
    subheading: (
      <>
        <span className="text-2xl font-semibold block">Freshness</span>
        <span className="text-5xl font-bold block leading-tight">
          Delivered
        </span>
      </>
    ),
    description: (
      <div className="flex items-baseline mt-4">
        <span className="text-lg font-normal opacity-75 mr-2">
          Quality You Can Taste
        </span>
      </div>
    ),
    buttonText: "ORDER NOW",
    image:
      "https://images.pexels.com/photos/1852024/pexels-photo-1852024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "A variety of healthy fruits and vegetables",
    bgClass: "bg-green-700",
    textPosition: "left",
  },
];
