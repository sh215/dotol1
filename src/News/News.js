
//  function News() {
//    return "혜빈이언니 화이팅"
// }
// export default News;

import { useState } from 'react';
import axios from 'axios';
import NewsList from '../components/NewsList';
import Sidenav from '../navigation/Sidenav'

const News = () => {
const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1/'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div className="homepage__nav">
         <Sidenav/>
        </div>
      <div>
        <NewsList />
      </div>
      {data &&
        <textarea rows={7} cols={30} readOnly={true}
          value={JSON.stringify(data, null, 2)} />
      }

    </div>
  );
};
export default News;