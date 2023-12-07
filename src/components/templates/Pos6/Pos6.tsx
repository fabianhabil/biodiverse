'use client';

import { posInfo } from '@/components/constants/pos';
import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { Button } from '@/components/ui/button';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import Image from 'next/image';
import { useContext, useState } from 'react';

const Pos6 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const { setPos } = useContext(ExhibitionContext)!;

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={posInfo[6]}
                    callbackPasswordCorrect={() => {
                        setStepper(() => 1);
                        // setPos(7);
                        (window as any).scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                />
            ) : null}

            {stepper === 1 ? (
                <>
                    <div className='flex w-full max-w-[450px] flex-col gap-2'>
                        <Image
                            src='/pos6/poster.png'
                            alt='poster'
                            width={0}
                            height={0}
                            sizes='100%'
                            className='h-auto w-full'
                        />
                        <p className='mt-2 font-lucette text-2xl font-bold'>
                            The River Never Stops Flowing
                        </p>
                        <p className='font-acumin text-xl'>Synopsis</p>
                        <p className='text-justify font-acumin'>
                            Mandailing Jaya Coffee Cooperative (KOMANJA) is
                            developed to revive Mandailing coffee's renown and
                            champion the mitigation of environmental degradation
                            through public education about viable economic
                            alternatives. Ucok Godang and Sandi Matondang, as
                            founder of cooperative, reflects on the condition of
                            cooperative today.
                        </p>
                        <div className='mb-4 mt-2 flex flex-row flex-wrap items-center justify-center gap-4'>
                            <Image
                                src='/pos6/time1.png'
                                alt='poster'
                                width={0}
                                height={0}
                                sizes='100%'
                                className='h-auto w-auto md:w-[200px]'
                            />
                            <Image
                                src='/pos6/time2.png'
                                alt='poster'
                                width={0}
                                height={0}
                                sizes='100%'
                                className='h-auto w-auto md:w-[200px]'
                            />
                        </div>
                        <Button
                            className='flex rounded-[16px] bg-[#639F55] font-acumin hover:bg-[#639F55]/80'
                            onClick={() => {
                                setPos(7);
                            }}
                        >
                            <p className='text-lg'>Next</p>
                        </Button>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Pos6;
