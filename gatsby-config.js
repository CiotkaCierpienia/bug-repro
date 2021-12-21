module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-flotiq',
            options: {
                authToken: '05aa3620e956e66a1ab2847545c043a9',
                forceReload: false,
                includeTypes: [
                    '_media',
                    'flotiqBlogAuthor',
                    'flotiqBlogPost',
                    'flotiqBlogTag',
                ],
                downloadMediaFile: true
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp'
    ]
}
