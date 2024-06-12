import { useState } from "react";
import Content from "./Content";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Content page={page} />
      <div>
        <ul>
          <li
            onClick={() => { setPage("Home") }}
            style={{ cursor: "pointer" }}>Home</li>
          <li
            onClick={() => { setPage("About") }}
            style={{ cursor: "pointer" }}>About</li>
          <li
            onClick={() => { setPage("Products") }}
            style={{ cursor: "pointer" }}>Products</li>
        </ul>
      </div>
    </>
  );
}

export default App;
