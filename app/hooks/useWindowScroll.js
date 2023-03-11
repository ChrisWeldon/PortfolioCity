
import { Suspense, useMemo, useState, useEffect} from 'react'

export const dynamic='force-dynamic'

export default function useWindowScroll(){

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        if(typeof window == 'undefined'){
            setScrollPosition(0)
        }else{
            const position = window.pageYOffset;
            setScrollPosition(position);
        }
    };

    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            if(typeof window !== 'undefined'){
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    
    // Gutted this from drei/ScrollPosition.tsx
    // 0-1 for a range between from -> from + distance
    const range = (from, distance, margin = 0) => {
        const start = from - margin
        const end = start + distance + margin * 2
        return scrollPosition < start ? 0 : scrollPosition > end ? 1 : (scrollPosition - start) / (end - start)
    }
    // 0-1-0 for a range between from -> from + distance
    const curve = (from, distance, margin = 0) => {
        return Math.sin(range(from, distance, margin) * Math.PI)
    }
    // true/false for a range between from -> from + distance
    const visible = (from, distance, margin = 0) => {
        const start = from - margin
        const end = start + distance + margin * 2
        return scrollPosition >= start && scrollPosition <= end
    }

    const page = 0

    if(typeof window !== 'undefined'){
        Math.floor(scrollPosition/window.innerHeight)
    }

    return [ scrollPosition, range, curve, visible, page];
}
