import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target, animationProps, ScrollProps) => {
    gsap.to(target, {
        ...animationProps, 
        scrollTrigger: {
            trigger: target, 
            toggleActions: "restart reverse  restart reverse",
            start: "top 85%",
            ...ScrollProps
        }
    })
}
export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut"

    })

    timeline.to(
        firstTarget,
        {
            ...animationProps, //y, duration...
            ease : "power2.inOut"
        },
        '<'
    )
    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease : "power2.inOut"
        },
        '<' //this symbolize animation at the start 
    )
}