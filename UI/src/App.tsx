import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  type userData = {
    _id: number | string,
    Name: string, // Use the correct case
    Age: number | string,  // Use the correct case
    __v: number | string
  }

  const [data, setData] = useState<userData[]>([]); // Initialize with an empty array

  useEffect(() => {
    const api = async () => {
      await axios.get("http://localhost:4500/users")
        .then((res) => {
          console.log(res.data);
          setData(res.data); // Set state with fetched data
        })
        .catch((err) => {
          console.log(err);
        });
    }
    api();
  }, []);

  return (
    <div>
      <h2>App</h2>
      {data.map((user, id) => { // Renaming i to user for clarity
        return (
          <div key={id}>
            <h4>{user.Age}</h4> {/* Access the 'Age' property */}
            <h2>{user.Name}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
