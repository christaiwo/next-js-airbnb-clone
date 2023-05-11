import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";


interface IParams {
    listingId?: string
}

const ListingPage = async({ params }: { params: IParams }) => {
    const listing = await getListingById(params);

    if(!listing){
        return(
            <ClientOnly>
                
            </ClientOnly>
        )
    }
    return (  
        <div>
            {listing?.title}
        </div>
    );
}
 
export default ListingPage;