import { Container, Input } from "@mui/material";
import { useRouter } from "next/router";
import qs from "../libs/qs";
import {css} from "@emotion/css";
import { Search } from "@mui/icons-material";

export function SearchBox() {
    const router = useRouter();
    const handleSubmit = (e: any) => {
      e.preventDefault();
      router.push(`?${qs.stringify({keywords: e.target.keywords.value })}`);
    }
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <button type="submit" style={{display: 'none'}}></button>
          <div className={css`text-align: right;padding: 1rem 0;padding-bottom: 0;`}>
            <Input name="keywords" placeholder="Search by movie title"
                endAdornment={<Search />}
            defaultValue={router.query.keywords}/>
          </div>
        </form>
      </Container>
    )
  }
  