import type { NextPage } from 'next'
import { fetchList } from '../src/api'
import Layout from '../src/components/layout'
import {  useRouter} from "next/router";
import { useAsync } from 'react-use';
import Loader from '../src/components/loader';
import Movies from '../src/list';
import Center from '../src/components/center';
import { Container, Pagination } from '@mui/material';
import qs from "querystring";
import { Filters } from '../src/list/components/filters';
import { css } from '@emotion/css';
import SearchBar from '../src/list/components/search-bar';

const perPage = 74;
const Home: NextPage = (props) => {
  const router = useRouter();
  const { loading = true, value } = useAsync(() => fetchList(router.query), [router.query]);
  const handlePagination = (e: any, page: number) => {
    router.push(`?${qs.stringify({
        ...router.query,
        page
    })}`, undefined, {shallow: true})
  }
  return (
    <Layout>
      <SearchBar />
      {loading ? <Center><Loader /></Center> : <Movies list={value?.MovieList ?? []} />}
      { (value?.MovieList.length ?? 0) > perPage  && (
        <div style={{ padding: '1rem 0', display: 'flex', justifyContent: 'flex-end' }}>
            <Pagination onChange={handlePagination} count={100} page={parseInt(router.query.page as string ?? '1')} />
        </div>
      )}
    </Layout>
  )
}

export default Home
