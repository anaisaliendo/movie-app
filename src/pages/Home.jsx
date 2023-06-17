import React, { useEffect, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/Movies/MovieCard';
import ("../pages/styles/home.css")

const Home = () => {

    const { movies, genres } = useSelector(state => state);
    const [moviesFiltered, setMoviesFiltered] = useState([]);
    const [showOptions, setShowOptions] = useState(true);
    useEffect(() => setMoviesFiltered(movies), [movies]);

    const filterMovies = (itemId, itemFilter) => {
        const filtered = movies.filter(movie =>
            movie[itemFilter].some(item => item.id === itemId)
        )
        setMoviesFiltered(filtered);
        setShowOptions(false);
    };

    const handleFilter = () =>{
        setShowOptions(!showOptions);
    }
    const navigate = useNavigate();

    return (
        <Row>
            <Col md={3} xl={2}>
                <h3 onClick={handleFilter} className='filter__btn'>Filter by Genre</h3>
                {!showOptions && (
                    <ul className={`filter-options ${showOptions ? 'show' : ''}`}>
                {genres.map(genre => (
                    <li
                        key={genre.id}
                        className="filter-option"
                        onClick={() => filterMovies(genre.id, "genres")}
                    >
                        {genre.name}
                    </li>
                ))}
                </ul>
                )}
            </Col>
            <Col>
                <div className="d-flex justify-content-between align-items-start mb-4">
                    <h1>Movies</h1>
                    <Button
                        onClick={() => navigate("/movies/add")}
                        variant="success"
                    >
                        Add movie
                    </Button>
                </div>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {
                        moviesFiltered.map(movie => (
                            <MovieCard
                                movie={movie}
                                key={movie.id}
                            />
                        ))
                    }
                </Row>
            </Col>
        </Row>
    );
};

export default Home;