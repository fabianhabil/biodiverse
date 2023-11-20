import {
    JetBrains_Mono as FontMono,
    Inter as FontSans,
    Livvic,
    Averia_Serif_Libre
} from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans'
});

export const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono'
});

export const fontLivvic = Livvic({
    subsets: ['latin'],
    variable: '--font-livvic',
    weight: ['100', '200', '300', '400', '500', '600', '700', '900']
});

export const fontAveria = Averia_Serif_Libre({
    subsets: ['latin'],
    variable: '--font-averia',
    weight: ['300', '400', '700']
});

export const fontLucette = localFont({
    src: [
        {
            path: '../fonts/Lucette-Regular.ttf',
            style: 'normal',
            weight: 'normal'
        },
        {
            path: '../fonts/Lucette-Regularitalic.ttf',
            style: 'italic',
            weight: 'normal'
        }
    ],
    variable: '--font-lucette'
});

export const fontAcumin = localFont({
    src: [
        {
            path: '../fonts/Acumin-RPro.woff',
            style: 'normal',
            weight: 'normal'
        },
        {
            path: '../fonts/Acumin-BdPro.woff',
            style: 'normal',
            weight: '700'
        },
        {
            path: '../fonts/Acumin-ItPro.woff',
            style: 'italic',
            weight: '400'
        },
        {
            path: '../fonts/Acumin-BdItPro.woff',
            style: 'italic',
            weight: '700'
        }
    ],
    variable: '--font-acumin'
});
