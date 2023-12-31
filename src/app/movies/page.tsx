import Search from './search'
import { fetchMovies } from './actions'
import InfiniteScrollMovies from './infinite-scroll-movies'
import { v4 as uuid } from 'uuid'

export default async function Page({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined

  const movies = await fetchMovies({ search })

  // console.log(movies)

  return (
    <section className='py-24'>
      <div className='container'>
        <div className='mb-12 flex items-center justify-between gap-x-16'>
          <h1 className='text-3xl font-bold'>Movies</h1>

          <div className='grow'>
            <Search search={search} />
          </div>
        </div>

        {/* 
            Note that we add a key to the ul below to work around the router cache. 
            Each time the user searches for something new, we want to update the ul.
        */}

        <ul
          key={uuid()}
          role='list'
          className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'
        >
          <InfiniteScrollMovies search={search} initialMovies={movies} />
        </ul>
      </div>
    </section>
  )
}
