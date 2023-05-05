import { gql } from "@apollo/client";

const GET_ALL_CATEGORIES = gql`
query Categories {
    categories {
      data{
        id
        attributes{
          name
        }
      }
    }
  }
  `;

export { GET_ALL_CATEGORIES};