import ExhibitionPage from '@/components/templates/Exhibition/Exhibition';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exhibition',
    description: 'Biodiverse Exhibition'
};

const Page = () => {
    return (
        <>
            <ExhibitionPage />
        </>
    );
};

export default Page;
