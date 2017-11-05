function navigateRecurse(pos, diff, steps){
    console.log(diff);
        if(diff < steps) return;
        window.setTimeout( ()=>{
            diff -= steps;
            scroll(0,pos + 2*diff); 
            navigateRecurse(pos,diff,steps);
        },2);
}

function navigate(id) {
    let top = document.getElementById(id).getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    let pos = document.documentElement.scrollTop;
    let diff = pos - top;
    let steps = 1;
    
    navigateRecurse(pos,diff,steps);
}