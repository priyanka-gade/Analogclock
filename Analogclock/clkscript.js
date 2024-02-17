setInterval(()=>{
    d=new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rot=30*hr+min/2;
    min_rot=6*min;
    sec_rot=6*sec;
    hours.style.transform=`rotate(${hr_rot}deg)`;
    minutes.style.transform=`rotate(${min_rot}deg)`;
    seconds.style.transform=`rotate(${sec_rot}deg)`;
},1000)