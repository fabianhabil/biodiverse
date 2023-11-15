import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function IndexPage() {
    return (
        <>
            <div className='relative h-screen w-screen bg-[#F6EFE8]'>
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: 10,
                        aspectRatio: 1,
                        backgroundPosition: 'absolute',
                        backgroundColor: '#F6EFE8'
                    }}
                    src='/video/biodiverse.mp4'
                />
                <div className='absolute z-20 flex h-screen w-full flex-col items-center justify-between py-8'>
                    <div className='flex flex-row items-start gap-8 px-8'>
                        <Image
                            src='/logo/binus.png'
                            className='h-auto w-[100px]'
                            sizes='100vw'
                            width={0}
                            height={0}
                            alt='logo binus'
                        />
                        <Image
                            src='/logo/bec.png'
                            className='h-auto w-[103px]'
                            sizes='100vw'
                            width={0}
                            height={0}
                            alt='logo binus'
                        />
                        <Image
                            src='/logo/pulitzer.png'
                            className='h-auto w-[150px]'
                            sizes='100%'
                            width={0}
                            height={0}
                            alt='logo binus'
                        />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <Button className='rounded-[30px] bg-[#727902] p-6 font-livvic  text-lg font-bold text-white hover:bg-[#727902]/80 sm:px-12 sm:text-xl md:p-8 md:px-16 md:text-2xl'>
                            Get Started!
                        </Button>
                        <p className='text-center font-livvic text-xs font-bold md:text-base'>
                            The Innovation Idea Summit 2023 <br />
                            BINUS Entrepreneurship Center @Bandung
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
