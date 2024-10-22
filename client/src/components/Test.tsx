import { useEffect, useState } from "react";
import axios from "axios";

interface Anime {
  animeName: string;
  point: number;
  description: string;
  _id: number;
}

function Test() {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [name2, setname2] = useState();
  const [age2, setage2] = useState();
  const [animes, setanimes] = useState<Anime[]>([]);

  useEffect(() => {
    getdata3();
  });

  async function getdata() {
    const data = await fetch("http://localhost:3003/").then((r) => r.json());
    setname(data.name);
    setage(data.age);
    // console.log(data);
  }
  async function getdata2() {
    const data = await fetch("http://localhost:3003/abc").then((r) => r.json());
    setname2(data.name);
    setage2(data.age);
    // console.log(data);
  }

  async function getdata3() {
    const data = await fetch("http://localhost:3003/AnimeList").then((r) =>
      r.json()
    );
    setanimes(data.doc);
  }

  const handleDelete = (id: number) => {
    const url = "http://localhost:3003/deleteAnime";
    console.log(id);
    axios
      .post(url, {
        deleteId: id,
      })
      .then((res) => {
        console.log(res.data);
      });
    getdata3(); // for refresh data
  };

  const animelist = animes.map((anime, index) => {
    return (
      <>
        <div key={index}>
          <li>{anime.animeName}</li>
          <button onClick={() => handleDelete(anime._id)}>delete</button>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <button onClick={getdata}>Get your data</button>
        <p>name : {name}</p>
        <p>age : {age}</p>
      </div>
      <div>
        <button onClick={getdata2}>Get your data2</button>
        <p>name : {name2}</p>
        <p>age : {age2}</p>
      </div>
      <div>
        <button onClick={getdata3}>Get your data3</button>
        <ul>{animelist}</ul>
      </div>
    </>
  );
}

export default Test;
