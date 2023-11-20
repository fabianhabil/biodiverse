import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import QuestionPos from '@/components/molecules/QuestionPos/QuestionPos';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { useContext, useState } from 'react';

const Pos4 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const { questionPos4, setQuestionPos4State, setPos } =
        useContext(ExhibitionContext)!;

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={{
                        name: `The Forest Tale
                   National Park`,
                        number: 4,
                        password: 'test',
                        description:
                            'Users read the story and answer the questions.'
                    }}
                    callbackPasswordCorrect={() => setStepper(() => 1)}
                />
            ) : null}

            {stepper === 1 ? (
                <QuestionPos
                    questionPos={questionPos4}
                    setQuestionPosState={setQuestionPos4State}
                    callbackFinishPos={() => setPos(5)}
                />
            ) : null}
        </>
    );
};

export default Pos4;
