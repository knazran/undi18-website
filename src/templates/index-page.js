import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import logoSafe from "../img/undraw_safe_bnk7.svg";

import Layout from "../components/Layout";
import CTA from "../components/cta";
import FeatureList from "../components/Features";

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
      className="pt-20 md:pt-16"
      style={{ background: "linear-gradient(90deg, #660000 0% ,#b30000 100%)" }}
    >
      <div className="container mx-auto px-2 md:px-4 lg:px-16 lg:flex">
        <div className="text-center lg:text-left lg:w-3/5 mr-2">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-none text-white">
            {title}
          </h1>
          <p className="text-xl lg:text-3xl mt-6 font-light text-gray-200">
            {subheading}
          </p>
          <p className="my-4 mb-12 text-gray-200">
            Sed fermentum felis ut cursu
          </p>
        </div>
        <div className="lg:w-2/5 px-2 lg:px-6 pb-16">
          <CTA />
        </div>
      </div>
    </section>

    {/* Features / Services */}
    <section
      id="features"
      className="py-10 lg:pb-16 lg:pt-12 px-2 md:px-4 lg:px-12"
    >
      <div className="lg:flex mb-4 rounded-lg border border-solid">
        <div className="lg:w-2/5 xl:1/6 flex-grow-0">
            <img
              className="m-0 lg:mr-4 rounded-lg rounded-r-none object-center lg:object-fill h-0 lg:h-full"
              src="https://picsum.photos/800/300"
            />
        </div>
        <div className="flex-grow lg:items-stretch lg:w-3/5 xl:5/6 px-6 lg:px-8 py-4 " >
          <h2 className="text-center lg:text-left text-3xl lg:text-4xl font-semibold">
            {mainpitch.title}
          </h2>
          <h2 className="text-center lg:text-left text-md lg:text-md font-semibold mt-1 text-gray-600">
            {mainpitch.description}
          </h2>
          <FeatureList featureItems={features}/> 
        </div>
      </div>
    </section>

    <section id="testimonial" className="lg:pb-16 px-2 md:px-4 lg:px-24">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold">Trusted by many</h1>
      </div>

      <div className="max-w-sm w-full lg:max-w-full lg:flex my-4">
        <div className="border border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-4">
            <p className="text-gray-900 font-semibold font-italic text-base">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil"
            </p>
          </div>
          <div className="text-md text-right">
            <p className="text-gray-700 leading-none ">Jonathan Reinink</p>
          </div>
        </div>
      </div>

      <div className="max-w-sm w-full lg:max-w-full lg:flex my-4">
        <div className="border border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-4">
            <p className="text-gray-900 font-semibold font-italic text-base">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil"
            </p>
          </div>
          <div className="text-md text-right">
            <p className="text-gray-700 leading-none ">Jonathan Reinink</p>
          </div>
        </div>
      </div>

      <div className="max-w-sm w-full lg:max-w-full lg:flex my-4">
        <div className="border border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-4">
            <p className="text-gray-900 font-semibold font-italic text-base">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil"
            </p>
          </div>
          <div className="text-md text-right">
            <p className="text-gray-700 leading-none ">Jonathan Reinink</p>
          </div>
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
          title_text
          subtitle_text
        }
      }
    }
  }
`;
