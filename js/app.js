(() => {

    let navBtn = document.querySelectorAll("nav>a");

    let sec1 = document.getElementById("sec1");
    let sec2 = document.getElementById("sec2");
    let sec3 = document.getElementById("sec3");
    let sec4 = document.getElementById("sec4");

    let load = (entries) => {
        entries.forEach((entry) => {
                navBtn.forEach((btn)=>{
                    btn.classList.remove("act");
                })

                switch (entry.target) {
                    case sec1: 
                        navBtn[0].classList.add('act');
                        break;
                    case sec2:
                        navBtn[1].classList.add('act');
                        break;
                    case sec3: 
                        navBtn[2].classList.add('act');
                        break;
                    case sec4: 
                        navBtn[3].classList.add('act');
                        break;
                }
            
        })
    }

    const obs = new IntersectionObserver(load, {
        root: null,
        rootMargin: "10px",
        threshold: 0.8
    })

    obs.observe(sec1);
    obs.observe(sec2);
    obs.observe(sec3);
    obs.observe(sec4);

})();
