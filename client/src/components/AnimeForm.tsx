import { useState, FC, ChangeEvent, Dispatch, SetStateAction } from "react";
import axios from "axios";

import { AnimeProps } from "../interfaces/AnimeProps";

interface Props {
    animeList: AnimeProps["animeList"],
    setAnimeList: Dispatch<SetStateAction<AnimeProps["animeList"]>>
}

const AnimeForm: FC<Props> = ({ animeList, setAnimeList }) => {
    const url = "http://localhost:3000/recieveForm";

    const [name, setName] = useState("");
    const [point, setPoint] = useState<AnimeProps | any>(0);

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
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} name="name" onChange={setNameinputHandler} placeholder="Anime name" />
                <input type="number" value={point} name="point" onChange={setPointinputHandler} placeholder="point" />
                <div><button type="submit">Save</button></div>
            </form>
        </>
    )
}

export default AnimeForm;


