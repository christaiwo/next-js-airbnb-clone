import Image from 'next/image'
import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import EmptyState from './components/EmptyState';
import getListing from './actions/getListings';
import ListingCard from './components/listings/ListingCard';
import { getCurrentUser } from './actions/getCurrentUser';

export default async function Home() {
  const listings = await getListing();
  const currentUser = await getCurrentUser();

  if(listings.length === 0){
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }
  return (
    <main>
      <ClientOnly>
        <Container>
          <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
              {listings.map((listing, id) => (
                <ListingCard key={id} data={listing} />
              ))}
          </div>
        </Container>
      </ClientOnly>
    </main>
  )
}
