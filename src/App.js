import React, { useState } from "react";
import BlogWebsite from "./BlogWebsite";
import DanceWebsite from "./Dance";
import DevWebsite from "./DevWebsite";
import PlantShopWebsite from "./PlantShop/PlantShopWebsite";

function App() {
  const [page, setPage] = useState("Dev");
  const views = {
    Dev: <DevWebsite setPage={setPage} />,
    Blog: <BlogWebsite setPage={setPage} />,
    Dance: <DanceWebsite setPage={setPage} />,
    PlantShop: <PlantShopWebsite setPage={setPage} />,
  };
  return views[page];
}

export default App;
