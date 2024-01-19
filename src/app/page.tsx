import Grid from '@/components/grid/Grid'
import GuideCardCarousel from '@/components/guideCardCarousel/GuideCardCarousel'
import MarkCard from '@/components/markCard/MarkCard'
import Navbar from '@/components/navbar/Navbar'


export default function Home() {
  return (
    <main className='h-svh'>
      <div className=''>
        <GuideCardCarousel/>
        <Navbar />
        <MarkCard/>
        <Grid/>
      </div>
    </main>
  )
}


