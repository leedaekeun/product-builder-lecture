const resultTitleElement = document.getElementById('result-title');
const resultDescriptionElement = document.getElementById('result-description');
const resultImage1 = document.getElementById('result-image-1');
const resultImage2 = document.getElementById('result-image-2');

const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get('score'));

const imagePlaceholders = {
    "Teto": {
        "woman": "https://via.placeholder.com/400x400.png?text=Strong+Woman+(Teto)",
        "man": "https://via.placeholder.com/400x400.png?text=Strong+Man+(Teto)"
    },
    "Egen": {
        "woman": "https://via.placeholder.com/400x400.png?text=Gentle+Woman+(Egen)",
        "man": "https://via.placeholder.com/400x400.png?text=Gentle+Man+(Egen)"
    }
}

function showResult() {
    let resultType = '';
    let dominantTrait = '';
    for (const type in results) {
        const [min, max] = results[type].score_range;
        if (score >= min && score <= max) {
            resultType = type;
            break;
        }
    }

    if (score > 0) {
        dominantTrait = "Teto";
    } else if (score < 0) {
        dominantTrait = "Egen";
    }

    const result = results[resultType];
    resultTitleElement.innerText = result.title;
    resultDescriptionElement.innerText = result.description;

    if (dominantTrait) {
        resultImage1.src = imagePlaceholders[dominantTrait].woman;
        resultImage2.src = imagePlaceholders[dominantTrait].man;
    } else {
        // Balanced
        resultImage1.src = imagePlaceholders["Teto"].woman;
        resultImage2.src = imagePlaceholders["Egen"].man;
        const resultImages = document.getElementById('result-images');
        resultImages.style.display = 'flex';
        resultImage1.style.width = '50%';
        resultImage2.style.width = '50%';


    }
}

showResult();
