'use client';

import { posInfo } from '@/components/constants/pos';
import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import QuestionPos from '@/components/molecules/QuestionPos/QuestionPos';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { useContext, useState } from 'react';

const Pos1 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const { questionPos1, setQuestionPos1State, setPos } =
        useContext(ExhibitionContext)!;

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={posInfo[1]}
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
                <QuestionPos
                    questionPos={questionPos1}
                    setQuestionPosState={setQuestionPos1State}
                    callbackFinishPos={() => setPos(2)}
                />
            ) : null}
        </>
    );
};

export default Pos1;
