import Body from '@/components/body/body'
import Modal from '@/components/modal'
import {Road_Rage,Roboto} from 'next/font/google'

const roadRage = Road_Rage({
  weight: '400',
  subsets:['latin'],
  display: 'swap'
})
const roboto =Roboto({
  weight:'100',
  subsets: ['latin'],
  display: "swap"
})

export default function Home() {
  return (
    <div >
      <div className='mb-4'>
      <Body roboto={roboto}/>
      </div>
      
    </div>
  )
}
