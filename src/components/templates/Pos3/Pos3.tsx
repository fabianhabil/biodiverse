import { posInfo } from '@/components/constants/pos';
import { Icons } from '@/components/icons/icons';
import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { Button } from '@/components/ui/button';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useContext, useState } from 'react';

const menuData = [
    {
        title: 'Mixtura Tea Blend',
        ingredients:
            'Sumatran Black tea, Gayo Arabica Coffee, Cacao Nibs, Forget Me Not.',
        vibe: 'A serotonin booster made of three basic brews elements that lifts your mood for a whole day since the first sip.'
    },
    {
        title: 'Earl Grey Lady Tea Blend',
        ingredients:
            'West Java Black Tea, Orange, Rose, Lavender, Marigold, Forget me Not, Bergamot oil.',
        vibe: 'Tea time, but make it a party! Lady Earl Grey is a burst of flowery fun, turning your cuppa into a carnival for your taste buds.'
    },
    {
        title: 'Glow Like That Tea Blend',
        ingredients:
            'West Java Green tea, Dragon Fruit, Cranberry, Hibiscus, Strawberry, Peppermint, Peach Blossom, Lavender, Stevia.',
        vibe: 'When acid element and red color (it refers to chaotic). Connected with the sweet element that binds flavor, appearing a balanced taste that makes us feel wellbeing, have a spirit, and glow differently (with addition of the gold element to the brew).'
    }
];

const menuDataIndex = [
    [4, 3],
    [5, 0, 1],
    [6, 7, 9]
];

const ingredientsData = [
    {
        src: '/pos3/5.png',
        name: 'Rose'
    },
    {
        src: '/pos3/6.png',
        name: 'Lavender'
    },
    {
        src: '/pos3/7.png',
        name: 'Jasmine'
    },
    {
        src: '/pos3/9.png',
        name: 'Cacao Nibs'
    },
    {
        src: '/pos3/10.png',
        name: 'Gayo Arabica Coffee'
    },
    {
        src: '/pos3/11.png',
        name: 'West Java Black Tea'
    },
    {
        src: '/pos3/12.png',
        name: 'Orange'
    },
    {
        src: '/pos3/13.png',
        name: 'Dragon Fruit'
    },
    {
        src: '/pos3/14.png',
        name: 'Peach Blossom'
    },
    {
        src: '/pos3/15.png',
        name: 'Cranberry'
    }
];

const Pos3 = () => {
    const [stepper, setStepper] = useState<number>(0);
    const [stepperIngredients, setStepperIngredients] = useState<number>(0);
    const { setPos } = useContext(ExhibitionContext)!;

    return (
        <>
            {stepper === 0 ? (
                <IntroPosInstallation
                    posInfo={posInfo[3]}
                    callbackPasswordCorrect={() => {
                        setStepper(() => 1);
                        (window as any).scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                />
            ) : (
                <>
                    <div className='flex w-[350px] flex-col gap-4'>
                        <div className='flex flex-row flex-wrap justify-center gap-4'>
                            {menuDataIndex[stepperIngredients].map(
                                (data, index) => {
                                    const ingredients = ingredientsData[data];
                                    return (
                                        <div
                                            className={cn(
                                                'flex cursor-pointer flex-col items-center gap-4'
                                            )}
                                            key={index}
                                        >
                                            <Image
                                                src={ingredients.src}
                                                alt={ingredients.name}
                                                width={0}
                                                height={0}
                                                sizes='100%'
                                                quality={20}
                                                className={cn(
                                                    'h-auto w-[150px]'
                                                )}
                                            />
                                            <p className='w-[85%] text-center font-acumin text-xs font-semibold'>
                                                {ingredients.name}
                                            </p>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        <div className='flex w-full flex-col gap-2 bg-[#B7CBAD]/70 p-4 font-acumin'>
                            <p className='text-center font-bold'>
                                {menuData[stepperIngredients].title}
                            </p>
                            <p className='text-center'>
                                <span className='font-bold'>Ingredients: </span>
                                {menuData[stepperIngredients].ingredients}
                            </p>
                            <p className='text-center'>
                                <span className='font-bold'>The Vibe: </span>
                                {menuData[stepperIngredients].vibe}
                            </p>
                        </div>
                        <div className='mt-2 flex w-[350px] items-center justify-between'>
                            {stepperIngredients === 0 ? (
                                <div />
                            ) : (
                                <Button
                                    className='flex rounded-[16px] bg-[#639F55] font-acumin hover:bg-[#639F55]/80'
                                    onClick={() =>
                                        setStepperIngredients(
                                            (state) => state - 1
                                        )
                                    }
                                >
                                    <Icons.leftArrow />
                                    <p className='text-lg'>Back</p>
                                </Button>
                            )}
                            <Button
                                className='flex rounded-[16px] bg-[#639F55] font-acumin hover:bg-[#639F55]/80'
                                onClick={() => {
                                    if (stepperIngredients === 2) {
                                        setPos(4);
                                    } else {
                                        setStepperIngredients(
                                            (state) => state + 1
                                        );
                                    }
                                }}
                            >
                                {stepperIngredients === 2 ? (
                                    <>
                                        <p className='text-lg'>Finish</p>
                                    </>
                                ) : (
                                    <>
                                        <p className='text-lg'>Next</p>
                                        <Icons.rightArrow />
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Pos3;
