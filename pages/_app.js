import AuthProvider from '@/components/AuthProvider'
import '@/styles/globals.css'

import { SessionProvider } from "next-auth/react"


export default function App({Component, pageProps: { session, ...pageProps }}) {
    return (
      // <AuthProvider >
      <SessionProvider session={session}> 
        <Component {...pageProps}/>
       </SessionProvider> 
      // </AuthProvider> 
    )
  }
