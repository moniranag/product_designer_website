// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1
// })

// gsap.to("#box2", {
//     x: 500,
//     y: 500,
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })

// gsap.from("#box2", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: 0.5,
// })

// gsap.to("h1", {
//     color: "red",
//     duration: 2,
//     delay: 1
// })



// gsap.from("h1", {
//     color: "red",
//     duration: 2,
//     delay: 1
// })


// gsap.from("h1", {
//     opacity: 0,
//     y: 20,
//     duration: 2,
//     delay: 1,
//     stagger: 0.356   // ek ek kr ke aaye text
// })


// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     repeat: -1,
//     yoyo: true
//     // repeat: -1    //intial to final infinite repeat
// })


// gsap.from("h1", {
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     stagger: 0.3,
//     repeat: -1,
//     yoyo: true

// })


// gsap.to("h1", {
//     y: 50,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "deeppink",
//     stagger: .4
// })




//-------------------------------------
// gsap.to("#box1", {
//     x: 1000,
//     backgroundColor: "red",
//     duration: 2,
//     delay: 1
// })


// gsap.from("#box2", {
//     x: 1000,
//     backgroundColor: "green",
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box1", {
//     x: 1000,
//     backgroundColor: "red",
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box1", {
//     x: -10,
//     backgroundColor: "yellow",
//     duration: 2,
//     delay: 1
// })


// gsap.from("#box1", {
//     backgroundColor: "violet",
//     x: 1000,
//     duration: 2,
//     delay: 1
// })


// gsap.from("#box1", {
//     backgroundColor: "deeppink",
//     x: -10,
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box1", {
//     backgroundColor: "seagreen",
//     y: 10,
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box1", {
//     backgroundColor: "green",
//     y: -10,
//     duration: 2,
//     delay: 1
// })


// gsap.from("#box1", {
//     backgroundColor: "grey",
//     y: -10,
//     duration: 2,
//     delay: 1
// })



// gsap.from("#box1", {
//     backgroundColor: "blue",
//     y: 10,
//     duration: 2,
//     delay: 1
// })

//default xsacale and yscale = 1 ,just a simple circle we have for now 


// function circleShapeChange() {

//     //by default x and y axis pr scale ki value is 1 of a circle .(defined)

//     var xscale = 1;
//     var yscale = 1;

//     // prev location(x&y) ki value by default set ki = 0(bydefault)
//     var xprev = 0;
//     var yprev = 0;

//     // setprev (Xand y)
//     xprev = dets.clientX;
//     yprev = dets.clientY;

//     // new location - prev location se difference find kiya.
//     // var diffx = dets.clientX - xprev;
//     // var diffy = dets.clientY - yprev;

//     //difference ki value agar +scale mai h tho ?
//     // use clamp()

//     xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
//     yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);


//     window.addEventListener("mousemove"), function (dets) {

//     }
// }

// circleShapeChange();




function circleShapeChange() {

    // let's say you have a (by default) circle and 
    //now you know that it's size will be decided by scale = 1

    // when mouse-circle will move === mousemove event ,direction(x&y) ===.clientX,.clientY== details(dets)


    //.clientX and .clientY  === clamp () ==> gsap.utils.clamp()

    //gsap.utils.clamp(100,200,2.4)
    //gsap.utils.clamp(100,200.2004)
    //gsap.utils.clamp(100,200,90)
    //90


    // gsap.utils.clamp(.8,1.2,?)

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    // xprev = dets.clientX;
    // yprev = dets.clientY;

    // var diffx = dets.clientX - xprev;
    // var diffy = dets.clientY - yprev;

    // xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    // yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);


    window.addEventListener("mousemove", function (dets) {

        // console.log(gsap.utils.clamp(.8, 1.2, dets.clientX - xprev));
        // console.log(gsap.utils.clamp(.8, 1.2, dets.clienty - yprev));

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

    })
}

circleShapeChange();










function circleMoveWithMouse() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circleMoveWithMouse();



