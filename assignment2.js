const led = () =>{
    let btext = document.getElementById('lights')
    for(x=1; x<6;x++){
    let  bid = document.getElementById('lightid' .concat(x))
    console.log(bid)
    if(bid.src.match('on_bulb')){
        bid.src = "off_bulb.jpg"
        btext.innerHTML = "Light OFF";
        btext.style.color = "black"
    }
    else{
        bid.src = "on_bulb.jpg"
        btext.innerHTML = "Light ON"
        btext.style.color = "red"
    }
}

}