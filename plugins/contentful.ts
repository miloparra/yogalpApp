import { createClient } from "contentful"

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const client = createClient({
        space: config.public.contentfulSpaceId,
        accessToken: config.public.contentfulAccessToken,
    })

    return {
        provide: {
            contentful: client,
        },
    }
})