'use client';

import { posInfo } from '@/components/constants/pos';
import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import ModalPos2 from '@/components/molecules/ModalPos2/ModalPos2';
import { Button } from '@/components/ui/button';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useContext, useState } from 'react';

const listAnimal = [
    {
        src: '/pos2/harimau.png',
        nama: 'Harimau Sumatra (Panthera Tigris Sumatrae)'
    },
    {
        src: '/pos2/burung.png',
        nama: 'Burung Tokhtor Sumatra (Carpococcyx Viridis)'
    },
    { src: '/pos2/kijang.png', nama: 'Kijang (Muntiacus Montanus)' },
    { src: '/pos2/tapir.png', nama: 'Tapir Aisa (Tapirus Indicus)' },
    { src: '/pos2/orangutan.png', nama: 'Orang Utan (Pongo Abelii)' }
];

const jawaban = [1, 2, 3, 4, 0];

const Pos2 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const {
        setPos,
        correctCountPos2,
        setCorrectCountPos2State,
        answerPos2,
        setAnswerPos2State
    } = useContext(ExhibitionContext)!;

    const [selected, setSelected] = useState<number | null>(0);
    const [stepperQuestion, setStepperQuestion] = useState<number>(0);
    const [canNext, setCanNext] = useState<boolean>(false);
    const [wrong, setWrong] = useState<boolean>(false);

    const checkAnswer = () => {
        if (stepperQuestion === 0 && answerPos2.length !== 0) {
            setAnswerPos2State([listAnimal[selected!].nama]);
        } else {
            setAnswerPos2State([...answerPos2, listAnimal[selected!].nama]);
        }

        if (selected === jawaban[stepperQuestion]) {
            setCanNext(() => true);
            setWrong(() => false);
            setCorrectCountPos2State(correctCountPos2 + 1);
            // toast({
            //     title: `Correct! The answer is ${
            //         listAnimal[jawaban[stepperQuestion]].nama
            //     }`,
            //     duration: 1000,
            //     className: 'bg-green-500 text-white'
            // });
        } else {
            setCanNext(() => true);
            setWrong(() => true);
            // toast({
            //     title: `Wrong answer! The correct answer is ${
            //         listAnimal[jawaban[stepperQuestion]].nama
            //     }`,
            //     variant: 'destructive',
            //     duration: 1000
            // });
        }
    };

    const tryAgain = () => {
        setCanNext(() => false);
        setWrong(() => false);
        setSelected(() => null);
    };

    const next = () => {
        if (stepperQuestion === jawaban.length - 1) {
            setStepper(() => 2);
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
                    posInfo={posInfo[2]}
                    callbackPasswordCorrect={() => {
                        setStepper(() => 1);
                        (window as any).scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                />
            ) : null}

            {stepper === 1 ? (
                <>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-center font-lucette text-2xl font-bold italic md:text-3xl'>
                            Indonesian Fauna
                        </p>
                        <div className='grid grid-cols-2 grid-rows-2 items-start gap-4 md:grid-cols-3'>
                            {listAnimal.map((data, index) => {
                                return (
                                    <div
                                        className={cn(
                                            'flex cursor-pointer flex-col items-center justify-center gap-4',
                                            index === listAnimal.length - 1 &&
                                                'col-span-2 mx-auto md:col-span-1'
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
                                                    !wrong &&
                                                    'rounded-[10px] border-[4px] border-green-500',
                                                index ===
                                                    listAnimal.length - 1 &&
                                                    'col-span-2 mx-auto w-[183px] md:col-span-1 md:w-[250px]'
                                            )}
                                            onClick={() => {
                                                if (!wrong && !canNext) {
                                                    setSelected(() => index);
                                                }
                                            }}
                                        />
                                        <p className='w-[85%] text-center font-acumin'>
                                            {data.nama}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='flex flex-row items-center justify-between gap-8'>
                            <Button
                                disabled={canNext || selected === null}
                                onClick={() => {
                                    if (wrong) {
                                        tryAgain();
                                    } else {
                                        checkAnswer();
                                    }
                                }}
                                className='bg-[#639F55] px-8 py-4 font-lucette text-xl font-bold hover:bg-[#639F55]/80'
                            >
                                Check
                            </Button>
                        </div>
                    </div>

                    <ModalPos2
                        defaultOpen={canNext}
                        next={next}
                        wrongAnswer={wrong}
                        answer={listAnimal[selected ?? 0]}
                        correctAnswer={listAnimal[jawaban[stepperQuestion]]}
                    />
                </>
            ) : null}

            {stepper === 2 ? (
                <>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center justify-between gap-10'>
                            <div className='flex flex-col items-center gap-4 font-acumin'>
                                <p className='text-xl font-bold text-green-500'>
                                    Correct Answer
                                </p>
                                <p className='text-xl font-bold'>
                                    {correctCountPos2}
                                </p>
                            </div>
                            <div className='flex flex-col items-center gap-4 font-acumin'>
                                <p className='text-xl font-bold text-red-500'>
                                    Wrong Answer
                                </p>
                                <p className='text-xl font-bold'>
                                    {jawaban.length - correctCountPos2}
                                </p>
                            </div>
                        </div>
                        <Button
                            onClick={() => setPos(3)}
                            className='bg-[#639F55] px-8 py-4 font-lucette text-xl font-bold hover:bg-[#639F55]/80'
                        >
                            Next
                        </Button>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Pos2;
