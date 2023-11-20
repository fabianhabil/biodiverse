import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ExhibitionContext } from '@/contexts/ExhibitionContext/ExhibitionContext';
import Image from 'next/image';
import { useContext } from 'react';

interface FormWelcomeType {
    windowSize: {
        innerHeight: number;
        innerWidth: number;
    };
}

const listJurusan = [
    'Creativepreneurship',
    'Digital Business Inovation',
    'Computer Science',
    'Visual Communication Design',
    'Interactive Design & Technology',
    'Interior Design',
    'Other'
];

const FormWelcome = ({ windowSize }: FormWelcomeType) => {
    const { participantData, setParticipantData, setPos } =
        useContext(ExhibitionContext)!;

    return (
        <>
            <div
                style={{ minHeight: windowSize.innerHeight }}
                className='flex flex-col items-center justify-center gap-4 font-acumin'
            >
                <Image
                    src='/logo/biodiverse.png'
                    alt='logo'
                    sizes='100%'
                    width={0}
                    height={0}
                    className='h-auto w-[200px]'
                />
                <Input
                    className='w-[280px] bg-[#B7CBAD]'
                    placeholder='Name'
                    onChange={(e) =>
                        setParticipantData((state) => ({
                            ...state,
                            name: e.target.value
                        }))
                    }
                    value={participantData.name}
                />
                <Input
                    className='w-[280px] bg-[#B7CBAD]'
                    placeholder='Email'
                    onChange={(e) =>
                        setParticipantData((state) => ({
                            ...state,
                            email: e.target.value
                        }))
                    }
                    value={participantData.email}
                    type='email'
                />
                <RadioGroup
                    className='flex w-[280px] flex-row items-center justify-between'
                    onValueChange={(e) =>
                        setParticipantData((state) => ({ ...state, gender: e }))
                    }
                    value={participantData.gender}
                >
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='Male' id='Male' />
                        <Label
                            htmlFor='Male'
                            className='text-sm font-bold sm:text-base'
                        >
                            Male
                        </Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='Female' id='Female' />
                        <Label
                            htmlFor='Female'
                            className='text-sm font-bold sm:text-base'
                        >
                            Female
                        </Label>
                    </div>
                </RadioGroup>
                <Input
                    className='w-[280px] bg-[#B7CBAD]'
                    placeholder='Age'
                    onChange={(e) =>
                        setParticipantData((state) => ({
                            ...state,
                            age: Number.isNaN(Number(e.target.value))
                                ? 0
                                : Number(e.target.value)
                        }))
                    }
                    value={participantData.age === 0 ? '' : participantData.age}
                />
                <RadioGroup
                    className='flex w-[280px] flex-col justify-center'
                    onValueChange={(e) =>
                        setParticipantData((state) => ({
                            ...state,
                            jurusan: e
                        }))
                    }
                    value={participantData.jurusan}
                >
                    {listJurusan.map((data) => {
                        return (
                            <div
                                className='flex items-center space-x-2'
                                key={data}
                            >
                                <RadioGroupItem value={data} id={data} />
                                <Label
                                    htmlFor={data}
                                    className='text-sm font-bold sm:text-base'
                                >
                                    {data}
                                </Label>
                            </div>
                        );
                    })}
                </RadioGroup>
                <Input
                    className='w-[280px] bg-[#B7CBAD]'
                    placeholder='Instagram'
                    onChange={(e) =>
                        setParticipantData((state) => ({
                            ...state,
                            instagram: e.target.value
                        }))
                    }
                    value={participantData.instagram}
                />
                <Button
                    className='w-[150px] rounded-[12px] bg-[#639F55] font-bold'
                    onClick={() => {
                        localStorage.setItem(
                            'participantData',
                            JSON.stringify(participantData)
                        );
                        setPos(1);
                    }}
                    disabled={
                        !participantData.age ||
                        !participantData.email.match(
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        ) ||
                        !participantData.gender ||
                        !participantData.instagram ||
                        !participantData.jurusan ||
                        !participantData.name
                    }
                >
                    Next
                </Button>
            </div>
        </>
    );
};

export default FormWelcome;
