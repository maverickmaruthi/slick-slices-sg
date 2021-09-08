import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const SliceMasterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SlicemasterStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    transform: rotate(1deg);
    text-align: center;
  }
`;

export default function SliceMastersPage({ data, pageContext }) {
  const sliceMasters = data.sliceMasters.nodes;
  // console.log(sliceMasters);
  return (
    <>
      <SEO title={`Slicemasters - Page ${pageContext.currentPage || 1}`} />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        totalCount={data.sliceMasters.totalCount}
        base="/slicemasters"
      />
      <SliceMasterGrid>
        {sliceMasters.map((sliceMaster) => (
          <SlicemasterStyles key={sliceMaster.id}>
            <Link to={`/slicemaster/${sliceMaster.slug.current}`}>
              <h2>
                <span className="mark">{sliceMaster.name}</span>
              </h2>
            </Link>
            <Img fluid={sliceMaster.image.asset.fluid} alt={sliceMaster.name} />
            <p className="description">{sliceMaster.description}</p>
          </SlicemasterStyles>
        ))}
      </SliceMasterGrid>
    </>
  );
}

export const query = graphql`
  query sliceMastersQuery($skip: Int = 0, $pageSize: Int = 2) {
    sliceMasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        description
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
