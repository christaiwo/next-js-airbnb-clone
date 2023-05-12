import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

const FavoritesPage = async() => {


    return (  
        <ClientOnly>
            <EmptyState title="No favorites" subtitle="Looks like you have no favorite listings" />
            
        </ClientOnly>
    );
}
 
export default FavoritesPage;