import { useState, FC, ChangeEvent, Dispatch, SetStateAction } from "react";

import { AnimeProps } from "../interfaces/AnimeProps";

import { TextField } from "@mui/material"
import SubmitModal from "./SubmitModal";


interface Props {
    animeList: AnimeProps["animeList"],
    setAnimeList: Dispatch<SetStateAction<AnimeProps["animeList"]>>
}

const AnimeForm: FC<Props> = ({ animeList, setAnimeList }) => {

    const [name, setName] = useState("");
    // const [namepass, setNamepass] = useState("");

    const setNameinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        // setNamepass(event.target.value);
        //console.log(name)
    }

    return (
        <>
            <div>
                {/* <input type="text" value={name} name="name" onChange={setNameinputHandler} placeholder="Anime name" /> */}
                <div><TextField id="standard-basic" label="Anime name" variant="standard" value={name} name="name" type="text" onChange={setNameinputHandler} /></div>
                {/* <div><TextField id="standard-basic" label="point" variant="standard" value={point} name="point" type="number" onChange={setPointinputHandler} /></div> */}
                <div style={{ paddingTop: 15 }} onClick={() => { }}>
                    <SubmitModal animeList={animeList} setAnimeList={setAnimeList} animeName={name} setNameInForm={setName} />
                </div>

            </div>
        </>
    )
}

export default AnimeForm;


