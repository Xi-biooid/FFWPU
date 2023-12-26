// =======================================================
// =======================  header================================
// =======================================================
let navBar = document.querySelector('.nav-bar-1');
let navBar2 = document.querySelector('.nav-bar-2');


let highLightMenu = () => {
  let scrollPos = window.scrollY;
  if (window.innerWidth > 910 && scrollPos > 680 && scrollPos < 9285) {
    navBar.classList.add("nav-bar-1-active");
  } else {
    navBar.classList.remove("nav-bar-1-active");
  }

  if (window.innerWidth < 910 && scrollPos > 100 ) {
    navBar2.classList.add("nav-bar-2-active");
  } else {
    navBar2.classList.remove("nav-bar-2-active");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", highLightMenu);
});


// =============================navBar2




// ======================================================= video
const videoFileDivs = document.querySelectorAll(".talents-video-files");

const videoDescription = document.createElement("h4");
videoDescription.className = "video-description";
videoDescription.id = "video-text";
videoDescription.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing.";

videoFileDivs.forEach((element) => {
  element.appendChild(videoDescription.cloneNode(true));
});

// =====================================================audio
const volumeSliders = document.querySelectorAll('.volume-slider');
const volumeLabels = document.querySelectorAll('.volume-label');

volumeSliders.forEach((slider, index) => {
    slider.addEventListener('input', () => {
        const volumeValue = slider.value;
        volumeLabels[index].textContent = volumeValue + '%';
    });
});
// =========================================================story
let scrollContainer = document.querySelector(".stories-container");
let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft +=120;
});
backBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 120;
    scrollContainer.style.scrollBehavior = "smooth"
});
// =========================================================story pop up
// =========================================================story pop up
const images = [...document.querySelectorAll('.image')];
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-btn');
const rightArrow = document.querySelector('.right-btn');

let index = 0;

images.forEach((item, i) => {
  item.addEventListener('click', () => {
    popup.classList.add('active');
    updateImage(i);
  });
});

const updateImage = (i) => {
  let path = images[i].src;
  largeImage.style.opacity = 0;

  setTimeout(() => {
    largeImage.src = path;
    imageName.innerHTML = `Story ${i + 1}. Your friend`;
    imageIndex.innerHTML = `0${i + 1}`;
    index = i;

    setTimeout(() => {
      largeImage.style.opacity = 1;
    }, 10);
  }, 0);
};

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

leftArrow.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 120;

  if (index > 0) {
    updateImage(index - 1);
  }
});

rightArrow.addEventListener('click', () => {
    scrollContainer.scrollLeft +=120;
  if (index < images.length - 1) {
    updateImage(index + 1);
  }
});
// ==============================================================
// ==============================================================
// ==============================================================
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("users-bars");
let middle = document.getElementsByClassName("text-chat-container")
let mainTabLinks = document.getElementsByClassName("main-link");
let activeBar = document.getElementsByClassName("user-bar");
const firstLink = document.getElementById("1st-link");
const firstMainLink = document.getElementById("first-main-link");
const secondMainLink = document.getElementById("second-main-link");
let activeProfile = document.getElementsByClassName("chat-profile-2");
let theSample = document.getElementById("sample-users-area")

const responsiveClass = document.getElementsByClassName("responsive-class");
const usersChatContainer = document.querySelector(".users-chat-container")
const textChatContainer = document.querySelector(".text-chat-container")
const phoneDiv1 = document.querySelector(".phone-div-1")
const phoneDiv2 = document.querySelector(".phone-div-2")
const phoneDiv3 = document.querySelector(".phone-div-3")
const smaallToggle = document.querySelector(".small-toggle")
const audioBigChatArea = document.querySelector(".audio-bigchat-area")


  document.addEventListener("DOMContentLoaded", () => {
    
    firstMainLink.addEventListener("click", () => {
      usersChatContainer.classList.toggle('responsive-class');
    });
    smaallToggle.addEventListener("click", () => {
      audioBigChatArea.classList.toggle('active-box');
    });

    phoneDiv1.addEventListener("click", () => {
      usersChatContainer.classList.toggle('responsive-class');
    });
    phoneDiv2.addEventListener("click", () => {
      usersChatContainer.classList.toggle('responsive-class');
    });
    phoneDiv3.addEventListener("click", () => {
      usersChatContainer.classList.toggle('responsive-class');
    });

    const chatProfileContainers = document.querySelectorAll(".chat-profile");

    chatProfileContainers.forEach(container => {
      const phoneDiv = document.createElement("div");
      phoneDiv.className = "phone-div";
      container.appendChild(phoneDiv);

      phoneDiv.addEventListener("click", () => {
        usersChatContainer.classList.toggle('responsive-class');
      });
    });
  });



for (let activeBars of activeBar) {
  activeBars.addEventListener("click", openBar);
}
function openBar(event) {
  for (let activeBars of activeBar) {
    activeBars.classList.remove("edd");
  }
  for (let i = 0; i < mainTabLinks.length; i++) {
    if (mainTabLinks[i].classList.contains("active-main-link")) {
      mainTabLinks[i].classList.remove("active-main-link");
    }
  }
  // textChatContainer.classList.add('responsive-class');
  usersChatContainer.classList.add('responsive-class');
  firstMainLink.classList.add("active-main-link")
  event.currentTarget.classList.add("edd");

}




function opentab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("a-tab");
    }
    for (let i = 0; i < activeBar.length; i++) {
      if (activeBar[i].classList.contains("edd")) {
        activeBar[i].classList.remove("edd");
      }
    }

    for (let i = 0; i < mainTabLinks.length; i++) {
      if (mainTabLinks[i].classList.contains("active-main-link")) {
        mainTabLinks[i].classList.remove("active-main-link");
      }
    }

    secondMainLink.classList.add("active-main-link")
    firstMainLink.classList.add("active-main-link")
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("a-tab");

};



function openMiddleTab(middleName){
  for (let middleMessage of middle) {
    middleMessage.classList.remove("a-middle-tab");
}
document.getElementById(middleName).classList.add("a-middle-tab");

};

function sampleIsActive(profileName){
  for (let activeProfiles of activeProfile){
    activeProfiles.classList.remove("chat-profile-active")
  };
  document.getElementById(profileName).classList.add("chat-profile-active");
}

function openMain() {
  for (let mainLinks of mainTabLinks) {
    mainLinks.classList.remove("active-main-link");
  }
  event.currentTarget.classList.add("active-main-link");

  firstLink.classList.add("active-link")

  // Check if the clicked element is the first one
  if (event.currentTarget === mainTabLinks[0]) {
    return;
  }

  // Remove the "edd" class from elements with the class "user-bar"
  for (let i = 0; i < activeBar.length; i++) {
    if (activeBar[i].classList.contains("edd")) {
      activeBar[i].classList.remove("edd");
    }
  }

  usersChatContainer.classList.add('responsive-class');
}

// =======================================================
// =======================  video ================================
// =======================================================
let talentsProfile = document.getElementsByClassName("the-profile")
let talentContent = document.getElementsByClassName("show-area")


for (let talentsProfiles of talentsProfile) {
  talentsProfiles.addEventListener("click",profileIsActive);
}

function profileIsActive() {
  for (let talentsProfiles of talentsProfile) {
      talentsProfiles.classList.remove("the-profile-active");
  }
    event.currentTarget.classList.add("the-profile-active");
}


function talentIsActive(talentName){
  for( let talentContents of talentContent){
    talentContents.classList.remove("active-user-show")
  };
  document.getElementById(talentName).classList.add("active-user-show");
}
// =======================================================
// =======================  the form ================================
// =======================================================
const sign_in_btn = document.querySelectorAll(".sign-in-btn");
const sign_up_btn = document.querySelectorAll(".sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const activeFormButton = document.querySelector(".exit-form");
const theFormContainer = document.querySelector(".the-form-container");
const signInMain = document.querySelectorAll(".signin-main");


const body = document.body;

activeFormButton.addEventListener("click", function() {
    theFormContainer.classList.remove('active-form');
    body.classList.remove('darken-background');
});

signInMain.forEach(function(element) {
    element.addEventListener("click", function() {
        theFormContainer.classList.toggle('active-form');
        body.classList.toggle('darken-background');
    });
});





sign_up_btn.forEach(function(element) {
  element.addEventListener("click", function() {
    container.classList.add("sign-up-mode");
  });
});






sign_in_btn.forEach(function(element) {
  element.addEventListener("click", function() {
    container.classList.remove("sign-up-mode");
  });
});



sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});



// =======================================================
// =======================  join us ================================
// =======================================================
const joinUsForm = document.querySelector(".join-us-form");
const exitRegisterForm = document.querySelector(".exit-register-form");
const registerFormBtn= document.querySelector(".register-form-btn");

exitRegisterForm.addEventListener("click",()=>{
  joinUsForm.classList.remove("active-join-us");
  body.classList.toggle('darken-background');
})
registerFormBtn.addEventListener("click",()=>{
  joinUsForm.classList.add("active-join-us");
  body.classList.toggle('darken-background');
})
// =======================================================
// =======================  faqs ================================
// =======================================================

let prev = document.querySelector('.prev');
let otherFaqs = document.querySelector('.other-faqs');
let FaqsBox = document.querySelector('.faqs-box');

let degrees = 0 ;

prev.addEventListener("click",function(){
    degrees += 45;
    FaqsBox.style = ` transform: perspective(1000px) rotateY(${degrees}deg)`;
})

otherFaqs.addEventListener("click",function(){
    degrees -= 45;
    FaqsBox.style = ` transform: perspective(1000px) rotateY(${degrees}deg)`;
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




