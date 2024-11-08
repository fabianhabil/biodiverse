'use client';

import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { QuestionType } from '@/types/exhibition';
import { useState } from 'react';

interface QuestionPosType {
    questionPos: QuestionType[];
    setQuestionPosState: (_arg: QuestionType[]) => void;
    callbackFinishPos: () => void;
}

const QuestionPos = ({
    questionPos,
    setQuestionPosState,
    callbackFinishPos
}: QuestionPosType) => {
    const [stepperQuestion, setStepperQuestion] = useState<number>(0);

    return (
        <>
            <div className='flex w-[350px] flex-col items-center gap-8'>
                {questionPos[stepperQuestion].title === 'image' ? (
                    <>
                        <div className='h-[250px] w-[350px] bg-red-500'></div>
                    </>
                ) : (
                    <>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='flex h-[75px] w-[75px] items-center justify-center rounded-[50%] bg-[#421E5E] font-bold text-white'>
                                <p className='font-lucette text-2xl md:text-4xl'>
                                    {stepperQuestion + 1}
                                </p>
                            </div>
                            <p
                                className='w-[350px] p-4 text-center font-lucette text-2xl text-[#501C62]'
                                style={{
                                    background:
                                        'linear-gradient(96deg, rgba(180, 164, 249, 0.20) 4.23%, rgba(48, 0, 254, 0.02) 100%)'
                                }}
                            >
                                {questionPos[stepperQuestion].question}
                            </p>
                        </div>
                    </>
                )}
                <div className='flex w-[320px] flex-col gap-4'>
                    {questionPos[stepperQuestion].choice.map((data, index) => {
                        const questionData = questionPos[stepperQuestion];

                        return (
                            <div
                                key={index}
                                className={cn(
                                    'rounded-[10px] border-[1px] border-black p-2 font-acumin hover:cursor-pointer',
                                    questionData.answer === index
                                        ? 'bg-[#B8EFAE]'
                                        : ''
                                )}
                                onClick={() => {
                                    setQuestionPosState([
                                        ...questionPos.slice(
                                            0,
                                            stepperQuestion
                                        ),
                                        { ...questionData, answer: index },
                                        ...questionPos.slice(
                                            stepperQuestion + 1
                                        )
                                    ]);
                                }}
                            >
                                <p className='text-center text-base md:text-lg'>
                                    {data.answer}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className='mt-2 flex w-[350px] items-center justify-between'>
                    {stepperQuestion === 0 ? (
                        <div />
                    ) : (
                        <Button
                            className='flex rounded-[16px] bg-[#639F55] font-acumin hover:bg-[#639F55]/80'
                            onClick={() =>
                                setStepperQuestion((state) => state - 1)
                            }
                        >
                            <Icons.leftArrow />
                            <p className='text-lg'>Back</p>
                        </Button>
                    )}
                    <Button
                        className='flex rounded-[16px] bg-[#639F55] font-acumin hover:bg-[#639F55]/80'
                        disabled={questionPos[stepperQuestion].answer === null}
                        onClick={() => {
                            if (stepperQuestion + 1 === questionPos.length) {
                                callbackFinishPos();
                            } else {
                                setStepperQuestion((state) => state + 1);
                            }
                        }}
                    >
                        {stepperQuestion + 1 === questionPos.length ? (
                            <>
                                <p className='text-lg'>Finish</p>
                            </>
                        ) : (
                            <>
                                <p className='text-lg'>Next</p>
                                <Icons.rightArrow />
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default QuestionPos;
