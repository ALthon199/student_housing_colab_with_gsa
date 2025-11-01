import { useEffect, useState } from "react";
import "./App.css";
import supabase from "./supabase-client";
import Listing from './listing.tsx'
import type { Database } from './database.types'

type Location = Database['public']['Tables']['dummy_rental_data']['Row']


function App() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getLocations(){
      const {data, error} = await supabase
      .from('dummy_rental_data')
      .select('*');
      if (error){
        console.error('Error Fetching Data',error);
      }
      else if (data){
        setLocations(data);
      }
      setloading(false)
    }
    getLocations();}
    , []
  ) 


  if (loading){ 
    <p>Loading...</p>
  }
  else{
     return (
    <div className="app">
      <div className="listings-container">
        {locations.map((location) => (
          <Listing
            key={location.id}
            location={location}
          />
        ))}
      </div>
    </div>
  );
}
}
export default App
