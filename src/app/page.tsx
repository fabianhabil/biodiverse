'use client';

import { Button } from '@/components/ui/button';
import WindowSize from '@/hooks/windowSize';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function IndexPage() {
    const windowSize = WindowSize();
    const router = useRouter();

    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(() => true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div
                className={
                    'relative h-screen w-screen overflow-hidden overscroll-none bg-[#F6EFE7]'
                }
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: `${windowSize.innerHeight}px`,
                        zIndex: 10,
                        aspectRatio: 1,
                        backgroundPosition: 'absolute',
                        backgroundColor: '#F6EFE7'
                    }}
                    className='scale-[1.9] sm:scale-[1.25] md:scale-[1.4] lg:scale-[.85]'
                    src='/video/biodiverse.mp4'
                />
                {/* <p className='absolute right-[27%] top-[65%] z-10 w-max -translate-x-1/2 -translate-y-1/2 text-center font-livvic font-semibold text-black md:top-[72%] lg:top-[67%] lg:text-xl'>
                    An Interactive Exhibition
                </p> */}
                <p className='absolute left-1/2 top-[62%] z-10 w-max -translate-x-1/2 -translate-y-1/2 text-center font-livvic text-xl font-semibold text-[#5A1669] sm:text-2xl md:top-[72%] lg:top-[71%] lg:text-3xl'>
                    Embrace Your Entrepreneurial Journey
                </p>
                <div
                    className={
                        'absolute z-20 flex w-full flex-col items-center justify-between py-8'
                    }
                    style={{ minHeight: `${windowSize.innerHeight}px` }}
                >
                    <div className='flex flex-row items-start gap-8 px-8'>
                        <Image
                            src='/logo/binus.png'
                            className='h-auto w-[100px]'
                            sizes='100vw'
                            width={0}
                            height={0}
                            alt='logo binus'
                        />
                        <Image
                            src='/logo/bec.png'
                            className='h-auto w-[103px]'
                            sizes='100vw'
                            width={0}
                            height={0}
                            alt='logo binus'
                        />
                        <Image
                            src='/logo/pulitzer.png'
                            className='h-auto w-[150px]'
                            sizes='100%'
                            width={0}
                            height={0}
                            alt='logo binus'
                        />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <Button
                            className='rounded-[30px] bg-[#727902] p-6 font-livvic text-lg font-bold text-white hover:bg-[#727902]/80 sm:px-12 sm:text-xl md:p-8 md:px-16 md:text-2xl'
                            onClick={() => router.replace('/exhibition')}
                        >
                            Get Started!
                        </Button>
                        <p className='text-center font-livvic text-xs font-bold md:text-base'>
                            The Innovation Idea Summit 2023 <br />
                            BINUS Entrepreneurship Center @Bandung
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
