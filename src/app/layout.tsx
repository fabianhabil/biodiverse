import '@/styles/globals.css';
import { TailwindIndicator } from '@/components/atoms/TailwindIndicator/TailwindIndicator';
import { siteConfig } from '@/components/constants/site';
import { Toaster } from '@/components/ui/toaster';
import { fontAcumin, fontAveria, fontLivvic, fontLucette } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    }
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang='en' suppressHydrationWarning={true}>
                <meta name='color-scheme' content='only light' />
                <body
                    className={cn(
                        'font-livvic antialiased',
                        fontAveria.variable,
                        fontLivvic.variable,
                        fontAcumin.variable,
                        fontLucette.variable
                    )}
                    suppressHydrationWarning={true}
                >
                    <div>{children}</div>
                    <TailwindIndicator />
                    <Toaster />
                </body>
            </html>
        </>
    );
}
