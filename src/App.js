import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { Registration } from "./component/Registration";
import { Login } from "./component/Login";

function App() {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      {/* {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
        </div>
      ))} */}

      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.username}
        </div>
      ))}
      <Registration />
      {user ? <input type="button" value="logout" /> : <Login />}
    </div>
  );
}

export default App;
