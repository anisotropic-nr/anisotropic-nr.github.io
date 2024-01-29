// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var select = false;

$(document).ready(function() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];
});


function selectCompImage(methodPill, scenePill, modePill) {
    select = true;
    var dataset_name = document.getElementById("datasetname")


    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    
    if (modePill) {
        activeModePill.classList.remove("active");
        modePill.classList.add("active");
        activeModePill = modePill;
    }

    if (typeof methodPill == 'undefined') {
        console.log("error method")
    }


    if (typeof scenePill == 'undefined') {
        console.log("error scene")
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    
    methodPill.classList.add("active");
    scenePill.classList.add("active");

    method = methodPill.getAttribute("data-value");
    pill = scenePill.getAttribute("data-value");
    mode = activeModePill.getAttribute("data-value");
    dataset = dataset_name.getAttribute("data-value")
    
    document.getElementById("sceneVideoName").innerHTML = `<span id="sceneVideoName">${pill}</span>`;

    var baseline = document.getElementById("baselineImage");
    var ours_image = document.getElementById("oursImage");

    baseline.src = `/assets/images/comp_image_2/${method}/${dataset}/${mode}/${method}_${pill}.png`;
    ours_image.src = `/assets/images/comp_image_2/${method}/${dataset}/${mode}/ours_${pill}.png`;

    // baseline.load();
    // ours_image.load();
}