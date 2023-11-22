'use client';

import {
    listQuestionPos1,
    listQuestionPos4
} from '@/components/constants/question';
import { skillConstants } from '@/components/constants/skill';
import type {
    ParticipantDataType,
    ExhibitionContextType,
    QuestionType,
    ParticipantSkillType,
    RoleModelType
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

    const [questionPos1, setQuestionPos1] =
        useState<QuestionType[]>(listQuestionPos1);

    const [correctCountPos2, setCorrectCountPos2] = useState<number>(0);

    const [questionPos4, setQuestionPos4] =
        useState<QuestionType[]>(listQuestionPos4);

    const [participantSkill, setParticipantSkill] =
        useState<ParticipantSkillType>(skillConstants);

    const [selectedRoleModel, setSelectedRoleModel] = useState<RoleModelType>({
        src: '',
        name: '',
        value: 'communicative'
    });

    const setSelectedRoleModelState = (newSelectedRoleModel: RoleModelType) => {
        setSelectedRoleModel(() => newSelectedRoleModel);
        localStorage.setItem(
            'selectedRoleModel',
            JSON.stringify(newSelectedRoleModel)
        );
    };

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

    const setCorrectCountPos2State = (newCount: number) => {
        setCorrectCountPos2(() => newCount);
        localStorage.setItem('correctCountPos2', `${newCount}`);
    };

    const setQuestionPos4State = (newQuestion: QuestionType[]) => {
        setQuestionPos4(() => newQuestion);
        localStorage.setItem('questionPos4', JSON.stringify(newQuestion));
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

            const currentCountPos2Data = JSON.parse(
                localStorage.getItem('currentCountPos2')!
            );

            if (currentCountPos2Data)
                setCorrectCountPos2(() => currentCountPos2Data);

            const questionPos4Data = JSON.parse(
                localStorage.getItem('questionPos4')!
            );

            if (questionPos4Data) setQuestionPos4(() => questionPos4Data);

            const selectedRoleModelData = JSON.parse(
                localStorage.getItem('selectedRoleModel')!
            )!;

            if (selectedRoleModelData) {
                setSelectedRoleModel(() => selectedRoleModelData);
            }

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

    const populateParticipantSkillData = () => {
        const tempData = { ...participantSkill };

        questionPos1.forEach((data) => {
            tempData[data.choice[data.answer!].value].value++;
        });

        questionPos4.forEach((data) => {
            tempData[data.choice[data.answer!].value].value++;
        });

        tempData[selectedRoleModel.value].value++;

        setParticipantSkillState(tempData);

        // const keysSorted = Object.keys(tempData).sort((a, b) => {
        //     return (
        //         tempData[b as keyof ParticipantSkillType].value -
        //         tempData[a as keyof ParticipantSkillType].value
        //     );
        // });

        // return keysSorted;
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
        localStorage.removeItem('correctCountPos2');
        localStorage.removeItem('questionPos4');
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
        resetExhibition,
        questionPos4,
        setQuestionPos4State,
        correctCountPos2,
        setCorrectCountPos2State,
        selectedRoleModel,
        setSelectedRoleModelState,
        populateParticipantSkillData
    };

    return (
        <ExhibitionContext.Provider value={value}>
            {children}
        </ExhibitionContext.Provider>
    );
};
