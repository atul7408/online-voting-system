
let bjp_votes = 0;
let congress_votes = 0;
let aap_votes = 0;
let bsp_votes = 0;
let bjp_result = document.getElementById("bjpResult");
let congress_result = document.getElementById("congressResult");
let aap_result = document.getElementById("aapResult");
let bsp_result = document.getElementById("bspResult");

document.getElementById("bjpVote").addEventListener("click", () => {
    bjp_votes++;
    bjp_result.innerHTML = "Votes: " + bjp_votes;
})
document.getElementById("congressVote").addEventListener("click", () => {
    congress_votes++;
    congress_result.innerHTML = "Votes: " + congress_votes;
})
document.getElementById("aapVote").addEventListener("click", () => {
    aap_votes++;
    aap_result.innerHTML = "Votes: " + aap_votes;
})
document.getElementById("bspVote").addEventListener("click", () => {
    bsp_votes++;
    bsp_result.innerHTML = "Votes: " + bsp_votes;
})

document.getElementById("showResult").addEventListener("click", () => {
    if (bjp_votes > congress_votes && bjp_votes > aap_votes && bjp_votes > bsp_votes) {
        bjp_result.innerHTML = " BJP won the elections";
        congress_result.innerHTML = "";
        aap_result.innerHTML = "";
        bsp_result.innerHTML = "";
    } else if (congress_votes > aap_votes && congress_votes > bsp_votes && congress_votes > bjp_votes) {
        bjp_result.innerHTML = " ";
        congress_result.innerHTML = " Congress won the elections";
        aap_result.innerHTML = " ";
        bsp_result.innerHTML = " ";
    } else if (aap_votes > bsp_votes && aap_votes > congress_votes && aap_votes > bjp_votes) {
        bjp_result.innerHTML = "";
        congress_result.innerHTML = "";
        aap_result.innerHTML = " AAP won the elections";
        bsp_result.innerHTML = "";
    } else if (bsp_votes > congress_votes && bsp_votes > aap_votes && bsp_votes > bjp_votes) {
        bjp_result.innerHTML = "";
        congress_result.innerHTML = "";
        aap_result.innerHTML = "";
        bsp_result.innerHTML = " SP won the elections";
    }
    else {
        bjp_result.innerHTML = " NO Result";
        congress_result.innerHTML = " NO Result";
        aap_result.innerHTML = " NO Result";
        bsp_result.innerHTML = " NO Result";
    }
    bjp_votes = 0;
    congress_votes = 0;
    aap_votes = 0;
    bsp_votes = 0;
})
