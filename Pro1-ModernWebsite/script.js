const scroll = new LocomotiveScroll({
    el: document.querySelector('[id="main"]'),
    smooth: true
});

function firstPageAnim() {
    var t1 = gsap.timeline()

    t1.from('#nav', {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    t1.to(".bounding .boundingelem", {
        y: 2,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        stagger: .2,
        color: "white"
    })

    t1.from("#hero-footer", {
        y: -10,
        opacity: 0,
        duration: 1.2,
        delay: -1,
        ease: Expo.easeInOut
    })
}

firstPageAnim()

//clamp() in gsap 
// y-axis pr shape change krne ke liye ,take value less than 1 
// max value= 1.2
// defalut =1
// min=0.8

var timeout;

function circleShapeChange() {
    //define default scale value 
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        // var xdiff = dets.clientX - xprev;
        // var ydiff = dets.clientY - yprev;

        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleFollowerMouse(xscale, yscale);
        timeout = setTimeout(function () {
            document.querySelector('[id="mini-circle"]').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1))`;
        }, 100);
    });
}
circleShapeChange()

function circleFollowerMouse(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector('[id="mini-circle"]').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
circleFollowerMouse()

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = console.log(dets.clientY - elem.getBoundingClientRect().top);
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.utils.clamp(-20, 20, diff);
        // console.log(dets.clientX, dets.clientY);
        // elem.querySelector("img").opacity=1

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
        });
    });

});










