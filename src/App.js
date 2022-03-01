
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function App() {
  const [reci, setReci] = useState([
    {
      id: "1000",
      picture: `https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-11.jpg`,
      name: "Chicken tandoori"
    },
    {
      id: "1001",
      picture:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
      name: "Panner butter masala"
    },
    {
      id: "1002",
      picture:
        "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
      name: "Briyani"
    },
    {
      id: "1003",
      picture:
        "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
      name: "Parotta shawarma"
    }
  ]);
  return (
    <div className="App">
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/kk">Receipes</Link>
      </div>

      <div>
        <Link to="/add">Add</Link>
      </div>
      <Switch>
        <Route path="/kk/:id">
          <Nob reci={reci} setReci={setReci} />
        </Route>

        <Route path="/kk">
          <Receipes reci={reci} setReci={setReci} />;
        </Route>

        <Route path="/add">
          <AddData reci={reci} setReci={setReci} />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}
function Welcome() {
  const mes = "WELCOME BACK😳😳😳🥵";
  return (
    <div>
      <h1> {mes}</h1>
    </div>
  );
}

function Receipes({ reci, setReci }) {
  return (
    <div>
      {reci.map((a, i) => (
        <Recip reci={reci} setReci={setReci} a={a} b={i} />
      ))}
    </div>
  );
}
function Recip({ a, b, reci, setReci }) {
  function del(b) {
    const recicop = [...reci];
    recicop.splice(b, 1);
    setReci(recicop);
  }
  const history = useHistory();
  return (
    <div className="card">
      <img src={a.picture} alt="Logo" />
      <div>{a.name}</div>
      <button onClick={() => history.push(`/kk/${b}`)}>
        <h1>📝</h1>
      </button>
      <button onClick={() => del(b)}>
        <h1>🚫</h1>
      </button>
    </div>
  );
}
function AddData({ reci, setReci }) {
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  return (
    <div>
      <input
        type="text"
        onChange={(j) => setPic(j.target.value)}
        placeholder="pic link"
        name="name"
      />
      <input
        type="text"
        onChange={(j) => setName(j.target.value)}
        placeholder="receipe name"
        name="name"
      />
      <button
        onClick={() => {
          setReci([
            ...reci,
            {
              picture: pic,
              name: name
            }
          ]);
          history.push("/kk");
        }}
      >
        ADD
      </button>
    </div>
  );
}
function Nob({ reci, setReci }) {
  let { id } = useParams();
  const [pice, setPice] = useState(reci[id].picture);
  const [namee, setNamee] = useState(reci[id].name);
  const history = useHistory();
  function you(id) {
    const recicopy = [...reci];
    recicopy[id] = {
      picture: pice,
      name: namee
    };
    setReci(recicopy);
    history.push("/kk");
  }

  return (
    <div>
      <input
        type="text"
        onChange={(j) => setPice(j.target.value)}
        placeholder="pic link"
        name="name"
      />
      <input
        type="text"
        onChange={(j) => setNamee(j.target.value)}
        placeholder="receipe name"
        name="name"
      />
      <button onClick={() => you(id)}>edit</button>
    </div>
  );
}
