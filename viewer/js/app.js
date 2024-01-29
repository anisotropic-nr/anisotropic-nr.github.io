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

    resizeAndPlay($('#xyalias')[0]);
});

function selectCompVideo(methodPill, scenePill, modePill) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;
    // var videoSwitch = document.getElementById("compVideoSwitch");
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

    // console.log(methodPill, scenePill, modePill)

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    
    methodPill.classList.add("active");
    scenePill.classList.add("active");

    method = methodPill.getAttribute("data-value");
    pill = scenePill.getAttribute("data-value");
    mode = activeModePill.getAttribute("data-value");
    dataset = dataset_name.getAttribute("data-value")

    var video_active = document.getElementById("xyalias");
    video_active.src =  `/assets/video/${dataset}/${method}/${mode}/${method}_${pill}_video.mp4`;
    if ("nerfacc" === method){
        video_active.src =  `/assets/video/${dataset}/${method}/rgb/${method}_${pill}_video.mp4`;
    }

    video_active.load();

}

// function selectCompImage(methodPill, scenePill, modePill) {
//     select = true;
//     var dataset_name = document.getElementById("datasetname")

//     if (activeMethodPill) {
//         activeMethodPill.classList.remove("active");
//     }

//     if (activeScenePill) {
//         activeScenePill.classList.remove("active");
//     }
    
//     if (modePill) {
//         activeModePill.classList.remove("active");
//         modePill.classList.add("active");
//         activeModePill = modePill;
//     }

//     activeMethodPill = methodPill;
//     activeScenePill = scenePill;
    
//     methodPill.classList.add("active");
//     scenePill.classList.add("active");

//     method = methodPill.getAttribute("data-value");
//     pill = scenePill.getAttribute("data-value");
//     mode = activeModePill.getAttribute("data-value");
//     dataset = dataset_name.getAttribute("data-value")

//     var baseline = document.getElementById("baselineImage");
//     var ours_image = document.getElementById("oursImage");

//     baseline.src = `/assets//images/comp_image/${method}/${pill}/${mode}/nerfacc_${pill}`;
//     ours_image.src = `/assets//images/comp_image/${method}/${pill}/${mode}/ours_${pill}`;

//     baseline.load();
//     ours_image.load();
// }