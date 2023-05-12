'use client'

import { useRouter } from "next/navigation"
import Container from "../components/Container"
import Heading from "../components/Heading"
import { SafeReservation, SafeUser } from "../types"
import { useCallback, useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"

interface ReservationsClientProps {
    reservations: SafeReservation[],
    currentUser: SafeUser | null,
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({reservations, currentUser}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`).then(() => {
            toast.success('Reservation cancelled');
            router.refresh();
        }).catch((error) => {
            toast.error('Something went wrong');
        }).finally(() => {
            setDeletingId('');
        });
    }, [router]);

    return (
        <Container>
            <Heading title="Reservations" subtitle="Bookings on your properties" />

        </Container>
    )
}

export default ReservationsClient