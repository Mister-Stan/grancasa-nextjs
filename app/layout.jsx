import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/assets/styles/globals.css'

export const metadata  = {
    title: 'grancasa',
    keywords: 'rent, buy, sell, house, apartment, real estate',
    description: 'find the prefect place to live'
}

const MainLayout = ( { children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{ children } </main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout


