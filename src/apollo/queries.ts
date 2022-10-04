import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Products {
    products @rest(type: "Product", path: "/") {
      id
      description
    }
  }
`;
