export function constructMetaData({
    title = 'Benjamin Martinis',
    description = 'Benjamin Martinis personal website and portfolio!',
    image = '/assets/thumbnail.png',
    icons = '/assets/logo.ico',
    noIndex = false,
}) {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@BenMartinis'
        },
        icons,
        metadataBase: new URL('https://benjamin-martinis.vercel.app/'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
};