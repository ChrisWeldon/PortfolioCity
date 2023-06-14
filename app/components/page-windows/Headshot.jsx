
import useWindowScroll from '../../hooks/useWindowScroll'
import Image from 'next/image'

export default function Headshot(props){

    const [ scrollPosition, range, curve, visible, page] = useWindowScroll();

    return (
        <div id="Headshot" className={`
            flex flex-row space-x-6 my-10 h-64
            justify-center
            width-full
            `} >
            <div className='overflow-hidden h-64 w-40 rounded-xl'>
                <div className={`
                    h-full w-full scale-125
                    transition-all
                    opacity-0
                    -translate-y-10
                    ${scrollPosition>600? 'opacity-100 translate-y-0': ''}
                `}>
                    <Image
                        src="/photos/Zurich_3.JPG"
                        className='translate-y-7'
                        alt="picture of Chris jumping in front of Zurich"
                        objectFit='cover'
                        fill={true}
                    />
                </div>
            </div>
            <div className='overflow-hidden h-64 w-40 rounded-xl'>
                <div className={`
                    h-full w-full scale-150
                    transition-all
                    opacity-0
                    -translate-y-10
                    delay-100
                    ${scrollPosition>600? 'opacity-100 translate-y-0': ''}
                `}>
                    <Image
                        src="/photos/Zurich_1.JPG"
                        className='translate-y-7'
                        alt="picture of Chris jumping in front of Zurich"
                        objectFit='cover'
                        fill={true}
                    />
                </div>
            </div>
            <div className='overflow-hidden h-64 w-40 rounded-xl'>
                <div className={`
                    h-full w-full scale-150
                    transition-all
                    opacity-0
                    -translate-y-10
                    delay-200
                    ${scrollPosition>600? 'opacity-100 translate-y-0': ''}
                `}>
                    <Image
                        src="/photos/Zurich_2.JPG"
                        className='translate-y-8 translate-x-6'
                        alt="picture of Chris jumping in front of Zurich"
                        objectFit='cover'
                        fill={true}
                    />
                </div>
            </div>
        </div>
    )
}
