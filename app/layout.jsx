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
        <main>{ children } </main>
      </body>
    </html>
  )
}

export default MainLayout


