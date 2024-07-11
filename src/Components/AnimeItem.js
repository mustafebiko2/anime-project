import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

// Function component for rendering details of a specific anime item
function AnimeItem() {
    // Accessing parameters from the URL
    const { id } = useParams()

    // State variables for storing anime details and characters
    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState([])
    const [showMore, setShowMore] = React.useState(false)

    // Destructuring anime details for easier access
    const {
        title, synopsis, trailer, duration, aired,
        season, images, rank, score, scored_by, popularity,
        status, rating, source
    } = anime

    // Function to fetch anime details from the API
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    // Function to fetch characters of the anime from the API
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
    }

    // Fetch anime details and characters when component mounts
    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [])

    // JSX for rendering anime details, trailer, and characters
    return (
        <AnimeItemStyled>
            <h1>{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="image">
                        <img src={images?.jpg.large_image_url} alt="" />
                    </div>
                    <div className="anime-details">
                        {/* Displaying various details of the anime */}
                    </div>
                </div>
                <p className="description">
                    {/* Displaying anime synopsis with 'Read More' button */}
                </p>
            </div>
            <h3 className="title">Trailer</h3>
            <div className="trailer-con">
                {/* Displaying anime trailer if available */}
            </div>
            <h3 className="title">Characters</h3>
            <div className="characters">
                {/* Displaying characters of the anime */}
            </div>
        </AnimeItemStyled >
    )
}

// Styling for the AnimeItem component
const AnimeItemStyled = styled.div`
    /* CSS styles for the component */
`;

export default AnimeItem
