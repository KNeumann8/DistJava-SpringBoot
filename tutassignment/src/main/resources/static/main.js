if(document.getElementById("nextBtn")){
    var nxtBtn = document.getElementById("nextBtn");
    nxtBtn.addEventListener("click", function (ev) {
        var path = window.location.pathname;
        var currentStep = path.slice(path.lastIndexOf("step")+4);
        var nextStep = parseInt(currentStep, 10)+1;
        var newPath = path.slice(0,path.lastIndexOf("/")+1) + "step" + nextStep;
        if(currentStep == 3) window.location.href = '/';
        else window.location.href = newPath;
    });
}
