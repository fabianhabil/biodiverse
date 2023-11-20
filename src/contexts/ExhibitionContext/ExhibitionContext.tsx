'use client';

import { listQuestionPos1 } from '@/components/constants/question';
import { skillConstants } from '@/components/constants/skill';
import type {
    ParticipantDataType,
    ExhibitionContextType,
    QuestionType,
    ParticipantSkillType
} from '@/types/exhibition';
import { createContext, useState } from 'react';

export const ExhibitionContext = createContext<ExhibitionContextType | null>(
    null
);

export const ExhibitionContextProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [mounted, setMounted] = useState<boolean>(false);
    // -1 = waiting, 0 = form, pos sisanya
    const [pos, setPos] = useState<number>(-1);
    const [participantData, setParticipantData] = useState<ParticipantDataType>(
        {
            name: '',
            email: '',
            gender: '',
            age: 0,
            jurusan: '',
            instagram: ''
        }
    );

    const [onGoing, setOnGoing] = useState<boolean>(false);

    const [participantSkill, setParticipantSkill] =
        useState<ParticipantSkillType>(skillConstants);

    const [questionPos1, setQuestionPos1] =
        useState<QuestionType[]>(listQuestionPos1);

    const setParticipantSkillState = (
        newParticipantSkill: ParticipantSkillType
    ) => {
        setParticipantSkill(() => newParticipantSkill);
        localStorage.setItem(
            'participantSkill',
            JSON.stringify(newParticipantSkill)
        );
    };

    const setQuestionPos1State = (newQuestion: QuestionType[]) => {
        setQuestionPos1(() => newQuestion);
        localStorage.setItem('questionPos1', JSON.stringify(newQuestion));
    };

    const setPosState = (newPos: number) => {
        setPos(() => newPos);
        localStorage.setItem('pos', `${newPos}`);
    };

    const isUserData = (posStateNow: string | null) => {
        try {
            const userData = JSON.parse(
                localStorage.getItem('participantData')!
            );

            if (userData) {
                setParticipantData(() => userData);

                if (posStateNow) {
                    setPosState(Number(posStateNow));
                    setOnGoing(() => true);
                } else {
                    setPosState(1);
                }
            } else setPosState(0);
        } catch (e) {
            setPosState(0);
        }
    };

    const checkPosState = () => {
        return localStorage.getItem('pos');
    };

    const checkAllPosAnswer = () => {
        try {
            const questionPos1Data = JSON.parse(
                localStorage.getItem('questionPos1')!
            );

            if (questionPos1Data) setQuestionPos1(() => questionPos1Data);

            const participantSkillData = JSON.parse(
                localStorage.getItem('participantSkill')!
            );

            if (participantSkillData)
                setParticipantSkill(() => participantSkillData);
        } catch (e) {
            console.log(e);
            setPosState(0);
        }
    };

    const initiate = () => {
        const posStateNow = checkPosState();
        isUserData(posStateNow);
        checkAllPosAnswer();
        setMounted(() => true);
    };

    const resetExhibition = () => {
        localStorage.removeItem('pos');
        localStorage.removeItem('participantData');
        localStorage.removeItem('questionPos1');
        localStorage.removeItem('questionPos2');
        window.location.reload();
    };

    const value = {
        test: 'hahahaha',
        pos,
        setPos: setPosState,
        initiate,
        participantData,
        setParticipantData,
        mounted,
        participantSkill,
        questionPos1,
        setParticipantSkillState,
        setQuestionPos1State,
        onGoing,
        resetExhibition
    };

    return (
        <ExhibitionContext.Provider value={value}>
            {children}
        </ExhibitionContext.Provider>
    );
};
