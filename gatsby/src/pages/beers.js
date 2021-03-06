import React from 'react';
import { graphql } from 'gatsby';
import BeerList from '../components/BeerList';
import SEO from '../components/SEO';

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  return (
    <>
      <SEO title={`Beers! We have ${data.beers.nodes.length} in stock`} />
      <h2 className="center">
        We have {beers.length} Beers Available. Dine in Only!
      </h2>
      <BeerList beers={beers} />
    </>
  );
}

export const query = graphql`
  query BeersQuery {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          reviews
          average
        }
      }
    }
  }
`;
