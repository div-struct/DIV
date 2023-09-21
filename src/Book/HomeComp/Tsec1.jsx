import React, {useEffect} from 'react';


const Tsec1 = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("reading once");
        
            var tem = document.getElementById('ttemp');
            var sCon = document.createElement('div');
            sCon.setAttribute('id', 'sContainer');
            tem.appendChild(sCon);

            var sWrap = document.createElement('div');
            sWrap.setAttribute('class', 'sWrapper');
            sCon.appendChild(sWrap);

            for(var s=0; s<Templates.length;s++){
                var sSlid = document.createElement('div');
                sSlid.setAttribute('class', "sSlide");
                sWrap.appendChild(sSlid);
                var sTo = Templates[s].link;
                var sLin = document.createElement('a');
                sLin.setAttribute('href', sTo);
                sLin.setAttribute('id', 'sLink');
                sLin.setAttribute('target', '_blank');
                sSlid.appendChild(sLin);
                var sAdd = Templates[s].image;
                var sPi = document.createElement('img');
                sPi.setAttribute('id', "spic");
                sPi.setAttribute('src', sAdd);
                sLin.appendChild(sPi); 
            }
            
            // FUNCTIONS FOR THE AUTO SWIPER  
            const wrap = document.querySelector('.sWrapper');
            const slides = document.querySelectorAll('.sSlide');
            let cIndex = 0;

            function slide(index) {
                if(index < 0 || index >= slides.length) {
                    return;
                }
                cIndex = index;
                const offset = -cIndex * 100;
                wrap.style.transform = `translateX(${offset}%)`;
            }

            function swiper() {
                cIndex = (cIndex + 1) % slides.length;
                slide(cIndex);
            }

            setInterval(swiper, 3000);

        }, 50); // 1000 milliseconds = 1 second

        // Clear the timer when the component unmounts or if it needs to reset
        return () => {
            clearTimeout(timer);
        };
    }, []); // Empty dependency array to run this effect only once

    return (
        <section id="ttemp">
        </section>
    )
}

export default Tsec1;