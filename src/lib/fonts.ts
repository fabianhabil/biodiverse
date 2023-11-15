import {
    JetBrains_Mono as FontMono,
    Inter as FontSans,
    Livvic,
    Averia_Serif_Libre
} from 'next/font/google';

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
