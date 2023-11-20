import Image from 'next/image';

const photoList = [
    { src: '/footer/binus.png', alt: 'Logo Binus' },
    { src: '/footer/biodiverse.png', alt: 'Logo Biodiverse' },
    { src: '/footer/text.png', alt: 'Innovation Idea' },
    { src: '/footer/pulitzer.png', alt: 'Logo Pulitzer' }
];

const FooterExhibition = () => {
    return (
        <>
            <div className='mb-2 mt-6 flex flex-row items-center gap-4'>
                {photoList.map((data, index) => {
                    return (
                        <Image
                            src={data.src}
                            alt={data.alt}
                            key={index}
                            sizes='100%'
                            width={0}
                            height={0}
                            className='h-auto w-[80px]'
                        />
                    );
                })}
            </div>
        </>
    );
};

export default FooterExhibition;
