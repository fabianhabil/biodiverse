'use client';

import { Button } from '@/components/ui/button';
import WindowSize from '@/hooks/windowSize';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function IndexPage() {
    const windowSize = WindowSize();
    const router = useRouter();

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(() => true);
        (window as any).scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    // if (!mounted) return null;

    return (
        <>
            <div
                className={
                    'relative min-h-screen w-screen overflow-hidden overscroll-none bg-[#F6EFE7]'
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
                        height: !windowSize?.innerHeight
                            ? '100vh'
                            : `${windowSize?.innerHeight}px`,
                        zIndex: 10,
                        aspectRatio: 1,
                        backgroundPosition: 'absolute',
                        backgroundColor: '#F6EFE7'
                    }}
                    className='scale-[1.9] sm:scale-[1.25] md:scale-[1.4] lg:scale-[.85]'
                    src='/video/biodiverse.mp4'
                />
                <div className='absolute left-1/2 top-[65%] z-10 flex w-max -translate-x-1/2 -translate-y-1/2 flex-col md:top-[72%] lg:top-[71%]'>
                    <p className='ml-auto font-acumin'>
                        an Interactive Exhibition
                    </p>
                    <p className='text-center font-acumin text-xl font-semibold text-[#5A1669] sm:text-2xl lg:text-3xl'>
                        Embrace Your Entrepreneurial Journey
                    </p>
                </div>
                <div
                    className={
                        'absolute z-20 flex w-full flex-col items-center justify-between py-8'
                    }
                    style={{
                        minHeight: !windowSize?.innerHeight
                            ? '100vh'
                            : `${windowSize?.innerHeight}px`
                    }}
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
                            className='rounded-[30px] bg-[#639F55] p-6 font-acumin text-lg font-bold text-white hover:bg-[#639F55]/80 sm:px-12 sm:text-xl md:p-8 md:px-16 md:text-2xl'
                            onClick={() => router.replace('/exhibition')}
                        >
                            Get Started!
                        </Button>
                        <p className='text-center font-acumin text-xs font-bold md:text-base'>
                            The Innovation Idea Summit 2023 <br />
                            BINUS Entrepreneurship Center @Bandung
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
