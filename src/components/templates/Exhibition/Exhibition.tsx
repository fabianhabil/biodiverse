'use client';

import FormWelcome from '../FormWelcome/FormWelcome';
import Pos1 from '../Pos1/Pos1';
import Pos2 from '../Pos2/Pos2';
import Pos3 from '../Pos3/Pos3';
import Pos4 from '../Pos4/Pos4';
import Pos5 from '../Pos5/Pos5';
import Pos6 from '../Pos6/Pos6';
import Pos7 from '../Pos7/Pos7';
import ModalRestartExhibition from '@/components/atoms/ModalRestartExhibition/ModalRestartExhibition';
import FooterExhibition from '@/components/molecules/FooterExhibition/FooterExhibition';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import WindowSize from '@/hooks/windowSize';
import { useContext, useEffect } from 'react';

const ExhibitionPage = () => {
    const { initiate, pos, mounted, onGoing, resetExhibition } =
        useContext(ExhibitionContext)!;
    const windowSize = WindowSize();

    useEffect(() => {
        initiate();
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div
                style={{ minHeight: windowSize.innerHeight, width: '100%' }}
                className='flex flex-col items-center justify-between bg-[#FFF7EF] p-4'
            >
                <div />

                {pos === 0 ? <FormWelcome windowSize={windowSize} /> : null}
                {pos === 1 ? <Pos1 /> : null}
                {pos === 2 ? <Pos2 /> : null}
                {pos === 3 ? <Pos3 /> : null}
                {pos === 4 ? <Pos4 /> : null}
                {pos === 5 ? <Pos5 /> : null}
                {pos === 6 ? <Pos6 /> : null}
                {pos === 7 ? <Pos7 /> : null}

                <FooterExhibition />
            </div>
            <ModalRestartExhibition
                defaultOpen={onGoing}
                resetExhibition={resetExhibition}
            />
        </>
    );
};

export default ExhibitionPage;
