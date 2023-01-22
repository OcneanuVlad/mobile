var userAgent = navigator.userAgent;
var height = "95vh";
var bottom = "42.5vh";
document.querySelector('#home').style.height = "80vh";
if (navigator.userAgent.match(/safari/i)) {
    bottom = "45vh";
    height = "85vh";
    document.querySelector('#spawn11').style.bottom = "45vh";
    document.querySelector('#spawn12').style.bottom = "45vh";
    document.querySelector('#spawn21').style.bottom = "45vh";
    document.querySelector('#spawn22').style.bottom = "45vh";
    document.querySelector('#home').style.height = "85vh";
    document.querySelector('#home').style.marginBottom = "12.5vh";
    document.querySelector('#about').style.marginBottom = "12.5vh";
    document.querySelector('#projects').style.marginBottom = "12.5vh";
    document.querySelectorAll('.name').forEach(function (e) {
        e.style.bottom = "80.5vh";
    });
}

if (navigator.userAgent.match(/Chrome/i)) {
    height = "87.5vh";
    bottom = "42.5vh";
    document.querySelector('#spawn11').style.bottom = "42.5vh";
    document.querySelector('#spawn12').style.bottom = "42.5vh";
    document.querySelector('#spawn21').style.bottom = "42.5vh";
    document.querySelector('#spawn22').style.bottom = "42.5vh";
    document.querySelector('#home').style.height = "87.5vh";
    document.querySelector('#home').style.marginBottom = "10vh";
    document.querySelector('#about').style.marginBottom = "10vh";
    document.querySelector('#projects').style.marginBottom = "10vh";
    document.querySelectorAll('.name').forEach(function (e) {
        e.style.bottom = "83vh";
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Main pages navigation


var activePage = 1;
var leftButton = 'ABOUT';
var rightButton = 'WORK';
var activated = true;

function handleLeft() {

    document.querySelector('#about').style.opacity = "0";
    document.querySelector('#home').style.opacity = "0";
    document.querySelector('#projects').style.opacity = "0";

    setTimeout(function () {
        document.querySelector('#spawn11').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
        document.querySelector('#spawn12').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
        document.querySelector('#spawn21').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
        document.querySelector('#spawn22').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";

        document.querySelector('#spawn11').style.width = "100vw";
        document.querySelector('#spawn12').style.width = "100vw";
        document.querySelector('#spawn11').style.opacity = "1";
        document.querySelector('#spawn12').style.opacity = "1";
        setTimeout(function () {
            handleSlide();
        }, 1100);

        activePage = activePage - 1;
    }, 300);
}

function handleRight() {

    document.querySelector('#about').style.opacity = "0";
    document.querySelector('#home').style.opacity = "0";
    document.querySelector('#projects').style.opacity = "0";

    document.querySelector('#spawn11').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
    document.querySelector('#spawn12').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
    document.querySelector('#spawn21').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";
    document.querySelector('#spawn22').style.transition = "background-color 1.4s, width 1s, opacity 1.1s, top 1s, bottom 1s";

    setTimeout(function () {
        document.querySelector('#spawn21').style.width = "100vw";
        document.querySelector('#spawn22').style.width = "100vw";
        document.querySelector('#spawn21').style.opacity = "1";
        document.querySelector('#spawn22').style.opacity = "1";
        setTimeout(function () {
            handleSlide();
        }, 1100);

        activePage = activePage + 1;
        if (activePage == 3) {
            activePage = -2;
        };
    }, 300);
}

function handleSlide() {
    if (activePage == 3) {
        activePage = activePage - 2;
    }
    handleText();
    document.getElementById("buttonText1").style.opacity = "1";
    document.getElementById("buttonText2").style.opacity = "1";

    document.querySelector('#spawn11').style.top = "2.5vh";
    document.querySelector('#spawn12').style.bottom = "2.5vh";
    document.querySelector('#spawn21').style.top = "2.5vh";
    document.querySelector('#spawn22').style.bottom = "2.5vh";
    document.querySelector('#spawn11').style.opacity = "0";
    document.querySelector('#spawn12').style.opacity = "0";
    document.querySelector('#spawn21').style.opacity = "0";
    document.querySelector('#spawn22').style.opacity = "0";
    setTimeout(function () {
        handleBars();
    }, 1000);

    document.querySelector('#home').style.transition = "background-color 1.4s, color 1.4s";
    document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s";
    document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s";
    document.querySelector('#about').style.opacity = "1";
    document.querySelector('#home').style.opacity = "1";
    document.querySelector('#projects').style.opacity = "1";
    document.querySelector('#projects').style.height = "0vh";
    document.querySelector('#about').style.height = "0vh";
    document.querySelector('#home').style.height = "0vh";

    switch (activePage % 3) {
        case -1:
            document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s, height 1s";
            document.querySelector('#projects').style.height = height;
            activePage = 2;
            break;
        case 0:
            document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s, height 1s";
            document.querySelector('#about').style.height = height;
            break;
        case 1:
            document.querySelector('#home').style.transition = "background-color 1.4s, color 1.4s, height 1s";
            document.querySelector('#home').style.height = height;
            break;
        case 2:
            document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s, height 1s";
            document.querySelector('#projects').style.height = height;
            break;
        case -2:
            document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s, height 1s";
            document.querySelector('#about').style.height = height;
            activePage = 0;
            break;
    }
    setTimeout(function () {
        document.querySelector('#home').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
        document.querySelector('#about').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
        document.querySelector('#projects').style.transition = "background-color 1.4s, color 1.4s, height 1s, opacity 0.6s";
    }, 1000);
}

function handleBars() {
    activateButtons();
    document.querySelector('#spawn11').style.transition = "0s";
    document.querySelector('#spawn12').style.transition = "0s";
    document.querySelector('#spawn21').style.transition = "0s";
    document.querySelector('#spawn22').style.transition = "0s";
    document.querySelector('#spawn11').style.width = "7vw";
    document.querySelector('#spawn12').style.width = "7vw";
    document.querySelector('#spawn21').style.width = "7vw";
    document.querySelector('#spawn22').style.width = "7vw";
    document.querySelector('#spawn11').style.top = "50vh";
    document.querySelector('#spawn12').style.bottom = bottom;
    document.querySelector('#spawn21').style.top = "50vh";
    document.querySelector('#spawn22').style.bottom = bottom;
}

function handleText() {
    switch (activePage % 3) {
        case -1:
            document.querySelector('#pageLine3').style.height = "7.5vh";
            document.querySelector('#pageLine2').style.height = "6vh";
            document.querySelector('#pageLine1').style.height = "6vh";
            document.querySelector('#buttonText1').innerHTML = 'HOME';
            document.querySelector('#buttonText2').innerHTML = 'ABOUT';
            break;
        case 0:
            document.querySelector('#pageLine1').style.height = "7.5vh";
            document.querySelector('#pageLine2').style.height = "6vh";
            document.querySelector('#pageLine3').style.height = "6vh";
            document.querySelector('#buttonText1').innerHTML = 'WORK';
            document.querySelector('#buttonText2').innerHTML = 'HOME';
            break;
        case 1:
            document.querySelector('#pageLine2').style.height = "7.5vh";
            document.querySelector('#pageLine3').style.height = "6vh";
            document.querySelector('#pageLine1').style.height = "6vh";
            document.querySelector('#buttonText1').innerHTML = 'ABOUT';
            document.querySelector('#buttonText2').innerHTML = 'WORK';
            break;
        case 2:
            document.querySelector('#pageLine3').style.height = "7.5vh";
            document.querySelector('#pageLine2').style.height = "6vh";
            document.querySelector('#pageLine1').style.height = "6vh";
            document.querySelector('#buttonText1').innerHTML = 'HOME';
            document.querySelector('#buttonText2').innerHTML = 'ABOUT';
            break;
        case -2:
            document.querySelector('#pageLine1').style.height = "7.5vh";
            document.querySelector('#pageLine3').style.height = "6vh";
            document.querySelector('#pageLine2').style.height = "6vh";
            document.querySelector('#buttonText1').innerHTML = 'WORK';
            document.querySelector('#buttonText2').innerHTML = 'HOME';
            break;
    }
}

function handleColors() {
    store.style.setProperty('--colorBack', pallete[colorPallete][1]);
    store.style.setProperty('--colorBody', pallete[colorPallete][0]);
    store.style.setProperty('--colorFront', pallete[colorPallete][2]);
    document.querySelector('#denimBack').style.filter = pallete[colorPallete][3];
    document.querySelectorAll('.contactImg').forEach(function (e) {
        e.style.filter = pallete[colorPallete][3];
    });

    if (colorPallete >= pallete.length - 1) {
        colorPallete = 0;
    } else {
        colorPallete++;
    }
}

function disableButtons() {
    activated = false;

    document.querySelector('#swipeAnim').style.opacity = "0";

    document.querySelectorAll('.buttonLine').forEach(function (e) {
        e.style.transition = "background-color 2s, width 0.4s";
    });
    setTimeout(function () {
        store.style.setProperty('--width2', '25vw');
        store.style.setProperty('--width1', '25vw');
    }, 5);
    document.querySelector('#buttonText1').style.transition = 'color 2s, opacity 0.5s, left 0.4s';
    document.querySelector('#buttonText2').style.transition = 'color 2s, opacity 0.5s, right 0.4s';
    setTimeout(function () {
        document.querySelector('#buttonText1').style.left = '9vw';
        document.querySelector('#buttonText2').style.right = '9vw';
    }, 5);

    document.getElementById("work1").classList.add('disable');
    document.getElementById("work2").classList.add('disable');
    document.getElementById("work3").classList.add('disable');

    document.getElementById("buttonText1").style.opacity = "0";
    document.getElementById("buttonText2").style.opacity = "0";
    handleColors();
}

function activateButtons() {
    activated = true;

    document.querySelectorAll('.buttonLine').forEach(function (e) {
        e.style.transition = "background-color 2s";
    });
    document.querySelector('#buttonText1').style.transition = 'color 2s, opacity 0.5s';
    document.querySelector('#buttonText2').style.transition = 'color 2s, opacity 0.5s';

    document.getElementById("work1").classList.remove('disable');
    document.getElementById("work2").classList.remove('disable');
    document.getElementById("work3").classList.remove('disable');
}

var touchstartX = 0;
var touchendX = 0;

function checkDirection() {
    if (activated) {

        if (touchendX < touchstartX - 10) {
            handleRight();
            disableButtons();
        }

        if (touchendX > touchstartX + 10) {
            handleLeft();
            disableButtons();
        }
    }
}

document.addEventListener('touchstart', function (e) {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function (e) {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
});

document.addEventListener('touchmove', function (e) {
    if (activated) {
        if (e.changedTouches[0].screenX > touchstartX) {
            document.querySelector('#buttonText1').style.left = (9 + (e.changedTouches[0].screenX - touchstartX) / 10).toString() + 'vw';
            document.querySelector('#buttonText2').style.right = '9vw';
            store.style.setProperty('--width1', (25 + (e.changedTouches[0].screenX - touchstartX) / 10).toString() + 'vw');
            store.style.setProperty('--width2', '25vw');
        } else if (e.changedTouches[0].screenX < touchstartX) {
            document.querySelector('#buttonText1').style.left = '9vw';
            document.querySelector('#buttonText2').style.right = (9 + (touchstartX - e.changedTouches[0].screenX) / 10).toString() + 'vw';
            store.style.setProperty('--width1', '25vw');
            store.style.setProperty('--width2', (25 + (touchstartX - e.changedTouches[0].screenX) / 10).toString() + 'vw');
        }
    }
});

var colorPallete = 0;
var pallete = [['rgb(40,43,41)', 'rgb(40,43,41)', 'rgb(166,209,201)', 'invert(88%) sepia(26%) saturate(261%) hue-rotate(116deg) brightness(91%) contrast(81%)'], ['rgb(166,209,201)', 'rgb(166,209,201)', 'rgb(232,60,56)', 'invert(69%) sepia(87%) saturate(6938%) hue-rotate(341deg) brightness(95%) contrast(91%)'], ['rgb(244,196,196)', 'rgb(244,196,196)', 'rgb(40,43,41)', 'invert(16%) sepia(5%) saturate(452%) hue-rotate(87deg) brightness(94%) contrast(96%)'], ['rgb(235,237,237)', 'rgb(235,237,237)', 'rgb(232,69,65)', 'invert(45%) sepia(18%) saturate(2671%) hue-rotate(320deg) brightness(90%) contrast(105%)'], ['rgb(246, 247, 245)', 'rgb(168, 173, 165)', 'rgb(36, 62, 54)', 'invert(18%) sepia(33%) saturate(515%) hue-rotate(110deg) brightness(97%) contrast(88%)'], ['rgb(1, 87, 83)', 'rgb(0, 70, 67)', 'rgb(250, 244, 211)', 'invert(94%) sepia(2%) saturate(2444%) hue-rotate(5deg) brightness(103%) contrast(96%)'], ['rgb(143, 126, 247)', 'rgb(93, 82, 163)', 'rgb(248, 247, 255)', 'invert(99%) sepia(93%) saturate(1496%) hue-rotate(180deg) brightness(104%) contrast(116%)'], ['rgb(215, 250, 241)', 'rgb(173, 201, 195)', 'black', 'invert(0%) sepia(96%) saturate(7435%) hue-rotate(131deg) brightness(89%) contrast(92%)'], ['rgb(0,161,154)', 'rgb(0,161,154)', 'rgb(235,237,237)', 'invert(100%) sepia(5%) saturate(100%) hue-rotate(119deg) brightness(93%) contrast(100%)'], ['rgb(72, 78, 82)', 'rgb(57, 62, 65)', 'rgb(246, 247, 235)', 'invert(99%) sepia(81%) saturate(179%) hue-rotate(23deg) brightness(105%) contrast(93%)']];
var store = document.querySelector(':root');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Work pages 


var page = 0;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#video').playbackRate = 1;
});

function ColorChange() {
    store.style.setProperty('--colorBack', pallete[colorPallete][1]);
    store.style.setProperty('--colorBody', pallete[colorPallete][0]);
    store.style.setProperty('--colorFront', pallete[colorPallete][2]);
    document.querySelector('#denimBack').style.filter = pallete[colorPallete][3];

    document.querySelectorAll('.contactImg').forEach(function (e) {
        e.style.filter = pallete[colorPallete][3];
    });

    if (colorPallete >= pallete.length - 1) {
        colorPallete = 0;
    } else {
        colorPallete++;
    }
}

function Work(index) {

    activated = false;

    ColorChange();

    var transition1 = document.querySelector('#transition1');
    var transition2 = document.querySelector('#transition2');
    var transition3 = document.querySelector('#transition3');

    document.getElementById("work1").classList.add('disable');
    document.getElementById("work2").classList.add('disable');
    document.getElementById("work3").classList.add('disable');

    document.getElementById("previous").classList.add('disable');
    document.getElementById("next").classList.add('disable');
    document.getElementById("close").classList.add('disable');

    transition1.style.left = "0vw";
    setTimeout(function () {
        transition2.style.left = "0vw";
    }, 300);
    setTimeout(function () {
        transition3.style.left = "0vw";
    }, 600);

    function secondSwipe() {
        document.querySelector('#projects').style.height = "0vh";

        infoElements.forEach(function (e) {
            e.style.width = "0px";
            e.lastElementChild.firstElementChild.style.width = "0px";
        });
        lines.forEach(function (e) {
            e.style.width = "0vw";
        });
        descriptions.forEach(function (e) {
            e.firstElementChild.style.marginLeft = "-10vw";
        });

        document.querySelector('#projectsContainer').scrollTop = 0;

        transition3.removeEventListener('transitionend', secondSwipe);

        if (index == -10) {
            document.querySelector('#projects').style.height = height;
            document.querySelector('#projectsContainer').style.display = "none";
            setTimeout(function () {
                activated = true;
            }, 2000);
        } else {
            document.querySelector('#projectsContainer').style.display = "flex";
        }
        if (index == -1) {
            index = page + 1;
            if (index == 4) {
                index = 1;
            }
        } else {
            if (index == -2) {
                index = page - 1;
                if (index == 0) {
                    index = 3;
                }
            }
        }
        page = index;

        switch (index) {
            case 1:
                document.querySelector('#project1').style.display = "flex";
                document.querySelector('#project2').style.display = "none";
                document.querySelector('#project3').style.display = "none";
                break;
            case 2:
                document.querySelector('#project1').style.display = "none";
                document.querySelector('#project2').style.display = "flex";
                document.querySelector('#project3').style.display = "none";
                break;
            case 3:
                document.querySelector('#project1').style.display = "none";
                document.querySelector('#project2').style.display = "none";
                document.querySelector('#project3').style.display = "flex";
                break;
            default:
                document.querySelector('#project1').style.display = "none";
                document.querySelector('#project2').style.display = "none";
                document.querySelector('#project3').style.display = "none";
                break;
        }

        transition1.style.left = "100vw";
        setTimeout(function () {
            transition2.style.left = "100vw";
        }, 300);
        setTimeout(function () {
            transition3.style.left = "100vw";
        }, 600);

        function t() {
            document.getElementById("work1").classList.remove('disable');
            document.getElementById("work2").classList.remove('disable');
            document.getElementById("work3").classList.remove('disable');

            document.getElementById("previous").classList.remove('disable');
            document.getElementById("next").classList.remove('disable');
            document.getElementById("close").classList.remove('disable');

            transition3.removeEventListener('transitionend', t);
        }
        setTimeout(function () {
            transition3.addEventListener('transitionend', t);
        }, 600);
    }
    transition3.addEventListener('transitionend', secondSwipe);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//projectPage Parallax


document.querySelector('#projectsContainer').addEventListener('scroll', function () {
    if (document.querySelector('#verticalTop1').getBoundingClientRect().top < document.querySelector('#detector1').getBoundingClientRect().top) {
        document.querySelector('#section11').classList.add('sticky');
        document.querySelector('#section11').style.marginTop = "10vh";
        document.querySelector('#section11').style.pointerEvents = "none";
        document.querySelector('#section12').style.marginTop = "155vh";
    } else {
        document.querySelector('#section11').classList.remove('sticky');
        document.querySelector('#section11').style.marginTop = "100vh";
        document.querySelector('#section11').style.pointerEvents = "auto";
        document.querySelector('#section12').style.marginTop = "0px";
    }

    if (document.querySelector('#verticalTop2').getBoundingClientRect().top < document.querySelector('#detector2').getBoundingClientRect().top) {
        document.querySelector('#section21').classList.add('sticky');
        document.querySelector('#section21').style.marginTop = "10vh";
        document.querySelector('#section21').style.pointerEvents = "none";
        document.querySelector('#section22').style.marginTop = "155vh";
    } else {
        document.querySelector('#section21').classList.remove('sticky');
        document.querySelector('#section21').style.marginTop = "100vh";
        document.querySelector('#section21').style.pointerEvents = "auto";
        document.querySelector('#section22').style.marginTop = "0px";
    }

    if (document.querySelector('#verticalTop3').getBoundingClientRect().top < document.querySelector('#detector3').getBoundingClientRect().top) {
        document.querySelector('#section31').classList.add('sticky');
        document.querySelector('#section31').style.marginTop = "10vh";
        document.querySelector('#section31').style.pointerEvents = "none";
        document.querySelector('#section32').style.marginTop = "155vh";
    } else {
        document.querySelector('#section31').classList.remove('sticky');
        document.querySelector('#section31').style.marginTop = "100vh";
        document.querySelector('#section31').style.pointerEvents = "auto";
        document.querySelector('#section32').style.marginTop = "0px";
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//project scroll text animation


var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.width = "100vw";
            setTimeout(function () {
                entry.target.lastElementChild.firstElementChild.style.width = "100%";
            }, 1000);
        }
    });
});

var infoElements = document.querySelectorAll('.info');
infoElements.forEach(function (el) {
    return observer.observe(el);
});

//project scroll line animation


var observer2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.width = "80vw";
        }
    });
});

var lines = document.querySelectorAll('.vertical');
lines.forEach(function (el) {
    return observer2.observe(el);
});

//project leftDesc scroll animation


var descObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.firstElementChild.style.marginLeft = "2vw";
        }
    });
});

var descriptions = document.querySelectorAll('.descCont');
descriptions.forEach(function (el) {
    return descObserver.observe(el);
});

//project change color animation


document.querySelector('#color').addEventListener('mouseenter', function () {
    document.querySelector('#right').style.height = "5vh";
    document.querySelector('#left').style.height = "5vh";
    document.querySelector('#topCont').style.width = "43vw";
    document.querySelector('#top').style.boxShadow = "0 0px 70px 15px var(--colorFront)";
    document.querySelector('#bottom').style.boxShadow = "0 0px 70px 15px var(--colorFront)";
});
document.querySelector('#color').addEventListener('mouseleave', function () {
    document.querySelector('#top').style.boxShadow = "0 0px 0px 0px var(--colorFront)";
    document.querySelector('#bottom').style.boxShadow = "0 0px 0px 0px var(--colorFront)";
    document.querySelector('#topCont').style.width = "0vw";
    document.querySelector('#right').style.height = "0vh";
    document.querySelector('#left').style.height = "0vh";
});