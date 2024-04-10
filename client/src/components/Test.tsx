import { useState } from 'react'

interface Anime {
    animeName: string;
    point: number;
}

function Test() {

    const [name, setname] = useState();
    const [age, setage] = useState();
    const [name2, setname2] = useState();
    const [age2, setage2] = useState();
    const [animes, setanimes] = useState<Anime[]>([]);

    async function getdata() {
        const data = await fetch("http://localhost:3000/").then((r) => r.json());
        setname(data.name)
        setage(data.age)
        // console.log(data);
    }
    async function getdata2() {
        const data = await fetch("http://localhost:3000/abc").then((r) => r.json());
        setname2(data.name)
        setage2(data.age)
        // console.log(data);
    }

    async function getdata3() {
        const data = await fetch("http://localhost:3000/AnimeList").then((r) => r.json());
        setanimes(data.doc);
    }

    const animelist = animes.map((anime, index) => {
        return (
            <div key={index}><li>{anime.animeName}</li></div>
        );
    })


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
                <ul>
                    {animelist}
                </ul>

            </div>

        </>
    )
}

export default Test