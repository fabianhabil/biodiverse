'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

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

    return (
        <>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex h-[75px] w-[75px] items-center justify-center rounded-[50%] bg-[#AD6653] font-bold text-white'>
                    <p className='font-lucette text-2xl md:text-4xl'>
                        {posInfo.number}
                    </p>
                </div>
                <p className='whitespace-pre-line text-center font-lucette text-2xl font-bold md:text-4xl'>
                    {posInfo.name}
                </p>
                <p className='my-4 whitespace-pre-line text-center font-acumin font-semibold text-[#407E33] md:text-xl'>
                    {posInfo.description}
                </p>
                <Input
                    className='mx-auto w-[170px] rounded-[32px] bg-[#BAC24A] text-center font-bold text-white placeholder:text-white md:w-[250px]'
                    placeholder='Enter Passcode'
                    onChange={(e) => setInputPassword(() => e.target.value)}
                />
                <Button
                    className='mx-auto rounded-[32px] bg-[#727902] px-10 py-4 text-center text-xl font-bold text-white hover:bg-[#727902]/80'
                    onClick={() => {
                        if (inputPassword === posInfo.password) {
                            callbackPasswordCorrect();
                        } else {
                            toast({
                                title: 'Wrong Pos Password',
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
