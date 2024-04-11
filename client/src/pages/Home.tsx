import { useState } from "react";


import { AnimeProps } from "../interfaces/AnimeProps";
import AnimeForm from "../components/AnimeForm";
import ListofAnime from "../components/ListofAnime";


function Home() {

    const [animeList, setAnimeList] = useState<AnimeProps["animeList"]>([]);

    return (
        <>
            <div><a href="/Home">Back to Home</a></div>
            <br />
            <div className="AnimeForm" style={{ textAlign: "center", paddingTop: 250 }}>
                <AnimeForm animeList={animeList} setAnimeList={setAnimeList} />
            </div>
            <div><ListofAnime /></div>

        </>
    )
}

export default Home



