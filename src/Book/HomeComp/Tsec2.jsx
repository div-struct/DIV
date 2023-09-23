import React, {useEffect} from 'react'
import Templates from '/public/code.js'; //REMOVE THIS CODE



const Tsec2 = () => {
    useEffect(() => {
        const timer= setTimeout(() => {
            var tsc2 = document.getElementById('tsec2');
            var mCon = document.createElement('div');
            mCon.setAttribute('id', 'mainCon');
            tsc2.appendChild(mCon);

// First ---------------------------------------------
            for(var i=0; i<Templates.length;i++){
                var Con = document.createElement('div');
                Con.setAttribute('id', 'container');
                mCon.appendChild(Con);
                var Fir = document.createElement('div');
                Fir.setAttribute('id', 'first');
                Con.appendChild(Fir);
                var Fpc = document.createElement('img');
                Fpc.setAttribute('id','fpic');
                var Fsrc = Templates[i].fullImage;
                Fpc.setAttribute('src', Fsrc);
                Fir.appendChild(Fpc);


// // Second --------------------------------------------------
                var Sec = document.createElement('div');
                Sec.setAttribute('id', 'second');
                Con.appendChild(Sec);
                var sLin = document.createElement('a');
                sLin.setAttribute('href', Templates[i].link);
                sLin.setAttribute('target', '_blank');
                Sec.appendChild(sLin);
                var sePic = document.createElement('img');
                sePic.setAttribute('id', 'simg');
                sePic.setAttribute('src', Templates[i].image);
                sLin.appendChild(sePic);
                var hidd = document.createElement('div');
                hidd.setAttribute('id', 'hdd');
                sLin.appendChild(hidd);
                var vH2 = document.createElement('h2');
                vH2.innerHTML = "View Live Demo";
                hidd.appendChild(vH2);

// Third -------------------------------------------------------
                var Des = document.createElement('div');
                Des.setAttribute('id', 'description');
                Con.appendChild(Des);
                var Nem = document.createElement('div');
                Nem.setAttribute('id', 'dName');
                Des.appendChild(Nem);
                var hNem = document.createElement('h1');
                hNem.innerHTML = Templates[i].name;
                Nem.appendChild(hNem);

                var dNo = document.createElement('div');
                dNo.setAttribute('id', 'dSno');
                Des.appendChild(dNo);
                var hNo = document.createElement('h1');
                hNo.innerHTML = "Template 0" + (i+1);
                dNo.appendChild(hNo);

                var dDesc = document.createElement('div');
                dDesc.setAttribute('id', 'dDes');
                Des.appendChild(dDesc);
                var dPar = document.createElement('p');
                dPar.innerHTML = Templates[i].description;
                dDesc.appendChild(dPar);

                var dBtn = document.createElement('div');
                dBtn.setAttribute('id', 'conBtn');
                Des.appendChild(dBtn);
                var dBp = document.createElement('button');
                dBp.setAttribute('class', 'bprice');
                dBp.innerHTML = Templates[i].price;
                dBtn.appendChild(dBp);
                var dBa = document.createElement('button');
                dBa.setAttribute('class', 'baddons');
                dBa.innerHTML = Templates[i].addons;
                dBtn.appendChild(dBa);

                (function (index) {
                    Fir.addEventListener('click', () => {
                        toggleHidItem(index);
                        console.log("Clicked");
                    });
                })(i);
            }


// Preview -------------------------------------------
            function toggleHidItem(index) {
                var Prev = document.createElement('div');
                Prev.setAttribute('id', 'preview');
                Con.appendChild(Prev);
                var Lcn = document.createElement('div');
                Lcn.setAttribute('id', 'lcon');
                Prev.appendChild(Lcn);
                var Ptp = document.createElement('div');
                Ptp.setAttribute('id', 'ptop');
                Lcn.appendChild(Ptp);
                var Ex = document.createElement('h1');
                Ex.innerHTML = "X";
                Ptp.appendChild(Ex);
                Ex.setAttribute('onclick', 'Rmv()');

                var Pmd = document.createElement('div');
                Pmd.setAttribute('id', 'pmid');
                Lcn.appendChild(Pmd);
                var Ppc = document.createElement('img');
                Ppc.setAttribute('id', 'lmg');
                var Psrc = Templates[index].fullImage;
                Ppc.setAttribute('src', Psrc);
                Pmd.appendChild(Ppc);

                var Pbt = document.createElement('div');
                Pbt.setAttribute('id', 'pbot');
                Lcn.appendChild(Pbt);
                var pbl = document.createElement('a');
                pbl.setAttribute('href', Templates[index].link);
                pbl.setAttribute('target', '_blank');
                Pbt.appendChild(pbl);
                var pbtn = document.createElement('button');
                pbtn.innerHTML = "View Live Demo";
                pbl.appendChild(pbtn);

                Prev.style.display = "flex";
            }
        }, 50);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <section id="tsec2">
        </section>
    )
}

export default Tsec2;