import { useState } from "react";


import { AnimeProps } from "../interfaces/AnimeProps";
import AnimeForm from "../components/AnimeForm";
import ListofAnime from "../components/ListofAnime";
import DrawerFilters from "../components/DrawerFilters";


function Home() {

    const [animeList, setAnimeList] = useState<AnimeProps["animeList"]>([]);

    return (
        <>
            <div className="AnimeForm" style={{ textAlign: "center" }}>
                <AnimeForm animeList={animeList} setAnimeList={setAnimeList} />
            </div>
            <div style={{ position: 'absolute', paddingTop: 15, paddingLeft: 150 }}><DrawerFilters /></div>
        </>
    )
}

export default Home



