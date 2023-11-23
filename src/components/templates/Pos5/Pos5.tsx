import { posInfo } from '@/components/constants/pos';
import { roleModelLists } from '@/components/constants/rolemodel';
import { Icons } from '@/components/icons/icons';
import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { Button } from '@/components/ui/button';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { cn } from '@/lib/utils';
import { Fragment, useContext, useState } from 'react';

const Pos5 = () => {
    const { setPos, setSelectedRoleModelState } =
        useContext(ExhibitionContext)!;

    const [stepper, setStepper] = useState<number>(0);
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={posInfo[5]}
                    callbackPasswordCorrect={() => {
                        setStepper(() => 1);
                        (window as any).scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                />
            ) : null}

            {stepper === 1 ? (
                <>
                    <div className='flex w-full flex-col items-center justify-center gap-4'>
                        <p className='text-center font-lucette text-2xl font-bold italic md:text-3xl'>
                            Choose a role model that reflects you!
                        </p>
                        <div className='grid grid-cols-3 items-center justify-center gap-2'>
                            {roleModelLists.map((data, index) => {
                                if (index === roleModelLists.length - 1) {
                                    return (
                                        <Fragment key={data.src}>
                                            <div />
                                            <div
                                                key={data.src}
                                                style={{
                                                    backgroundImage: `url(${data.src})`,
                                                    backgroundRepeat:
                                                        'no-repeat',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}
                                                className={cn(
                                                    'relative h-[250px] w-[115px] text-center sm:w-[200px]',
                                                    'rounded-[8px] border-[4px] hover:cursor-pointer',
                                                    selected === index &&
                                                        'border-blue-500'
                                                )}
                                                onClick={() =>
                                                    setSelected(() => index)
                                                }
                                            >
                                                <div className='absolute z-0 h-full w-full bg-black opacity-50' />
                                                <div className='absolute z-10 m-auto flex h-full w-full flex-col justify-between text-center text-white'>
                                                    <div />
                                                    <div />
                                                    <p className='px-0 pb-2 font-livvic text-lg font-semibold italic'>
                                                        {data.name}
                                                    </p>
                                                </div>
                                            </div>
                                            <div />
                                        </Fragment>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={data.src}
                                            style={{
                                                backgroundImage: `url(${data.src})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                            className={cn(
                                                'relative h-[250px] w-full text-center',
                                                'rounded-[8px] border-[4px] hover:cursor-pointer',
                                                selected === index &&
                                                    'border-blue-500'
                                            )}
                                            onClick={() =>
                                                setSelected(() => index)
                                            }
                                        >
                                            <div className='absolute z-0 h-full w-full bg-black opacity-50' />
                                            <div className='absolute z-10 m-auto flex h-full w-full flex-col justify-between text-center text-white'>
                                                <div />
                                                <div />
                                                <p className='px-0 pb-2 font-livvic text-lg font-semibold italic'>
                                                    {data.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
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
