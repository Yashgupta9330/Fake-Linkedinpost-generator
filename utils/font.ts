import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
export const chirpFont = localFont({
    src: [
        {
            path: '/fonts/Chirp-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '/fonts/Chirp-Bold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '/fonts/Chirp-Heavy.woff2',
            weight: '800',
            style: 'normal',
        },
    ]
})

