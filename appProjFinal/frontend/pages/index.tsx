import BottomButton from "./components/BottomButton";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "@/graphql/queries";

export default function Home({categories}) {
  console.log(categories);
  return (
    <>
      <Menu />
      <Sidebar />
      {/*<Image src="/images/bg_inicio.jfif" backgroundSize={"cover"} h="80vh" w="100vw" alt="Logo" />*/}
      <BottomButton />
    </>
  );
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_CATEGORIES,
  });

  return {
    props: {
      categories: data.categories.data,
    },
  };
}
