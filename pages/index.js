import Head from 'next/head'
import Hero from '../components/Hero'
import { server } from '../config'
import axios from "axios";
import PopularMovies from '../components/PopularMovies';

export default function Home({movies}) {
  return (
      <main>
        <Hero />
        <PopularMovies movies={movies.results}/>
      </main>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}