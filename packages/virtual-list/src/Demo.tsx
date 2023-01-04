import { useEffect, useRef, useState } from "react";

interface AnimationConfig {
  duration?: number
}

const useAnimate = (start: string, to: string, config?: AnimationConfig) => {
  const duration = config?.duration ?? 100
  const [value, setValue] = useState(start)
  const timerRef = useRef<NodeJS.Timer | null>(null)

  const r = useRef<HTMLAudioElement>(null)
  r.current?.play()

  const handleChangeExcessive = () => {
    timerRef.current = setInterval(() => {
      if (value === to && timerRef.current)
        clearInterval(timerRef.current)

      setValue(to.slice(0, value.length + 1))
    }, duration)
  }

  return [value, handleChangeExcessive]
}

function useLatest<T>(value: T) {
  console.log('useLatest');
  
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

const C = (props: { fn: () => void }) => {
  const { fn } = props;
  const timerRef = useRef<any>(null)
  const fnRef1 = useLatest(fn)
  const fnRef2 = useRef(fn)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      // fn()
      fnRef1.current()
      // fnRef2.current()
    }, 1000)
  }, [])

  return <h1></h1>;
};

const F = () => {
  const [count, setCount] = useState(1);


  return (
    <>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <h1>{count}</h1>
      <C fn={count % 2 === 0 ? () => console.log(2) : () => console.log(1)} />
    </>
  );
};


export default F