import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const ModalPos2 = ({
    defaultOpen,
    next,
    wrongAnswer,
    answer,
    correctAnswer
}: {
    defaultOpen: boolean;
    next: () => void;
    wrongAnswer: boolean;
    answer: { src: string; nama: string };
    correctAnswer: { src: string; nama: string };
}) => {
    console.log({ answer, correctAnswer });
    return (
        <>
            <AlertDialog open={defaultOpen}>
                <AlertDialogContent className='bg-white font-acumin'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-center font-lucette text-2xl font-bold italic md:text-3xl'>
                            {wrongAnswer ? 'Wrong Answer!' : 'Correct Answer!'}
                        </p>
                        <div
                            className={cn(
                                'flex flex-row items-start gap-4',
                                wrongAnswer
                                    ? 'justify-between'
                                    : 'justify-center'
                            )}
                        >
                            <div
                                className={cn(
                                    'flex flex-1 flex-col items-center justify-center gap-4'
                                )}
                            >
                                <Image
                                    src={answer.src}
                                    alt={answer.nama}
                                    width={0}
                                    height={0}
                                    sizes='100%'
                                    className={cn(
                                        'h-[200px] w-auto rounded-[10px] border-[4px]',
                                        wrongAnswer
                                            ? 'border-red-500'
                                            : 'border-green-500'
                                    )}
                                />
                                <p className='w-[85%] text-center font-acumin'>
                                    {answer.nama}
                                </p>
                            </div>
                            {wrongAnswer && (
                                <div
                                    className={cn(
                                        'flex flex-1 flex-col items-center justify-center gap-4'
                                    )}
                                >
                                    <Image
                                        src={correctAnswer.src}
                                        alt={correctAnswer.nama}
                                        width={0}
                                        height={0}
                                        sizes='100%'
                                        className={cn(
                                            'h-[200px] w-auto rounded-[10px] border-[4px] border-green-500'
                                        )}
                                    />
                                    <p className='w-[85%] text-center font-acumin'>
                                        {correctAnswer.nama}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <AlertDialogFooter className='mx-auto'>
                        <AlertDialogAction
                            className='flex items-center justify-center bg-[#639F55] px-12 font-lucette text-xl font-bold hover:bg-[#639F55]/80'
                            onClick={next}
                        >
                            Next
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default ModalPos2;
