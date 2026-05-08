let storyData = [
  {
    id: 1,
    userImg:
      "https://i.pinimg.com/736x/41/cf/f9/41cff934da1c5777e858bfff7c68befc.jpg",
    videoSrc: "https://assets.mixkit.co/videos/4067/4067-720.mp4",
    userName: "Aryaman_3D",
    caption: "Cute 3D Boy Adventure! ✨ #cartoon",
    likes: "1.5k",
    comments: 210,
    shares: 45,
    isFollowing: false,
  },
  {
    id: 2,
    userImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    videoSrc: "https://assets.mixkit.co/videos/4332/4332-720.mp4",
    userName: "Cartoon_Vibes",
    caption: "Aesthetic 3D Girl Style 🌸",
    likes: "209",
    comments: 350,
    shares: 120,
    isFollowing: true,
  },
  {
    id: 3,
    userImg:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    videoSrc:
      "https://video-previews.elements.envatousercontent.com/c8aa1f0a-25d7-4e71-a171-b23d7c99668f/watermarked_preview/watermarked_preview.mp4",
    userName: "Dreamy_World",
    caption: "Magical 3D Room Setup 🏠✨",
    likes: "3.2k",
    comments: 400,
    shares: 500,
    isFollowing: false,
  },
  {
    id: 4,
    userImg:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150",
    videoSrc:
      "https://video-previews.elements.envatousercontent.com/594b6487-0797-4cb9-9d85-19eb00f70de6/watermarked_preview/watermarked_preview.mp4",
    userName: "Aesthetic_Art",
    caption: "Colorful abstract 3D vibes 🌈",
    likes: 99,
    comments: 88,
    shares: 20,
    isFollowing: true,
  },
  {
    id: 5,
    userImg:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    videoSrc:
      "https://video-previews.elements.envatousercontent.com/files/d8d3ebed-a097-4567-96f1-d00aad062a8c/video_preview_h264.mp4",
    userName: "Cat_Lover_3D",
    caption: "Meow! Cute 3D Kitten 🐱",
    likes: "5k",
    comments: "1.2k",
    shares: 800,
    isFollowing: false,
  },
];
document.addEventListener('mousedown', (e) => {
  if (e.detail > 1) { 
        e.preventDefault(); 
    }
},false);


let collectStoryData = "";

storyData.forEach(function (e, idx) {
  collectStoryData += `<div class="stories" id="${idx}">
        <video loop autoplay muted src="${e.videoSrc}"></video>
        <div class="bottom">
            <div class="user">
                <div class="userImage">
                    <img src="${e.userImg}" alt="">
                </div>
                <h4>${e.userName}</h4>
                <button class="followbtn">${e.isFollowing ? "following" : "follow"}</button>
            </div>
            <h6>${e.caption}</h6>
        </div>
        <div class="rightIcons">
            <div class="likeIcon">
                <h4><i class="ri-heart-3-fill likebtn"></i></h4>
                <h6 class="likecount">${e.likes}</h6>
            </div>
            <div class="CommentIcon">
                <h4><i class="ri-message-3-fill comment"></i></h4>
                <h6>${e.comments}</h6>
            </div>
            <div class="ShareIcon">
                <h4><i class="ri-share-forward-line"></i></h4>
                <h6>${e.shares}</h6>
            </div>
            <div class="MenuIcon">
                <h4><i class="ri-more-2-fill"></i></h4>
            </div>
        </div>
    </div>`; 
});



let AllStory = document.querySelector(".story-card");

AllStory.innerHTML = collectStoryData;

AllStory.addEventListener("click", function (dets) {
    if (dets.target.classList.contains("followbtn")) {
        let followbtn = dets.target;

        followbtn.classList.toggle("follow-active")
        if (followbtn.classList.contains("follow-active")) {
            followbtn.textContent = "following"
        } else {
            followbtn.textContent = "follow"
        }


    }
    if (dets.target.classList.contains("likebtn")) {
        let likeBtn = dets.target;
        let likeBtnParent = likeBtn.closest(".likeIcon")

        if (likeBtnParent) {
            let countlike = likeBtnParent.querySelector("h6")
            let currentlike = countlike.innerText.toLowerCase();
            let iskformat = currentlike.includes('k');

            likeBtn.classList.toggle("liked");
            if (likeBtn.classList.contains("liked")) {
                if (!iskformat) {
                    countlike.innerText = parseInt(currentlike) + 1;
                }
            } else {
                if (!iskformat) {

                    countlike.innerText = parseInt(currentlike) - 1;
                }

            }

        }


    }

    if (dets.target.classList.contains(".comment") || dets.target.closest(".CommentIcon")) {

        let Commentbtn = dets.target;
        let CommentCountElement = Commentbtn.closest(".CommentIcon").querySelector("h6");

    }

})

let currentText = document.querySelector(".rn");
let AddnewChar = 'ABCDEFGHIJKLMNIOPQRSTUVWXYZ';
let originalText = currentText.innerText;
let interval = 0;

currentText.addEventListener("mouseenter", () => {
    clearInterval(interval);
    let iterations = 0;

    interval = setInterval(() => {
        let rendomText = originalText.split("").map((letter, index) => {
            if (index < iterations) {
                return originalText[index];
            }

            if (originalText[index] === " ") return " ";

            return AddnewChar[Math.floor(Math.random() * AddnewChar.length)];
        }).join("");

        currentText.innerText = rendomText;

       
        iterations += 0.25;

        if (iterations >= originalText.length) {
            clearInterval(interval);
            currentText.innerText = originalText; 
        }
    },40);
});

document.addEventListener('click', () => {
    window.focus();
});
