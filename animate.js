gsap.from('.my-nav-list', {duration:1.5, x:'120%', ease: "back.out(1.7)", opacity:0 })
gsap.from('.logo', {duration:1.4, x:'-120%', ease: "back.out(1.7)", opacity:0 })
gsap.from('.main-title', {duration:1.5, x:'-120%', ease: "back.out(1.7)", opacity:0, delay: 0.5 })
gsap.from('.description', {duration:1.5, x:'120%', ease: "back.out(1.7)", opacity:0, delay: 0.5 })
gsap.from('.description-button1', {duration:0.5, opacity:0, delay:2})
gsap.from('.description-button2', {duration:0.5, opacity:0, delay:2.5})
gsap.from('.hero', {duration:1, opacity:0, delay:1})


gsap.registerPlugin(ScrollTrigger);

gsap.from(".main-feature-title", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".main-feature-title",
        start: "top 700px",
    }
})
gsap.from(".main-feature-quote", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".main-feature-title",
        start: "top 700px",
    }
})
gsap.from(".user-main-desc", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".main-feature-title",
        start: "top 700px",
    }
})
gsap.from(".input-container", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".main-feature-title",
        start: "top 700px",
    }
})



gsap.from(".service-title", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".service-title",
        start: "top 800px",
    }
})
gsap.from(".service-main-desc", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".service-title",
        start: "top 800px",
    }
})


// ANIMATING THE CARDS

// first row
gsap.from(".card-left1", {
    x:"-100%",
    duration:0.8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card-left1",
        start: "top 800px",
    }
})
gsap.from(".card-right1", {
    x:"100%",
    duration:0.8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card-left1",
        start: "top 800px",
    }
})
// second row
gsap.from(".card-left2", {
    x:"-100%",
    duration:0.8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card-left2",
        start: "top 800px",
    }
})
gsap.from(".card-right2", {
    x:"100%",
    duration:0.8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card-left2",
        start: "top 800px",
    }
})




gsap.from(".address-container", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".address-container",
        start: "top 800px",
    }
})
gsap.from(".location-desc", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".location-desc",
        start: "top 850px",
    }
})
gsap.from(".location-quote", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".location-quote",
        start: "top 800px",
    }
})




gsap.from(".contact-us-title", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".contact-us-title",
        start: "top 800px",
    }
})
gsap.from(".contact-us-desc", {
    y:"100%",
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".contact-us-desc",
        start: "top 800px",
    }
})



gsap.from(".footer-card", {
    x:"100%",
    duration:0.8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".footer-card",
        start: "top 800px",
    }
})



