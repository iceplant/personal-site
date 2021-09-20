import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
// import { listPlants } from "../api/queries";
// import { processOrder } from "../api/mutations";

const PlantContext = React.createContext();

const PlantProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPlants();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      // await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPlants = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        // query: listPlants,
        authMode: "API_KEY"
      });
      const plants = data.listplants.items;
      const featured = plants.filter((plant) => {
        return !!plant.featured;
      });
      setPlants(plants);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PlantContext.Provider value={{ plants, featured, loading, checkout }}>
      {children}
    </PlantContext.Provider>
  );
};

export { PlantContext, PlantProvider };