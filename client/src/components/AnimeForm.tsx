import { useState, FC, ChangeEvent, Dispatch, SetStateAction } from "react";
import axios from "axios";

import { AnimeProps } from "../interfaces/AnimeProps";

import { colors, TextField } from "@mui/material"
import Button from '@mui/joy/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        setPoint("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" value={name} name="name" onChange={setNameinputHandler} placeholder="Anime name" /> */}
                <div><TextField id="standard-basic" label="Anime name" variant="standard" value={name} name="name" type="text" onChange={setNameinputHandler} /></div>
                {/* <div><TextField id="standard-basic" label="point" variant="standard" value={point} name="point" type="number" onChange={setPointinputHandler} /></div> */}
                <div style={{ paddingTop: 15 }}>
                    <Button color="primary"
                        disabled={false}
                        loading={false}
                        type="submit"
                        size="sm"
                        variant="soft"
                        startDecorator={<FavoriteIcon fontSize="inherit" />}>
                        Save
                    </Button>
                </div>
            </form>
        </>
    )
}

export default AnimeForm;


