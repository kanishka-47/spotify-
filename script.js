 let songs=[
        {songname: "first song" ,filepath:"songs/1.mp3", coverimage:"https://m.timesofindia.com/photo/90201370/size-318920/90201370.jpg"},
        {songname: "second song" ,filepath:"songs/2.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3ugPvlaUbtP9skOJgxBP5vv8DfjBShfi_kgpZzF4H5VG1di73VfxbSPuxFZJME33wc0&usqp=CAU"},
        {songname: "third song" ,filepath:"songs/3.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6szIKduLq7u70rXZ9OfP6T_FCUa68ngMYVPZFfrDjdVE-VUXwm_oXxNEeCEsXrNx0uGw&usqp=CAU"},
        {songname: "fourth song" ,filepath:"songs/4.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NFmsFMCVdguDZ7zw_deaCCK5opi2sbpwBtd3YD9VESXTOHO4zR9sq8iptDWFcX5BjPA&usqp=CAU"},
        {songname: "fifth song" ,filepath:"songs/5.mp3", coverimage:"https://i.ytimg.com/vi/HZAyjBMTiaM/mqdefault.jpg"},
        {songname: "sixth song" ,filepath:"songs/6.mp3", coverimage:"https://i.ytimg.com/vi/paqZ42s8ju8/hqdefault.jpg"},
        {songname: "seven song" ,filepath:"songs/7.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6szIKduLq7u70rXZ9OfP6T_FCUa68ngMYVPZFfrDjdVE-VUXwm_oXxNEeCEsXrNx0uGw&usqp=CAU"},
        {songname: "eight song" ,filepath:"songs/8.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NFmsFMCVdguDZ7zw_deaCCK5opi2sbpwBtd3YD9VESXTOHO4zR9sq8iptDWFcX5BjPA&usqp=CAU"},
        {songname: "nine song" ,filepath:"songs/9.mp3", coverimage:"https://i.ytimg.com/vi/HZAyjBMTiaM/mqdefault.jpg"},
        {songname: "ten song" ,filepath:"songs/10.mp3", coverimage:"https://i.ytimg.com/vi/paqZ42s8ju8/hqdefault.jpg"},
    ]
    let audioelement=new Audio('songs/1.mp3');
    let play=document.querySelectorAll(".songItem i");
    let songinfoimg=document.querySelector(".songInfo img");    
    let progressbar=document.querySelector("#myProgressBar");
    let mainbtn=document.querySelector(".mainbtn");
    let songitem=document.querySelectorAll(".songItem");
    let songimage=document.querySelectorAll(".songimage");
    let songname=document.querySelectorAll(".songName");
    let previous=document.querySelector('.pervious');
    let next=document.querySelector(".next");
    let mastersongname=document.querySelector('#masterSongName');
    let songindex
            songname.forEach((e,i)=>{
                e.innerHTML=songs[i].songname;
            })
           
console.log("hello");

mainbtn.addEventListener('click', () => {
    console.log("Button clicked");
    if (audioelement.paused || audioelement.currentTime <= 0) {
        console.log("Playing audio");
        audioelement.play();
        mainbtn.classList.remove('fa-play-circle');
        mainbtn.classList.add('fa-circle-pause');
        songinfoimg.style.opacity = "1";
        // mastersongname.innerHTML="first song";
    } else {
        console.log("Pausing audio");
        audioelement.pause();
        mainbtn.classList.remove('fa-circle-pause');
        mainbtn.classList.add('fa-play-circle');
        songinfoimg.style.opacity = "0";
        play.forEach((playbtn)=>{
            // console.log("pause all btns");
            playbtn.classList.remove('fa-circle-pause');
            playbtn.classList.add('fa-play-circle');
        })

    }
});
    audioelement.addEventListener('timeupdate',()=>{
        let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
        progressbar.value=progress;
    })
    progressbar.addEventListener('click',()=>{
        console.log("change");
        audioelement.currentTime=progressbar.value*audioelement.duration/100;
    })
    let makeAllPlays = () => {
        play.forEach((playbtn) => {
            playbtn.classList.remove('fa-circle-pause');
            playbtn.classList.add('fa-play-circle');
            // console.log("all play btn");
        });
    };
    
    play.forEach((playbtn,i)=>{
    playbtn.addEventListener(("click"),(element)=>{
        makeAllPlays();
            element.target.classList.remove('fa-play-circle');
                element.target.classList.add('fa-circle-pause');
            audioelement.src=songs[i].filepath;
            audioelement.currentTime=0;
            audioelement.play();
            let duration = audioelement.duration;
        // console.log('Duration:', duration); 
             mastersongname.innerHTML=songs[i].songname;
             songindex=i;
             mainbtn.classList.remove('fa-play-circle');
             mainbtn.classList.add('fa-circle-pause');
          })})
            previous.addEventListener(('click'),()=>{
                makeAllPlays();
        if(songindex<0){
            songindex=9;
        }
        else{
            songindex=songindex-1;
        }
        console.log(songindex);
        // audioelement.currentTime=0;
        play[songindex].classList.remove('fa-play-circle');
        play[songindex].classList.add('fa-circle-pause');
        audioelement.src = `songs/${songindex+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        mainbtn.classList.remove('fa-play-circle');
        mainbtn.classList.add('fa-circle-pause');
        mastersongname.innerHTML=songs[songindex].songname;

            })

            next.addEventListener(('click'),()=>{
                makeAllPlays();
                if(songindex>9){
                    songindex=0;
                }
                else{
                    songindex=songindex+1;
                }
                console.log(songindex);
                // audioelement.currentTime=0;
                play[songindex].classList.remove('fa-play-circle');
                play[songindex].classList.add('fa-circle-pause');

                audioelement.src = `songs/${songindex+1}.mp3`;
                audioelement.currentTime=0;
                audioelement.play();
                mainbtn.classList.remove('fa-play-circle');
                mainbtn.classList.add('fa-circle-pause');
                 mastersongname.innerHTML=songs[songindex].songname;
                    })
    songimage.forEach((e,i)=>{
     e.src=songs[i].coverimage;
    })
    // if(audioelement.currentTime>0){
    //     play[songindex].classList.remove('fa-play-circle');
    //     play[songindex].classList.add('fa-circle-pause');
    // }