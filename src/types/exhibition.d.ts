import type { Dispatch, SetStateAction } from 'react';

export interface ExhibitionContextType {
    test: string;
    pos: number;
    setPos: (_arg: number) => void;
    initiate: () => void;
    participantData: ParticipantDataType;
    setParticipantData: Dispatch<SetStateAction<ParticipantDataType>>;
    mounted: boolean;
    participantSkill: ParticipantSkillType;
    questionPos1: QuestionType[];
    setParticipantSkillState: (_arg: ParticipantSkillType) => void;
    setQuestionPos1State: (_arg: QuestionType[]) => void;
    onGoing: boolean;
    resetExhibition: () => void;
    questionPos4: QuestionType[];
    setQuestionPos4State: (_arg: QuestionType[]) => void;
    correctCountPos2: number;
    setCorrectCountPos2State: (_arg: number) => void;
    selectedRoleModel: RoleModelType;
    setSelectedRoleModelState: (_arg: RoleModelType) => void;
    populateParticipantSkillData: () => void;
}

export interface ParticipantDataType {
    name: string;
    email: string;
    gender: string;
    age: number;
    jurusan: string;
    instagram: string;
}

export interface ParticipantSkillType {
    empathy: SkillType;
    visionary: SkillType;
    criticalThinking: SkillType;
    creativeThinking: SkillType;
    innovative: SkillType;
    complexProblemSolver: SkillType;
    riskTaking: SkillType;
    persistence: SkillType;
    resilience: SkillType;
    leadership: SkillType;
    planningAndOrganizing: SkillType;
    communicative: SkillType;
    teamwork: SkillType;
}

export interface SkillType {
    name: string;
    value: number;
}

export interface QuestionType {
    title: 'image' | 'text';
    question: string;
    choice: AnswerType[];
    answer: number | null;
}

export interface AnswerType {
    answer: string;
    value:
        | 'empathy'
        | 'visionary'
        | 'criticalThinking'
        | 'creativeThinking'
        | 'innovative'
        | 'complexProblemSolver'
        | 'riskTaking'
        | 'persistence'
        | 'resilience'
        | 'leadership'
        | 'planningAndOrganizing'
        | 'communicative'
        | 'teamwork';
}

export interface RoleModelType {
    src: string;
    name: string;
    value:
        | 'empathy'
        | 'visionary'
        | 'criticalThinking'
        | 'creativeThinking'
        | 'innovative'
        | 'complexProblemSolver'
        | 'riskTaking'
        | 'persistence'
        | 'resilience'
        | 'leadership'
        | 'planningAndOrganizing'
        | 'communicative'
        | 'teamwork';
}
