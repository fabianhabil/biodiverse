import { posInfo } from '@/components/constants/pos';
import { roleModelLists } from '@/components/constants/rolemodel';
import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { Button } from '@/components/ui/button';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import appendSpreadsheet from '@/lib/gsheets';
import type { ParticipantSkillType, RoleModelType } from '@/types/exhibition';
import Image from 'next/image';
import { useContext, useRef, useState } from 'react';

const RoleModelCard = ({
    roleModel,
    participantSkill,
    total
}: {
    roleModel: RoleModelType;
    participantSkill: ParticipantSkillType;
    total: number;
}) => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${roleModel.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className='relative h-[200px] w-full text-center'
            >
                <div className='absolute z-0 h-full w-full rounded-[6px] bg-black opacity-50' />
                <div className='absolute z-10 m-auto flex h-full w-full flex-col items-stretch justify-between text-center text-white'>
                    <div />
                    <p className='px-0 pb-2 font-livvic text-[14px] font-semibold italic'>
                        {Math.floor(
                            (participantSkill![roleModel.value].value / total) *
                                100
                        )}
                        %
                    </p>
                    <p className='flex h-[25%] items-center justify-center px-2 pb-2 text-center font-livvic text-[14px] font-semibold italic'>
                        {participantSkill![roleModel.value]!.name}
                    </p>
                </div>
            </div>
        </>
    );
};

const Pos7 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const [participantSkillKeySorted, setParticipantSkillKeySorted] = useState<
        string[]
    >([]);

    const {
        populateParticipantSkillData,
        participantSkill,
        participantData,
        resetExhibition,
        selectedRoleModel
    } = useContext(ExhibitionContext)!;

    const populateSortedKey = (populated: ParticipantSkillType) => {
        const sorted = Object.keys(populated).sort((a, b) => {
            return (
                populated[b as keyof ParticipantSkillType].value -
                populated[a as keyof ParticipantSkillType].value
            );
        });
        setParticipantSkillKeySorted(() => sorted);
    };

    const divRef = useRef(null);

    const prepareURL = async () => {
        const divElement = divRef.current;

        if (!divElement) return;

        try {
            const html2canvas = await import(
                /* webpackPrefetch: true */ 'html2canvas'
            );

            const result = await html2canvas.default(divElement);

            const asURL = result.toDataURL('image/jpeg');
            const anchor = document.createElement('a');
            anchor.href = asURL;
            anchor.download = 'biodiverse-personality.jpeg';
            anchor.click();
            anchor.remove();
        } catch (reason) {
            console.log(reason);
        }
    };

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={posInfo[7]}
                    callbackPasswordCorrect={() => {
                        setStepper(() => 1);
                        const populated = populateParticipantSkillData();
                        populateSortedKey(populated);
                        (window as any).scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        appendSpreadsheet({
                            Name: participantData.name,
                            Age: participantData.age,
                            Date: new Date().toLocaleString('en-US', {
                                timeZone: 'Asia/Jakarta'
                            }),
                            Email: participantData.email,
                            Gender: participantData.gender,
                            Instagram: participantData.instagram,
                            Jurusan: participantData.jurusan,
                            RoleModel: selectedRoleModel.name,
                            Communicative: populated.communicative.value,
                            ComplexProblemSolver:
                                populated.complexProblemSolver.value,
                            CreativeThinking: populated.creativeThinking.value,
                            CriticalThinking: populated.criticalThinking.value,
                            Empathy: populated.empathy.value,
                            Innovative: populated.innovative.value,
                            Leadership: populated.leadership.value,
                            Persistence: populated.persistence.value,
                            PlanningAndOrganizing:
                                populated.planningAndOrganizing.value,
                            Resilience: populated.resilience.value,
                            RiskTaking: populated.riskTaking.value,
                            Teamwork: populated.teamwork.value,
                            Visionary: populated.visionary.value
                        });
                    }}
                />
            ) : null}

            {stepper === 1 ? (
                <>
                    <div className='flex w-full flex-col gap-8 md:w-[25%]'>
                        <div
                            className='flex flex-col gap-4 font-acumin'
                            ref={divRef}
                        >
                            <Image
                                src='/logo/biodiverse.png'
                                alt='logo'
                                sizes='100%'
                                width={0}
                                height={0}
                                className='m-auto h-auto w-[150px]'
                            />
                            <div className='flex flex-col gap-2'>
                                <p className='text-center font-acumin text-lg'>
                                    <span className='font-bold'>
                                        {participantData.name}'s
                                    </span>{' '}
                                    type/model is:
                                </p>
                                <p className='text-center text-xl font-extrabold italic'>
                                    {
                                        participantSkill![
                                            participantSkillKeySorted[0] as keyof ParticipantSkillType
                                        ]!.name
                                    }
                                </p>
                                <Image
                                    src={
                                        roleModelLists.find(
                                            (data) =>
                                                data.value ===
                                                participantSkillKeySorted[0]
                                        )?.src!
                                    }
                                    alt='logo'
                                    sizes='100%'
                                    width={0}
                                    height={0}
                                    className='m-auto h-auto w-[200px]'
                                />
                                <p className='text-center text-lg'>
                                    The top 3 entrepreneurial skills you have
                                    are:
                                </p>
                                <div className='grid w-full grid-cols-3 grid-rows-1 items-center justify-center gap-2'>
                                    <RoleModelCard
                                        roleModel={
                                            roleModelLists.find(
                                                (data) =>
                                                    data.value ===
                                                    participantSkillKeySorted[0]
                                            )!
                                        }
                                        participantSkill={participantSkill!}
                                        total={
                                            participantSkill![
                                                participantSkillKeySorted[0] as keyof ParticipantSkillType
                                            ].value +
                                            participantSkill![
                                                participantSkillKeySorted[1] as keyof ParticipantSkillType
                                            ].value +
                                            participantSkill![
                                                participantSkillKeySorted[2] as keyof ParticipantSkillType
                                            ].value
                                        }
                                    />
                                    <RoleModelCard
                                        roleModel={
                                            roleModelLists.find(
                                                (data) =>
                                                    data.value ===
                                                    participantSkillKeySorted[1]
                                            )!
                                        }
                                        participantSkill={participantSkill!}
                                        total={
                                            participantSkill![
                                                participantSkillKeySorted[0] as keyof ParticipantSkillType
                                            ].value +
                                            participantSkill![
                                                participantSkillKeySorted[1] as keyof ParticipantSkillType
                                            ].value +
                                            participantSkill![
                                                participantSkillKeySorted[2] as keyof ParticipantSkillType
                                            ].value
                                        }
                                    />
                                    <RoleModelCard
                                        roleModel={
                                            roleModelLists.find(
                                                (data) =>
                                                    data.value ===
                                                    participantSkillKeySorted[2]
                                            )!
                                        }
                                        participantSkill={participantSkill!}
                                        total={
                                            participantSkill![
                                                participantSkillKeySorted[0] as keyof ParticipantSkillType
                                            ].value +
                                            participantSkill![
                                                participantSkillKeySorted[1] as keyof ParticipantSkillType
                                            ].value +
                                            participantSkill![
                                                participantSkillKeySorted[2] as keyof ParticipantSkillType
                                            ].value
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-4'>
                            <Button
                                className='w-full bg-[#639F55] font-bold text-white hover:bg-[#639F55]/80'
                                onClick={resetExhibition}
                            >
                                Try Again
                            </Button>
                            <Button
                                onClick={prepareURL}
                                className='w-full bg-[#639F55] font-bold text-white hover:bg-[#639F55]/80'
                            >
                                Download
                            </Button>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Pos7;
