'use client';

import { posInfo } from '@/components/constants/pos';
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
                    posInfo={posInfo[6]}
                    callbackPasswordCorrect={() => {
                        setStepper(() => 1);
                        setPos(7);
                        (window as any).scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                />
            ) : null}
        </>
    );
};

export default Pos6;
