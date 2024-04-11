import { useState } from "react";


import { AnimeProps } from "../interfaces/AnimeProps";
import AnimeForm from "../components/AnimeForm";
import ListofAnime from "../components/ListofAnime";
import videoBG from '../assets/videoBG.mp4'


function Home() {

    const [animeList, setAnimeList] = useState<AnimeProps["animeList"]>([]);

    return (
        <>
            <div className="AnimeForm" style={{ textAlign: "center" }}>
                <AnimeForm animeList={animeList} setAnimeList={setAnimeList} />
            </div>
            <div><ListofAnime /></div>
        </>
    )
}

export default Home



