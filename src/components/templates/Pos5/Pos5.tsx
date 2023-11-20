import IntroPosInstallation from '@/components/molecules/IntroPosInstallation/IntroPosInstallation';
import { useState } from 'react';

const Pos5 = () => {
    const [stepper, setStepper] = useState<number>(0);

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
                        <div className='grid grid-cols-4 items-start gap-4 md:grid-cols-3'>
                            <p>work in progress</p>
                            <p>work in progress</p>
                            <p>work in progress</p>
                            <p>work in progress</p>
                            <p>work in progress</p>
                            <p>work in progress</p>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Pos5;
