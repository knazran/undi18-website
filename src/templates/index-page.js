import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import CampaignCardList from "../components/CampaignCard";
import Button from "../components/Button";
import Programmes from "../components/Programmes";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  testimonial,
  intro,
  features
}) => (
  <div>
    <section
      className="py-20 md:py-16"
      style={{ background: "linear-gradient(90deg, #660000 0% ,#b30000 100%)" }}
    >
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="flex flex-col justify-between text-center lg:text-left lg:w-3/5 mr-2">
          <h1 className="text-4xl font-bold tracking-wider text-white">
            {title}
          </h1>
          <p className="text-xl mt-6 font-light text-gray-200">{subheading}</p>
          <div>
            <Button className="mt-6 mb-12 text-gray-200">
              See Our Campaigns
            </Button>
            <Button className="mt-6 ml-6 mb-12 text-gray-200">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Description */}
    <section id="features">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-1/2">
          <h3 className="text-4xl font-semibold tracking-wider py-2">
            {mainpitch.title}
          </h3>
          <p className="text-md mt-2 leading-relaxed font-light">
            {mainpitch.description}
          </p>
        </div>

        <div className="my-6 w-1/2 flex-grow-0">
          <img
            className="m-0 ml-6  lg:mr-4 rounded-lg object-center lg:object-fill h-0 lg:h-full"
            src="https://picsum.photos/800/300"
          />
        </div>
      </div>
    </section>

    {/* Campaigns */}
    <section id="campaigns">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-4 w-full">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-2xl font-semibold tracking-wider mb-6">
            See Our Campaigns
          </h3>
          <CampaignCardList featureItems={features} />
        </div>
      </div>

      <div className="flex justify-center m-2 ">
        <a
          class="align-right font-bold border border-blue-500 p-2 text-md text-blue-500 hover:text-blue-800"
          href="#"
        >
          See All Campaigns →
        </a>
      </div>
    </section>

    {/* Programmes */}
    <section id="programmes">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-2/5">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-2xl font-semibold tracking-wider">
            Impact Through Engagement and Education
          </h3>
          <p className="text-lg leading-relaxed font-light text-gray-600 mb-4">
            We started off as a student movement, under the umbrella of the
            Malaysia Students' Global Alliance.
          </p>
        </div>

        <div className="my-6 w-3/5 pl-24 pt-3 flex-grow-0">
          {/* <h3 className="text-2xl font-semibold tracking-wider ">
            What We Do
          </h3> */}
          <p className="text-lg leading-relaxed font-light text-gray-600 mb-4">
            Our Programmes focuses on engagement and education bla bla bla bla.
            We mainly run the following:
          </p>
          <Programmes></Programmes>
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
    </section>

    {/* Events */}
    <section id="events">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-full">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-4xl font-semibold tracking-wider">
            Events
          </h3>
          
        </div>
      </div>
    </section>

    {/* Media */}
    <section id="events">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-full">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-4xl font-semibold tracking-wider">
            Media Mentions
          </h3>
          
        </div>
      </div>
    </section>

    {/* Events */}
    <section id="events">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-full">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-4xl font-semibold tracking-wider">
            Our Partners & Clients
          </h3>
          
        </div>
      </div>
    </section>

  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  features: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        testimonials={frontmatter.testimonials}
        intro={frontmatter.intro}
        features={frontmatter.features}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        testimonials {
          author
          quote
        }
        features {
          image {
            childImageSharp {
              fluid(maxWidth: 480, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title_text
          subtitle_text
        }
      }
    }
  }
`;
