import {useEffect, useRef} from "react";

export default function useScroll (parentRef, childRef, callback){
    const observer = useRef()

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }

        const current=childRef.current
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersecting')
                callback()
            }
        }, options)

        observer.current.observe(current)

        return function (){
            observer.current.unobserve(current)
        }
    }, [callback])
}