import { IconButton } from "@mui/material";
import { PlusOne } from "@mui/icons-material";
import { useContext, useState, createContext, type Dispatch, type SetStateAction, memo } from "react";

type State<T> = [T, Dispatch<SetStateAction<T>>];
const Counter = createContext<State<number>>([0, () => {}]);
function useCounter() {
  return useContext(Counter);
}

function UpdateCounter() {
  const [, setCount] = useCounter();
  return (
    <IconButton onClick={() => setCount((x) => x + 1)}>
      <PlusOne />
    </IconButton>
  );
}
export default function Play() {
  return (
    <div className="justify-center items-center flex h-[100vh] gap-4">
      <Counter.Provider value={useState(0)}>
        <Hello />
        <UpdateCounter />
      </Counter.Provider>
    </div>
  );
}
let c = 0;

const Hello = memo(function Hello() {
  console.log("rendering", ++c, Hello.name);
  return <World />;
});

function World() {
  const [count] = useCounter();
  return <input readOnly className="text-2xl outline-none w-12 text-center" value={count} />;
}
