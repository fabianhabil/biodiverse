'use client';

import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { useContext, useState } from 'react';

const Pos6 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const { setPos } = useContext(ExhibitionContext)!;

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={{
                        name: 'Documentary Screening',
                        number: 6,
                        password: 'test',
                        description: 'Watch and soak up the documentary!'
                    }}
                    callbackPasswordCorrect={() => {
                        setStepper(() => 1);
                        setPos(7);
                    }}
                />
            ) : null}
        </>
    );
};

export default Pos6;
