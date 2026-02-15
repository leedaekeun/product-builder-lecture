const resultTitleElement = document.getElementById('result-title');
const resultDescriptionElement = document.getElementById('result-description');

const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get('score'));

function showResult() {
    let resultType = '';
    for (const type in results) {
        const [min, max] = results[type].score_range;
        if (score >= min && score <= max) {
            resultType = type;
            break;
        }
    }

    const result = results[resultType];
    resultTitleElement.innerText = result.title;
    resultDescriptionElement.innerText = result.description;
}

showResult();
