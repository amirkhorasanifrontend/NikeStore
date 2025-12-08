import React from 'react'
import Header from '../common/Header'
import { Outlet, ScrollRestoration, useMatches } from 'react-router'
import Footer from '../common/Footer'

const RootLayout = () => {
  
  const matches = useMatches();
  const hideFooter = matches.some((match) => match.handle?.hideFooter);
  return (
    <>
    <section id='root'>
        <Header />
          <ScrollRestoration />
        <main>
            <Outlet />
        </main>
        {!hideFooter && <Footer />}
    </section>
    </>
  )
}

export default RootLayout