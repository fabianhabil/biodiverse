'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';

interface IntroPosInstallationType {
    posInfo: {
        number: number;
        name: string;
        password: string;
        description: string;
    };
    callbackPasswordCorrect: () => void;
}

const IntroPosInstallation = ({
    posInfo,
    callbackPasswordCorrect
}: IntroPosInstallationType) => {
    const [inputPassword, setInputPassword] = useState<string>('');
    const { toast } = useToast();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window as any).scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex h-[75px] w-[75px] items-center justify-center rounded-[50%] bg-[#AD6653] font-bold text-white'>
                    <p className='font-lucette text-2xl md:text-4xl'>
                        {posInfo.number}
                    </p>
                </div>
                <p className='whitespace-pre-line text-center font-lucette text-2xl md:text-4xl'>
                    {posInfo.name}
                </p>
                <p className='my-4 whitespace-pre-line text-center font-acumin text-[#407E33] md:text-xl'>
                    {posInfo.description}
                </p>
                <Input
                    className='mx-auto w-[170px] rounded-[16px] border-black text-center font-acumin text-black placeholder:font-acumin md:w-[250px]'
                    placeholder='Enter Passcode'
                    onChange={(e) => setInputPassword(() => e.target.value)}
                    type='password'
                />
                <Button
                    className='mx-auto w-[170px] rounded-[16px] bg-[#639F55] px-10 py-4 text-center font-acumin text-lg text-white hover:bg-[#639F55]/80 md:w-[250px]'
                    onClick={() => {
                        if (inputPassword === posInfo.password) {
                            callbackPasswordCorrect();
                        } else {
                            toast({
                                title: 'Wrong Post Password',
                                variant: 'destructive'
                            });
                        }
                    }}
                >
                    Continue
                </Button>
            </div>
        </>
    );
};

export default IntroPosInstallation;
