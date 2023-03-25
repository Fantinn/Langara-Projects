const bdMode = document.getElementById('bdMode');
const favicon = document.getElementById('favIcon');
const gitIcon = document.getElementById('gitIcon');
const linkedIcon = document.getElementById('linkedIcon');
const body = document.querySelector('body');
const webIcons = document.querySelectorAll('.webIcon');
const gitHubIcons = document.querySelectorAll('.gitHubIcon');

const savedMode = localStorage.getItem('brightnessMode');
if (savedMode) {
  body.classList.add(savedMode);
}

if (body.classList.contains('dark')) {
  bdMode.src = 'images/icons/brightMode.png';
  favicon.href = 'images/icons/bright-favicon-32x32.png';
  gitIcon.src = 'images/mediaIcons/gitHubLight.png';
  linkedIcon.src = 'images/mediaIcons/linkedinLight.png';
  for (let i = 0; i < webIcons.length; i++) {
    webIcons[i].src = 'images/mediaIcons/webBright.png';
  }
  for (let i = 0; i < gitHubIcons.length; i++) {
    gitHubIcons[i].src = 'images/mediaIcons/gitHubLight.png';
  }
} else {
  bdMode.src = 'images/icons/darkMode.png';
  favicon.href = 'images/icons/dark-favicon-32x32.png';
  gitIcon.src = 'images/mediaIcons/gitHubDark.png';
  linkedIcon.src = 'images/mediaIcons/linkedinDark.png';
  for (let i = 0; i < webIcons.length; i++) {
    webIcons[i].src = 'images/mediaIcons/webDark.png';
  }
  for (let i = 0; i < gitHubIcons.length; i++) {
    gitHubIcons[i].src = 'images/mediaIcons/gitHubDark.png';
  }
}

bdMode.addEventListener('click', function() {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    bdMode.src = 'images/icons/brightMode.png';
    favicon.href = 'images/icons/bright-favicon-32x32.png';
    gitIcon.src = 'images/mediaIcons/gitHubLight.png';
    linkedIcon.src = 'images/mediaIcons/linkedinLight.png';
    for (let i = 0; i < webIcons.length; i++) {
      webIcons[i].src = 'images/mediaIcons/webBright.png';
    }
    for (let i = 0; i < gitHubIcons.length; i++) {
      gitHubIcons[i].src = 'images/mediaIcons/gitHubLight.png';
    }
    localStorage.setItem('brightnessMode', 'dark');
  } else {
    bdMode.src = 'images/icons/darkMode.png';
    favicon.href = 'images/icons/dark-favicon-32x32.png';
    gitIcon.src = 'images/mediaIcons/gitHubDark.png';
    linkedIcon.src = 'images/mediaIcons/linkedinDark.png';
    for (let i = 0; i < webIcons.length; i++) {
      webIcons[i].src = 'images/mediaIcons/webDark.png';
    }
    for (let i = 0; i < gitHubIcons.length; i++) {
      gitHubIcons[i].src = 'images/mediaIcons/gitHubDark.png';
    }
    localStorage.setItem('brightnessMode', '');
  }
});
