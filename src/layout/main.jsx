import React from 'react';
import { Search } from '../components/search';
import { Movies } from '../components/Movies';

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=4f92b104&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}));
    }

    searchMovies = (str, type = "all") => {
        fetch(`http://www.omdbapi.com/?apikey=4f92b104&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    render() {
        const { movies, loading } = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {loading ? <div class="progress">
                <div class="indeterminate"></div>
            </div> : <Movies movies={this.state.movies} />} 
    </main>
    }
}

export { Main };