import React, { useState } from "react";
import Cookies from "js-cookie";

function HomePage() {
  const [data, setData] = useState([]);

  const [isError, setisError] = useState(null);

  const token = Cookies.get("token");

  fetch("http://localhost:3000/users", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((resp) => {
      if (!resp.ok) {
        setisError(resp.statusText);
      }
      return resp.json();
    })
    .then((json) => setData(json));

  if (isError) {
    return (
      <h1>error yu dont have right token {isError} {console.log(isError)}</h1>
    );
  }
  return (
    <div>
      <h1>HomePage</h1>

      <div>
        {data.map((x) => (
          <div>
            {x.email}=========
            {x.role}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
