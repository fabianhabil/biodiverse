'use client';

import FormWelcome from '../FormWelcome/FormWelcome';
import Pos1 from '../Pos1/Pos1';
import Pos2 from '../Pos2/Pos2';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import WindowSize from '@/hooks/windowSize';
import Image from 'next/image';
import { useContext, useEffect } from 'react';

const photoList = [
    { src: '/footer/binus.png', alt: 'Logo Binus' },
    { src: '/footer/biodiverse.png', alt: 'Logo Biodiverse' },
    { src: '/footer/text.png', alt: 'Innovation Idea' },
    { src: '/footer/pulitzer.png', alt: 'Logo Pulitzer' }
];

const ExhibitionPage = () => {
    const { initiate, pos, mounted, onGoing, resetExhibition } =
        useContext(ExhibitionContext)!;
    const windowSize = WindowSize();

    useEffect(() => {
        initiate();
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div
                style={{ minHeight: windowSize.innerHeight }}
                className='flex flex-col items-center justify-between bg-[#FFF7EF] p-4'
            >
                <div />
                {pos === 0 ? <FormWelcome windowSize={windowSize} /> : null}
                {pos === 1 ? <Pos1 /> : null}
                {pos === 2 ? <Pos2 /> : null}
                <div className='flex flex-row items-center gap-4'>
                    {photoList.map((data, index) => {
                        return (
                            <Image
                                src={data.src}
                                alt={data.alt}
                                key={index}
                                sizes='100%'
                                width={0}
                                height={0}
                                className='h-auto w-[80px]'
                            />
                        );
                    })}
                </div>
            </div>

            <AlertDialog defaultOpen={onGoing}>
                <AlertDialogContent className='bg-white font-acumin'>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Continue the exhibition?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            You currently have saved data on this exhibition, do
                            you want to continue? If exhibition is restarted all
                            the saved data will be gone!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel
                            className='bg-red-500 text-white hover:bg-red-500/80 hover:text-white'
                            onClick={resetExhibition}
                        >
                            Restart
                        </AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default ExhibitionPage;
