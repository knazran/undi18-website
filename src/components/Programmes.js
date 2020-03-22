import React from "react";

const Programmes = ({ programmeItem }) => (
  <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
    <div className="my-6 w-2/5">
      <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
      <h3 className="text-2xl font-semibold tracking-wider">
        {programmeItem.title}
      </h3>
      <p className="text-lg leading-relaxed font-light text-gray-600 mb-4">
        {programmeItem.subtitle}
      </p>
    </div>

    <div className="my-6 w-3/5 pl-24 pt-3 flex-grow-0">
      <p className="text-lg leading-relaxed font-light text-gray-600 mb-4">
        {programmeItem.section_intro_text}
      </p>

      {programmeItem.programme_list.map(programme_list => (
          <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
          <div className="w-56 lg:w-1/5 xl:1/6 lg:mr-8">
            <img className="" src="https://picsum.photos/800/600" />
          </div>
  
          <div className="w-full lg: w-4/5 xl:5/6 py-2 self-start ">
            <p className="text-md text-black text-center font-normal lg:text-left  leading-none mb-2 ">
              {programme_list.title_text}
            </p>
            <p className="text-md lg:text-sm font-light text-gray-600 text-center lg:text-left">
            {programme_list.subtitle_text}
            </p>
          </div>
        </div>
      ))};

      <div className="flex justify-end m-2 ">
        <a
          class="align-right font-bold p-2 text-md text-blue-500 hover:text-blue-800"
          href="#"
        >
          Learn More →
        </a>
      </div>
    </div>
  </div>
);

// CampaignCardList.propTypes = {
//   featureItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//       title_text: PropTypes.string,
//       subtitle_text: PropTypes.string
//     })
//   )
// };

export default Programmes;
