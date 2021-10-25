import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=gb&apiKey=36cb8f0a9834410498b1a2522d2d82ac"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <button onClick={onClick}>불러오기</button>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
