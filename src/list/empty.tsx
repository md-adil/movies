import { useRouter } from "next/router";
import Center from "../components/center";
import box from "./box.png";
import {css} from "@emotion/css";

export default function Empty() {
    const router = useRouter();
    return (
        <Center style={{height: '600px'}}>
            <div>
                <img src={box.src} alt="Empty" className={css`max-width: 300px;`}/>
                <div className={css`text-align: center;`}>
                    The results on this Keywords {router.query.keywords} is not found.
                </div>
            </div>
        </Center>
    )
}