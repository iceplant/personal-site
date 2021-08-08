
import React, { useState } from 'react';
import BlogWebsite from './BlogWebsite';
import DevWebsite from './DevWebsite';
import PlantShopWebsite from './PlantShop/PlantShopWebsite';


function App() {
  const [page, setPage] = useState('Dev');
  const views = {'Dev' : (<DevWebsite setPage={setPage}/>), 
                'Blog' : (<BlogWebsite setPage={setPage}/>),
                // 'PlantShop' : (<PlantShopWebsite setPage={setPage}/>),
                };
  return views[page];
}

export default App;
