let p = document.querySelector('.post');
let other = document.querySelector('.other-content');
other.style.height = `${p.offsetHeight+10}px`;
other.style.width = `${p.offsetWidth}px`;

setTimeout(()=>{
    let start = 0;
    let posts = document.querySelector('.posts .num');
    let followers = document.querySelector('.followers .num');
    let following = document.querySelector('.following .num');
    let postC = 41;
    let followingc = 265;
    let followerC = 149;

    function increaseCount(count,type,speed) {
        let next = +type.textContent;
        if(next>count) {
            type.textContent = count;
        }else {
            setTimeout(()=>{
                type.textContent = speed+next;
                increaseCount(count,type,speed)
            },100)
        }
    }
    increaseCount(41,posts,7);
    increaseCount(147,followers,14);
    increaseCount(265,following,21);
},9000);