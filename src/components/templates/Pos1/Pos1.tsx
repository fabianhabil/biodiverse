'use client';

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
                    posInfo={{
                        name: `Locker of Empathy
                                   When i Open my Eyes`,
                        number: 1,
                        password: 'test',
                        description: 'Please answer every question in Post 1!'
                    }}
                    callbackPasswordCorrect={() => setStepper(() => 1)}
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
