import type {Database} from './database.types'
type Location = Database['public']['Tables']['dummy_rental_data']['Row']

type ListingProp = {
    location: Location
}
function Listing({location}:ListingProp){

    return (
        <div className='Listing'>
            <div className = 'image-container'>
            <img src = {location.Image_URL || ''} alt = 'Housing Picture' width = {300} height = {300}/>
            </div>  

        <div className = 'Main-info'>
            <div className = 'Primary-info'>
                <h1>Address: {location.Address} </h1>
                <h2>Cost Range: {location.Cost_Range}</h2>
                
            </div>
            <div className = 'Specific-Costs'>
                <h4>Detailed Costs</h4>
                <ul> 
                    <li>Rent: ${location.Cost_Rent}</li>
                    <li>Utilities: ${location.Cost_Utilities} </li>
                    <li>Misc: ${location.Cost_Misc}</li>
                    <li>YoY Change: {location.Change_YoY} %</li>
                </ul>
               
            </div>
            <div className = 'Utilities'>
                <h4>Utilities</h4>
                <ul> 
                    <li>Electricity: {location.Electricity ? 'Yes' : 'false'}</li>
                    <li>Water: {location.Water ? 'true' : 'false'}</li>
                    <li>Gas: {location.Gas ? 'true' : 'false'}</li>
                    <li>Internet: {location.Internet ? 'true' : 'false'}</li>
                </ul>
               
            </div>
            <div className = 'Landlord'>
                <h4>Landlord</h4>
                <ul> 
                    <li>Landlord Name: {location.Landlord}</li>
                    <li>Responsiveness (1-5): {location.Responsiveness}</li>
                </ul>
            </div>
            <div className = 'Pests'>
                <h4>Tidy</h4>
                    <ul>
                    <li>Pest History: {location.Pest_History}</li>
                    <li>Notes: {location.Pest_Notes}</li>
                    <li>Overall Cleanliness: {location.Cleanliness}</li>
                    </ul>
               
                
            </div>
            <div className = 'Amenities'>
                <h4>Amenities</h4>
                <ul>
                <li>Wifi? {location.WiFi ? 'yes' : 'no'}</li>
                <li>Bike Storage? {location.Bike_Storage ? 'yes' : 'no'}</li>
                <li>Parking? {location.Parking ? 'yes' : 'no'} </li>
                <li>Gym? {location.Gym ? 'yes' : 'no'}</li>
                </ul>
            </div>
        </div>
        </div>
    );

    
}


export default Listing