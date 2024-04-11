import { useState } from "react";


import { AnimeProps } from "../interfaces/AnimeProps";
import AnimeForm from "../components/AnimeForm";

function Form() {

    const [animeList, setAnimeList] = useState<AnimeProps["animeList"]>([]);

    return (
        <>
            <div>
                <AnimeForm animeList={animeList} setAnimeList={setAnimeList} />
            </div>
        </>
    )
}

export default Form



