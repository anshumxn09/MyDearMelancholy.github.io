let playy = false;
const play = document.getElementById('play');
let songLocation = 1;
let songName = "Musics/1.mp3";
let mySong = new Audio(songName);
let seekbar = document.getElementById('seekbar');
let songname = document.getElementById('songname');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

const updateSeek = () => {
    seekbar.value = ((mySong.currentTime / mySong.duration)*100);
    if (seekbar.value == 100){
        playNext();
    }
}

const toPlayMusic = () => {
    if(!playy){
        switch (songLocation) {
            case 1:
                songname.innerText = "The Weeknd - Call Out My Name" 
                break;
            case 2:
                songname.innerText = "The Weeknd - Try Me" 
                break;
            case 3:
                songname.innerText = "The Weeknd - Wasted Times" 
                break;
            case 4:
                songname.innerText = "The Weeknd - I Was Never There" 
                break;
            case 5:
                songname.innerText = "The Weeknd - Hurt You" 
                break;
            case 6:
                songname.innerText = "The Weeknd - Privilege" 
                break; 
            default:
                break;
        }
        playy=true;
        mySong.play();
        mySong.addEventListener('timeupdate', updateSeek);
        play.src = "Images/pause.png";
    }else{
        playy=false;
        mySong.pause();
        play.src = "Images/play.png";
    }
}

prev.addEventListener('click', ()=> {
    playy = false;
    mySong.pause();
    if(songLocation == 6){
        songName = "Musics/5.mp3";
        mySong = new Audio(songName);
        songLocation = 5;
    }
    else if(songLocation == 5){
        songName = "Musics/4.mp3";
        mySong = new Audio(songName);
        songLocation = 4;
    }else if(songLocation == 4){
        songName = "Musics/3.mp3";
        mySong = new Audio(songName);
        songLocation = 3;
    }
    else if(songLocation == 3){
        songName = "Musics/2.mp3";
        mySong = new Audio(songName);
        songLocation = 2;
    }
    else if(songLocation == 2){
        songName = "Musics/1.mp3";
        mySong = new Audio(songName);
        songLocation = 1;
    }
    else{
        songName = "Musics/6.mp3";
        mySong = new Audio(songName);
        songLocation = 6;
    }
    toPlayMusic();
})

const playNext = () => {
        playy = false;
        mySong.pause();
        if(songLocation == 6){
            songName = "Musics/1.mp3";
            mySong = new Audio(songName);
            songLocation = 1;
        }
        else if(songLocation == 5){
            songName = "Musics/6.mp3";
            mySong = new Audio(songName);
            songLocation = 6;
        }else if(songLocation == 4){
            songName = "Musics/5.mp3";
            mySong = new Audio(songName);
            songLocation = 5;
        }
        else if(songLocation == 3){
            songName = "Musics/4.mp3";
            mySong = new Audio(songName);
            songLocation = 4;
        }
        else if(songLocation == 2){
            songName = "Musics/3.mp3";
            mySong = new Audio(songName);
            songLocation = 3;
        }
        else{
            songName = "Musics/2.mp3";
            mySong = new Audio(songName);
            songLocation = 2;
        }
        toPlayMusic();
}

next.addEventListener('click', playNext);


seekbar.addEventListener('change', ()=> {
    mySong.currentTime = ((seekbar.value * mySong.duration)/100);
})


mySong.addEventListener('timeupdate', updateSeek);

Array.from(document.getElementsByClassName('__song')).forEach((element) => {
    element.addEventListener('click', (event)=> {
        switch (element.id) {
            case "1":
                songLocation = 1;
                mySong.pause();
                seekbar.value = 0;
                songName = "Musics/1.mp3";
                mySong = new Audio(songName);
                playy = false;
                toPlayMusic();
                break;
            case "2":
                songLocation = 2;
                mySong.pause();
                seekbar.value = 0;
                songName = "Musics/2.mp3";
                mySong = new Audio(songName);
                playy = false;
                toPlayMusic();
                break;
            case "3":
                songLocation = 3;
                mySong.pause();
                seekbar.value = 0;
                songName = "Musics/3.mp3";
                mySong = new Audio(songName);
                playy = false;
                toPlayMusic();
                break;
            case "4":
                songLocation = 4;
                mySong.pause();
                seekbar.value = 0;
                songName = "Musics/4.mp3";
                mySong = new Audio(songName);
                playy = false;
                toPlayMusic();
                break;
            case "5":
                songLocation = 5;
                mySong.pause();
                seekbar.value = 0;
                songName = "Musics/5.mp3";
                mySong = new Audio(songName);
                playy = false;
                toPlayMusic();
                break;
            case "6":
                songLocation = 6;
                mySong.pause();
                seekbar.value = 0;
                songName = "Musics/6.mp3";
                mySong = new Audio(songName);
                playy = false;
                toPlayMusic();
                break;
            default:
                break;
        }
    })
})

play.addEventListener('click', toPlayMusic);
