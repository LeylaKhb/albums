import React, {useState} from "react";
import "../styles/album.css";
import {albumsList} from "../constants/albumsList";
const Albums: React.FC = () => {
    const [songsVisible, setSongsVisible] = useState(albumsList.map(() => false));

    function handleAlbumClick(index: number) {
        let copy = Object.assign([] as boolean[], songsVisible);
        copy[index] = !copy[index];
        setSongsVisible(copy);
    }

    return (
        <div className="albums_div">
            {albumsList.map((album, index) => (
                <div className="album_column">
                    <img src={album.image} alt="album cover" className="album_image"/>
                    <div onClick={() => handleAlbumClick(index)} style={{cursor: "pointer"}}>
                        <div className="album_title">{album.title}</div>
                        <div className="album_singer">{album.singer}</div>
                    </div>
                    <div className="album_song" style={{maxHeight: songsVisible.at(index) ? album.songs.length * 20 : 0}} >
                        {album.songs.map((song, index) => (
                            <div>
                                {index + 1}. {song}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Albums;