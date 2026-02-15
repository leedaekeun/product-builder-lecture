const questions = [
    {
        "question": "어떤 첫인상이 더 매력적인가요?",
        "answers": [
            { "text": "대담하고 카리스마 있는 스타일", "type": "Teto" },
            { "text": "부드럽고 온화한 스타일", "type": "Egen" }
        ]
    },
    {
        "question": "대화를 어떻게 이끌어가는 것을 선호하시나요?",
        "answers": [
            { "text": "내가 대화를 주도하고 역동적인 토론을 즐긴다.", "type": "Teto" },
            { "text": "주로 듣는 편이며 편안한 분위기를 만든다.", "type": "Egen" }
        ]
    },
    {
        "question": "선호하는 패션 스타일은 무엇인가요?",
        "answers": [
            { "text": "오버사이즈 실루엣과 스테이트먼트 액세서리.", "type": "Teto" },
            { "text": "파스텔 톤과 미니멀한 액세서리.", "type": "Egen" }
        ]
    },
    {
        "question": "문제 해결에 어떻게 접근하시나요?",
        "answers": [
            { "text": "논리적이고 체계적인 접근 방식.", "type": "Teto" },
            { "text": "직관적이고 공감적인 접근 방식.", "type": "Egen" }
        ]
    },
    {
        "question": "어떤 환경에서 가장 편안함을 느끼시나요?",
        "answers": [
            { "text": "역동적이고 활기찬 환경.", "type": "Teto" },
            { "text": "차분하고 조화로운 환경.", "type": "Egen" }
        ]
    },
    {
        "question": "감정을 어떻게 표현하시나요?",
        "answers": [
            { "text": "직설적이고 솔직하게.", "type": "Teto" },
            { "text": "미묘하고 간접적으로.", "type": "Egen" }
        ]
    },
    {
        "question": "그룹에서 주로 어떤 역할을 맡으시나요?",
        "answers": [
            { "text": "결정을 내리는 리더.", "type": "Teto" },
            { "text": "갈등을 중재하는 중재자.", "type": "Egen" }
        ]
    },
    {
        "question": "중요한 결정을 어떻게 내리시나요?",
        "answers": [
            { "text": "객관적인 사실과 분석을 기반으로.", "type": "Teto" },
            { "text": "직관과 다른 사람들의 감정을 기반으로.", "type": "Egen" }
        ]
    },
    {
        "question": "주말을 보내는 선호하는 방법은 무엇인가요?",
        "answers": [
            { "text": "신나는 야외 활동에 참여하기.", "type": "Teto" },
            { "text": "집에서 조용하고 편안한 시간 즐기기.", "type": "Egen" }
        ]
    },
    {
        "question": "스트레스를 어떻게 다루시나요?",
        "answers": [
            { "text": "행동을 취하고 문제를 해결함으로써.", "type": "Teto" },
            { "text": "다른 사람들과 감정을 공유하고 정서적 지원을 구함으로써.", "type": "Egen" }
        ]
    },
    {
        "question": "어떤 종류의 영화를 선호하시나요?",
        "answers": [
            { "text": "액션으로 가득 찬 스릴러.", "type": "Teto" },
            { "text": "마음이 따뜻해지는 로맨스 드라마.", "type": "Egen" }
        ]
    },
    {
        "question": "어떤 칭찬이 당신을 더 행복하게 만드나요?",
        "answers": [
            { "text": "'정말 카리스마 있고 멋져요!'", "type": "Teto" },
            { "text": "'정말 따뜻하고 배려심이 깊어요!'", "type": "Egen" }
        ]
    }
];

const results = {
    "Pure Teto": {
        "score_range": [8, 12],
        "title": "순수 테토: 카리스마 넘치는 리더",
        "description": "당신은 강력한 리더십과 주도적인 성격을 가지고 있습니다. 자신감 있고, 솔직하며, 대화를 주도하고 역동적인 환경을 즐깁니다."
    },
    "Teto-Egen": {
        "score_range": [3, 7],
        "title": "테토에겐: 균형 잡힌 매력의 소유자",
        "description": "당신은 테토의 주도적인 면모와 에겐의 감수성을 모두 가지고 있습니다. 이 균형이 당신에게 독특한 매력과 상황에 맞는 유연성을 부여합니다."
    },
    "Balanced": {
        "score_range": [-2, 2],
        "title": "균형: 모든 것을 갖춘 올라운더",
        "description": "당신은 테토와 에겐의 특성이 완벽하게 균형을 이루고 있습니다. 상황에 따라 카리스마 있는 리더가 될 수도, 공감 능력이 뛰어난 중재자가 될 수도 있습니다."
    },
    "Egen-Teto": {
        "score_range": [-7, -3],
        "title": "에겐테토: 강인한 공감 능력자",
        "description": "당신은 에겐의 부드러움과 테토의 추진력을 동시에 가지고 있습니다. 섬세하면서도 강인하며, 다른 사람에 대한 깊은 이해심을 가지고 있습니다."
    },
    "Pure Egen": {
        "score_range": [-12, -8],
        "title": "순수 에겐: 우아한 공감 능력자",
        "description": "당신은 깊은 감수성과 우아한 매력을 가지고 있습니다. 배려심이 깊고, 조화를 선호하며, 다른 사람의 감정에 잘 공감합니다."
    }
};
