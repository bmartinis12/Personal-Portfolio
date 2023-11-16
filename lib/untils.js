export function constructMetaData({
    title = 'Benjamin Martinis: A Portfolio Showcasing My Coding Projects',
    description = 'Explore innovative coding projects showcasing expertise in JavaScript, Python, and more. Dive into precision-crafted digital solutions. Explore now.',
    image = '/assets/thumbnail.png',
    icons = '/assets/logo.ico',
    keywords = ['Benjamin Martinis', 'Coding', 'Projects', 'Portfolio', 'Ben Martinis'],
    noIndex = false,
}) {
    return {
        title,
        description,
        keywords,
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
        metadataBase: new URL('https://www.benjaminmartinis.com'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
};