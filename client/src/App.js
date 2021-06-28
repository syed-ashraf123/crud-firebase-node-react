import Axios from "axios";
import { useEffect, useState } from "react";
const URL = "http://localhost:4000";
function App() {
  const [data, setDate] = useState([]);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [college, setCollege] = useState(null);
  useEffect(async () => {
    var res = await Axios.get(URL);
    res = res.data;
    setDate(res);
  }, [URL]);
  const create = () => {
    const data = {
      name: name,
      age: age,
      college: college,
    };
    Axios.post(URL + "/create", data);
  };

  const deleteData = (id) => {
    const data = {
      id: id,
    };
    Axios.post(URL + "/delete", data);
  };
  return (
    <div className="App">
      Name :
      <input onChange={(e) => setName(e.target.value)} />
      <br />
      Age :
      <input onChange={(e) => setAge(e.target.value)} />
      <br />
      College :
      <input onChange={(e) => setCollege(e.target.value)} />
      <br />
      <button onClick={() => create()}>Create</button>
      {data.map((data) => (
        <>
          <p>Name=={data.name}</p>
          <p>Age=={data.age}</p>
          <p>College=={data.college}</p>
          <button onClick={() => deleteData(data.id)}>Delete</button>
          <hr />
        </>
      ))}
    </div>
  );
}

export default App;
