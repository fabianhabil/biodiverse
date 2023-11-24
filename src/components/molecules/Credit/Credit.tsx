import Image from 'next/image';

const Credit = () => {
    return (
        <>
            <div className='flex flex-col'>
                <Image
                    src='/logo/biodiverse.png'
                    alt='logo'
                    sizes='100%'
                    width={0}
                    height={0}
                    className='m-auto my-4 h-auto w-[200px]'
                />
                <p className='my-4 text-center font-acumin text-lg font-bold'>
                    Presented By:
                </p>
                <div className='mb-4 flex flex-row items-center justify-between'>
                    <Image
                        src='/logo/binus.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[110px]'
                    />
                    <Image
                        src='/logo/bec.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[110px]'
                    />
                    <Image
                        src='/logo/pulitzer.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[110px]'
                    />
                </div>
                <p className='mt-4 text-center font-acumin text-lg font-bold'>
                    in Collaboration with:
                </p>
                <div className='my-4 flex flex-row flex-wrap items-center justify-center gap-4'>
                    <Image
                        src='/logo/lkc.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[100px]'
                    />
                    <Image
                        src='/logo/bncc.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[100px]'
                    />
                    <Image
                        src='/logo/ifnation.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[100px]'
                    />
                    <Image
                        src='/logo/nhpfilm.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[100px]'
                    />
                    <Image
                        src='/logo/caritea.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[100px]'
                    />
                    <Image
                        src='/logo/decor.png'
                        alt='logo'
                        sizes='100%'
                        width={0}
                        height={0}
                        className='h-auto w-[100px]'
                    />
                </div>
                <p className='my-4 text-center font-acumin text-lg font-bold'>
                    Art Director:
                    <br />
                    <span className='text-base font-normal'>
                        Imanda Dea Sabiella
                    </span>
                </p>
                <p className='mb-4 text-center font-acumin text-lg font-bold'>
                    Content Strategists:
                    <br />
                    <span className='text-base font-normal'>
                        Raden Laksamana Suhdana Said
                    </span>
                    <br />
                    <span className='text-base font-normal'>Fadli Anshori</span>
                    <br />
                    <span className='text-base font-normal'>
                        Fadhil Tarmizi
                    </span>
                    <br />
                    <span className='text-base font-normal'>Yogiswara Javmika</span>
                </p>
                <p className='mb-4 text-center font-acumin text-lg font-bold'>
                    Designers:
                </p>
                <div className='flex flex-row justify-between gap-2 font-acumin text-base'>
                    <p>
                        Pandu Kusuma <br />
                        Avrilia Monica Wijaya <br />
                        Muhammad Alfath Riezky Anwar <br />
                        Luvena Nathania
                    </p>
                    <p className='text-end'>
                        Humayrah Adzani Putri Andika <br />
                        Ucok Godang <br />
                        Ratu Zahra Lesmana <br />
                        Muhammad Rizki Afdolli
                    </p>
                </div>
                <p className='my-4 text-center font-acumin text-lg font-bold'>
                    Website Developers
                </p>
                <div className='flex flex-row justify-between gap-2 font-acumin text-base'>
                    <p>
                        Budi Juarto
                        <br />
                        Ethan Elnathan Mathias
                    </p>
                    <p className='text-end'>Fabian Habil Ramdhan</p>
                </div>
                <p className='my-4 text-center font-acumin text-lg font-bold'>
                    Special Thanks to:
                </p>
                <div className='flex flex-row justify-between gap-2 font-acumin text-base'>
                    <p>
                        Johan Muliadi Kerta <br />
                        Tjia Fie Tjoe <br />
                        Rudy Aryanto
                        <br />
                        Ono Supriyadi
                        <br />
                        Panji Widya Nugraha
                        <br />
                        Indah Dwi Putri
                        <br />
                        Puji Prabowo
                        <br />
                        Santika Syaravina
                        <br />
                        Harry Kristian
                        <br />
                    </p>
                    <p className='text-end'>
                        BINUS Building Management
                        <br />
                        Koperasi Mandailing Jaya
                        <br />
                        Dinas Koperasi Mandailing Natal
                        <br />
                        Ucok Godang
                        <br />
                        Idris Sandi Matondang
                        <br />
                        Prayugo Utomo
                        <br />
                        Yusrizal Novwaril
                        <br />
                        Mila Savitri
                        <br />
                        Yuda Suryasa
                        <br />
                    </p>
                </div>
                <p className='my-4 text-center font-acumin text-lg font-bold'>
                    November 23 – December 8, 2023 <br />
                    at Library and Knowledge Center, BINUS @Bandung
                </p>
            </div>
        </>
    );
};

export default Credit;
