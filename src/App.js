import "./App.css";
import React, { useState } from "react";


export default function App() {
  var cine = [
    {
      pic: "https://www.looper.com/img/gallery/why-the-professor-from-money-heist-looks-so-familiar/intro-1587390568.jpg",
      cname: "Professor",
      rname: "Alvaro Morte",
      birth: "23 February 1975 (age 46 years)",
      place: "Algeciras"
    },
    {
      pic: "https://pbs.twimg.com/media/DWbVdrFWkAA0A2k.jpg",
      cname: "Berlin",
      rname: "Pedro Alonso",
      birth: "21 June 1971 (age 50)",
      place: "Vigo, Spain"
    },
    {
      pic: "https://wallpaperaccess.com/full/6908401.jpg",
      cname: "Tokyo",
      rname: "Ursula Corbero",
      birth: "11 August 1990 (age 32 years)",
      place: " Barcelona"
    },
    {
      pic: "https://www.brandsynario.com/wp-content/uploads/2020/05/nairobi.jpg",
      cname: "Nairobi",
      rname: "Alba Fores",
      birth: "27 October 1986 (age 34 years)",
      place: "Spain"
    },
    {
      pic: "https://img.buzzfeed.com/buzzfeed-static/static/2021-01/15/6/enhanced/f1378ca0eb52/enhanced-11169-1610692248-6.png?crop=482:481;69,0&output-format=jpg&output-quality=auto",
      cname: "Denver",
      rname: "Jamie Lorente",
      birth: "12 December 1991 (age 29)",
      place: "Spain"
    }
  ];
  return (
    <div className="App">
      {cine.map((a) => 
        
          <Movies
            pic={a.pic}
            cname={a.cname}
            rname={a.rname}
            birth={a.birth}
            place={a.place}
          />
        
      )}
    </div>
  );
}
function Movies({ pic, cname, rname, birth, place }) {
  return (
    <div className="card">
      <img src={pic} alt="PROFILE PICTURE" />
      <h2>{cname} </h2>
      <h2>{rname}</h2>
      <h2>{birth} </h2>
      <h2>{place} </h2>
      <Support />
    </div>
  );
}

function Support() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}> ❤ {like} </button>
      <button onClick={() => setDislike(dislike + 1)}> 💔 {dislike} </button>
    </div>
  );
}
