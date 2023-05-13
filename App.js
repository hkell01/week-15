import logo from './logo.svg';
import "./App.css";
import data from "./mock-data.json";
const App = () => {
  
   return <div classNsme="app-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Addres</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hayden Kelley</td>
          <td>1850 rd 49</td>
          <td>222-444-333</td>
          <td>hk@gmail.com</td>
        </tr>
      </tbody>
    </table>
   </div>;
};

export default App;
