import { roleModelLists } from '@/components/constants/rolemodel';
import { Icons } from '@/components/icons/icons';
import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { Button } from '@/components/ui/button';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useContext, useState } from 'react';

const Pos5 = () => {
    const { setPos, setSelectedRoleModelState } =
        useContext(ExhibitionContext)!;

    const [stepper, setStepper] = useState<number>(0);
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={{
                        name: `Mirror in the wall
                            Who are you?`,
                        number: 5,
                        password: 'test',
                        description: 'Choose a role model that represents you!.'
                    }}
                    callbackPasswordCorrect={() => setStepper(() => 1)}
                />
            ) : null}

            {stepper === 1 ? (
                <>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-center font-lucette text-2xl font-bold italic md:text-3xl'>
                            Choose a role model that reflects you!
                        </p>
                        <div className='grid grid-cols-3 items-center justify-center gap-4 md:grid-cols-4'>
                            {roleModelLists.map((data, index) => {
                                return (
                                    <div key={data.src}>
                                        <Image
                                            src={data.src}
                                            alt={data.name}
                                            width={0}
                                            height={0}
                                            quality={100}
                                            sizes='100%'
                                            className={cn(
                                                'h-auto w-[150px] rounded-[8px] border-[4px] hover:cursor-pointer',
                                                selected === index &&
                                                    'border-blue-500'
                                            )}
                                            onClick={() =>
                                                setSelected(() => index)
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <Button
                            className='flex rounded-[20px] bg-[#727902] font-lucette hover:bg-[#727902]/80'
                            disabled={selected === null}
                            onClick={() => {
                                if (selected !== null) {
                                    setPos(6);
                                    setSelectedRoleModelState(
                                        roleModelLists[selected]
                                    );
                                }
                            }}
                        >
                            <p className='text-lg'>Next</p>
                            <Icons.rightArrow />
                        </Button>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Pos5;
