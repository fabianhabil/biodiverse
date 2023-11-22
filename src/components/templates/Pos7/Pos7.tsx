import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import type { ParticipantSkillType } from '@/types/exhibition';
import { useContext, useState } from 'react';

const Pos7 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const { populateParticipantSkillData, participantSkill } =
        useContext(ExhibitionContext)!;

    console.log(participantSkill);

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={{
                        name: 'Tree Installation',
                        number: 7,
                        password: 'test',
                        description:
                            'Write your innovation on paper and stick it on the tree installation, make your wish come true!'
                    }}
                    callbackPasswordCorrect={() => {
                        setStepper(() => 1);
                        populateParticipantSkillData();
                    }}
                />
            ) : null}

            {stepper === 1 ? (
                <>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-4'>
                            {Object.keys(participantSkill)
                                .sort((a, b) => {
                                    return (
                                        participantSkill[
                                            b as keyof ParticipantSkillType
                                        ].value -
                                        participantSkill[
                                            a as keyof ParticipantSkillType
                                        ].value
                                    );
                                })
                                .map((data, index) => {
                                    console.log(data);
                                    return <div key={index}></div>;
                                })}
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Pos7;
