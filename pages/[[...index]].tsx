import type { NextPage } from "next";
import Layout from "../src/components/layout";
import { useRouter } from "next/router";
import { useAsync } from "react-use";
import Loader from "../src/components/loader";
import Movies from "../src/list";
import Center from "../src/components/center";
import { Pagination, PaginationItem } from "@mui/material";
import qs from "querystring";
import { css } from "@emotion/css";
import SearchBar from "../src/list/components/search-bar";
import { keys } from "../src/list/filters";
import { client } from "src/axios";
import type { IMovieList } from "src/list/list-service";

async function fetchList(params: any) {
  const { data } = await client.get<IMovieList[]>("/movies/", { params });
  return data;
}

const perPage = 50;
const Home: NextPage = (props) => {
  const router = useRouter();
  const { loading = true, value } = useAsync(() => fetchList(router.query), [...keys.map((x) => router.query[x])]);
  const handlePagination = (e: any, page: number) => {
    router.push(
      `?${qs.stringify({
        ...router.query,
        page,
      })}`,
      undefined,
      { shallow: true }
    );
  };
  return (
    <Layout>
      <SearchBar />
      {loading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <Movies list={value ?? []} />
      )}
      {(value?.length ?? 0) >= perPage && (
        <div className="container px-4 py-4 mx-auto flex justify-end">
          <Pagination
            className={css`
              color: #fff;
            `}
            onChange={handlePagination}
            color="primary"
            count={100}
            renderItem={(prop) => (
              <PaginationItem
                {...prop}
                className={css`
                  color: #fff;
                `}
              />
            )}
            page={parseInt((router.query.page as string) ?? "1")}
          />
        </div>
      )}
    </Layout>
  );
};

export default Home;
