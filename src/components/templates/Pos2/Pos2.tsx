'use client';

import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { Button } from '@/components/ui/button';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useContext, useState } from 'react';

const listAnimal = [
    {
        src: '/pos2/harimau.png',
        nama: `Harimau Sumatra
        (Panthera Tigris Sumatrae)`
    },
    {
        src: '/pos2/burung.png',
        nama: `Burung Tokhtor Sumatra
        (Carpococcyx Viridis)`
    },
    { src: '/pos2/kijang.png', nama: 'Kijang (Muntiacus Montanus)' },
    { src: '/pos2/tapir.png', nama: 'Tapir Aisa (Tapirus Indicus)' },
    { src: '/pos2/orangutan.png', nama: 'Orang Utan (Pongo Abelii)' }
];

const jawaban = [1, 2, 3, 4, 0];

const Pos2 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const { setPos } = useContext(ExhibitionContext)!;

    const [selected, setSelected] = useState<number | null>(0);
    const [stepperQuestion, setStepperQuestion] = useState<number>(0);
    const [canNext, setCanNext] = useState<boolean>(false);
    const [wrong, setWrong] = useState<boolean>(false);

    const checkAnswer = () => {
        if (selected === jawaban[stepperQuestion]) {
            setCanNext(() => true);
            setWrong(() => false);
        } else {
            setCanNext(() => false);
            setWrong(() => true);
        }
    };

    const tryAgain = () => {
        setCanNext(() => false);
        setWrong(() => false);
        setSelected(() => null);
    };

    const next = () => {
        if (stepperQuestion === jawaban.length - 1) {
            setPos(3);
        } else {
            setCanNext(() => false);
            setWrong(() => false);
            setStepperQuestion((state) => state + 1);
            setSelected(() => null);
        }
    };

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={{
                        name: 'I am Trapped in My Mind',
                        number: 2,
                        password: 'test',
                        description: `Users press “the start button”
                                     Listen to the sound of fauna, and guess the name of fauna.`
                    }}
                    callbackPasswordCorrect={() => setStepper(() => 1)}
                />
            ) : (
                <>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-center font-lucette text-2xl font-bold italic md:text-3xl'>
                            Guess the name of fauna!
                        </p>
                        <div className='grid grid-cols-2 grid-rows-2 items-start gap-4 md:grid-cols-3'>
                            {listAnimal.map((data, index) => {
                                return (
                                    <div
                                        className={cn(
                                            'mx-auto flex cursor-pointer flex-col items-center justify-center gap-4'
                                        )}
                                        key={index}
                                    >
                                        <Image
                                            src={data.src}
                                            alt={data.nama}
                                            width={0}
                                            height={0}
                                            sizes='100%'
                                            className={cn(
                                                'h-auto w-[250px]',
                                                selected === index &&
                                                    'rounded-[10px] border-[4px] border-blue-500',
                                                selected === index &&
                                                    wrong &&
                                                    'rounded-[10px] border-[4px] border-red-500',
                                                wrong &&
                                                    jawaban[stepperQuestion] ===
                                                        index &&
                                                    'rounded-[10px] border-[4px] border-green-500',
                                                selected === index &&
                                                    canNext &&
                                                    'rounded-[10px] border-[4px] border-green-500'
                                            )}
                                            onClick={() =>
                                                setSelected(() => index)
                                            }
                                        />
                                        <p className='w-[85%] text-center font-acumin font-semibold'>
                                            {data.nama}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='flex flex-row items-center justify-between gap-8'>
                            <Button
                                disabled={canNext}
                                onClick={() => {
                                    if (wrong) {
                                        tryAgain();
                                    } else {
                                        checkAnswer();
                                    }
                                }}
                                className='bg-[#639F55] px-8 py-4 font-lucette text-xl font-bold hover:bg-[#639F55]/80'
                            >
                                {wrong ? 'Try Again' : 'Check'}
                            </Button>
                            <Button
                                disabled={!canNext}
                                onClick={next}
                                className='bg-[#639F55] px-8 py-4 font-lucette text-xl font-bold hover:bg-[#639F55]/80'
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Pos2;
