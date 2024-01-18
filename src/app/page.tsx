import Grid from '@/components/grid/Grid'
import MarkCard from '@/components/markCard/MarkCard'
import Navbar from '@/components/navbar/Navbar'


export default function Home() {
  return (
    <main className='h-svh'>
      <div className=''>
        <Navbar />
        <MarkCard/>
        <Grid/>
      </div>
    </main>
  )
}


