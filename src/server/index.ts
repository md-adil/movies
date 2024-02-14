import { type GetServerSidePropsContext as Context } from "next";

type Callback<T> = (context: Context) => Promise<T>;
export function server<T>(callback: Callback<T>) {
  return async function getServerSideProps(ctx: Context) {
    const props = await callback(ctx);
    return { props };
  };
}
