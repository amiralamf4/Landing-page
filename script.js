var tl=gsap.timeline()

tl.from("nav img",{
    y:-26,
    duration:0.7,
    opacity:0,
})
tl.from("#home",{
    y:-22,
    duration:0.5,
    opacity:0,
})
tl.from("#verify",{
    y:-22,
    duration:0.5,
    opacity:0,
})
tl.from("#apply",{
    y:-22,
    duration:0.5,
    opacity:0,
})
gsap.from(".page1-left h1",{
    x:-50,
    opacity:0,
    duration: 1,
})
gsap.from(".page1-left p",{
    x:-50,
    opacity:0,
    duration: 1,
})
gsap.from(".link2",{
    y:10,
    opacity:0,
    duration: 1,
})
gsap.from(".page1-right",{
    x:50,
    duration: 1,
    opacity:0,
})

