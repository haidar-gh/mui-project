import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import type { PropsWithChildren } from 'react'
import styliSRTLPlugin from 'stylis-plugin-rtl'

const cache = createCache({
    key: "mui",

})

export default function RTL ({children } :PropsWithChildren ){
    return <CacheProvider value={cache}>{children}</CacheProvider>
}