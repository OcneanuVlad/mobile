var page = 0;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#video').playbackRate = 1;
});

function Work(index) {
    var transition1 = document.querySelector('#transition1');
    var transition2 = document.querySelector('#transition2');
    var transition3 = document.querySelector('#transition3');

    document.getElementById("work1").classList.add('disable');
    document.getElementById("work2").classList.add('disable');
    document.getElementById("work3").classList.add('disable');

    document.getElementById("leftButton").classList.add('disable');
    document.getElementById("rightButton").classList.add('disable');

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
        transition3.removeEventListener('transitionend', secondSwipe);

        if (index == -10) {
            document.querySelector('#projectsContainer').style.display = "none";
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
            transition3.removeEventListener('transitionend', t);

            document.getElementById("work1").classList.remove('disable');
            document.getElementById("work2").classList.remove('disable');
            document.getElementById("work3").classList.remove('disable');

            document.getElementById("leftButton").classList.remove('disable');
            document.getElementById("rightButton").classList.remove('disable');

            document.getElementById("previous").classList.remove('disable');
            document.getElementById("next").classList.remove('disable');
            document.getElementById("close").classList.remove('disable');
        }
        transition3.addEventListener('transitionend', t);
    }
    transition3.addEventListener('transitionend', secondSwipe);
}