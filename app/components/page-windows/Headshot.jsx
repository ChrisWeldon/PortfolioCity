
import useWindowScroll from '../../hooks/useWindowScroll'
import Image from 'next/image'

export default function Headshot(props){

    const [ scrollPosition, range, curve, visible, page] = useWindowScroll();

    return (
        <div className='w-full h-fit my-5'>
            <div id="Headshot" className={`
                flex flex-row space-x-1 md:space-x-6 mb-2
                justify-center
                h-fit
                `} >
                <div className='overflow-hidden
                    h-64 w-0 md:w-40
                    lg:w-48 lg:h-76
                    xl:w-60 xl:h-96
                    rounded-xl'>
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
                <div className='overflow-hidden 
                    h-64 w-0 md:w-40 
                    lg:w-48 lg:h-76
                    xl:w-60 xl:h-96
                    rounded-xl'>
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
                <div className='overflow-hidden
                    h-[28rem] md:h-64 w-4/5 md:w-40 
                    lg:w-48 lg:h-76
                    xl:w-60 xl:h-96
                    rounded-xl'>
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
            <p className='text-md my-5 text-center'>
                <span className={`
                    italic
                    delay-200
                    opacity-0
                    ${scrollPosition>600? 'opacity-100': ''}
                `}>
                    Me, in Zurich, happy to see my family.
                </span>
            </p> 
        </div>
    )
}
