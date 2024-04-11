import { useState, useEffect } from "react";
import axios from "axios";

interface Anime {
    animeName: string;
    point: number;
    _id: number;
}

const ListofAnime = () => {

    const [animes, setanimes] = useState<Anime[]>([]);

    useEffect(() => {
        getdata3();
    })

    async function getdata3() {
        const data = await fetch("http://localhost:3000/AnimeList").then((r) => r.json());
        setanimes(data.doc);
    }

    const handleDelete = (id: number) => {
        const url = "http://localhost:3000/deleteAnime";
        console.log(id)
        axios.post(url, {
            deleteId: id,
        }).then(res => {
            console.log(res.data)
        })
        getdata3(); // for refresh data

    }

    const animelist = animes.map((anime, index) => {
        return (
            <>
                <div key={index}>
                    <li>{anime.animeName}</li>
                    <button onClick={() => handleDelete(anime._id)}>delete</button>
                </div>

            </>
        );
    })


    return (
        <>
            <div>
                <ul>
                    {animelist}
                </ul>
            </div>
        </>
    )
}

export default ListofAnime;


