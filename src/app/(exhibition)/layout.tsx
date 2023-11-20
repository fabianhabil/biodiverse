'use client';

import { ExhibitionContextProvider } from '@/contexts/ExhibitionContext/ExhibitionContext';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <ExhibitionContextProvider>{children}</ExhibitionContextProvider>
        </>
    );
}
