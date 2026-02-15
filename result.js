const resultTitleElement = document.getElementById('result-title');
const resultDescriptionElement = document.getElementById('result-description');
const placeholder1 = document.getElementById('placeholder-1');
const placeholder2 = document.getElementById('placeholder-2');
const resultImages = document.getElementById('result-images');


const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get('score'));

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
    
    resultImages.style.display = 'flex';

    if (dominantTrait) {
        placeholder1.innerText = `강한 ${dominantTrait === 'Teto' ? '여자' : '남자'} 이미지`;
        placeholder2.innerText = `강한 ${dominantTrait === 'Teto' ? '남자' : '여자'} 이미지`;
        if (dominantTrait === 'Teto') {
            placeholder1.innerText = '강한 여자 (테토)';
            placeholder2.innerText = '강한 남자 (테토)';
        } else {
            placeholder1.innerText = '부드러운 여자 (에겐)';
            placeholder2.innerText = '부드러운 남자 (에겐)';
        }

    } else {
        // Balanced
        placeholder1.innerText = '강한 여자 (테토)';
        placeholder2.innerText = '부드러운 남자 (에겐)';
    }
}

showResult();
