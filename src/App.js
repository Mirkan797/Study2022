import { useState } from "react";

function App() {
  const [visble, setVisible] = useState(false);

  return <div>
    <button onClick={() => setVisible(!visible)}>Toggle</button>
    {visible && (
      <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있습니다.</h1>
    )}
  </div>;
}

export default App;
