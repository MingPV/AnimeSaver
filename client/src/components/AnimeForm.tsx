import { useState, FC, ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import axios from "axios";

import { AnimeProps } from "../interfaces/AnimeProps";

interface Props {
    animeList: AnimeProps["animeList"],
    setAnimeList: Dispatch<SetStateAction<AnimeProps["animeList"]>>
}

interface Anime {
    animeName: string;
    point: number;
    _id: number;
}

const AnimeForm: FC<Props> = ({ animeList, setAnimeList }) => {
    const url = "http://localhost:3000/recieveForm";

    const [name, setName] = useState("");
    const [point, setPoint] = useState<AnimeProps | any>(0);

    const [animes, setanimes] = useState<Anime[]>([]);

    useEffect(() => {
        getdata3();
    })

    const setNameinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const setPointinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPoint(event.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name) {
            alert("please enter anime name")
            return;
        }

        const animeData = { name, point }

        axios.post(url, {
            name: name,
            point: point
        }).then(res => {
            console.log(res.data)
        })

        setAnimeList([...animeList, animeData])
        setName("");
        setPoint(0);

        getdata3(); // for refresh data

    }

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
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} name="name" onChange={setNameinputHandler} placeholder="Anime name" />
                <input type="number" value={point} name="point" onChange={setPointinputHandler} placeholder="point" />
                <div><button type="submit">Save</button></div>
            </form>
            <br />
            <br />
            <div>
                <ul>
                    {animelist}
                </ul>
            </div>
        </>
    )
}

export default AnimeForm;


