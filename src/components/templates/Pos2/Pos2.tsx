'use client';

import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
// import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { useState } from 'react';

const Pos2 = () => {
    const [stepper, setStepper] = useState<number>(0);
    // const { questionPos1, setQuestionPos1State, setPos } =
    //     useContext(ExhibitionContext)!;

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
            ) : null}
        </>
    );
};

export default Pos2;
