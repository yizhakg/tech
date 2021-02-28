function toggleMenu() {
  if (window.innerWidth < 600) {
    let navUl = document.querySelector(".navUl");
    let toggle = document.querySelector(".toggle");
    navUl.classList.toggle("active");
    toggle.classList.toggle("active");
  }
}

function toggleJob(e) {
  const job = document.querySelector(".currentJob");
  document.getElementById("currentJobTitle").innerHTML = e.innerHTML.slice(31);
  job.classList.toggle("active");
  changeInfoClass(0);
}
function changeInfoClass(num) {
  for (i = 0; i < jobsNavChildrens.length; i++) {
    jobsNavChildrens[i].classList.remove("active");
  }
  jobsNavChildrens[num].classList.add("active");
}
function navToInfo(num) {
  switch (num) {
    case 0:
      jobsInfo.scrollTop = info1.offsetTop - 66;
      break;
    case 1:
      jobsInfo.scrollTop = info2.offsetTop - 66;
      break;
    case 2:
      jobsInfo.scrollTop = info3.offsetTop - 66;
      break;
    case 3:
      {
        applying.scrollIntoView();
        setTimeout(() => {
          changeInfoClass(3);
        }, 900);
      }
      break;
  }
}

const jobsInfo = document.getElementById("jobsInfo");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const applying = document.getElementById("applying");
jobsInfo.addEventListener("scroll", (e) => {
  jobsInfo.scrollTop >= 0 &&
    jobsInfo.scrollTop < info2.offsetTop - 68 &&
    changeInfoClass(0);
  jobsInfo.scrollTop >= info2.offsetTop - 68 &&
    jobsInfo.scrollTop < info3.offsetTop - 68 &&
    changeInfoClass(1);
  jobsInfo.scrollTop >= info3.offsetTop - 68 && changeInfoClass(2);
});
const jobsNavChildrens = document.getElementById("jobsNav").children;
