const questions = [
    {
        "question": "Which first impression do you find more attractive?",
        "answers": [
            { "text": "A bold and charismatic style", "type": "Teto" },
            { "text": "A soft and gentle style", "type": "Egen" }
        ]
    },
    {
        "question": "How do you prefer to lead a conversation?",
        "answers": [
            { "text": "I lead the conversation and enjoy dynamic discussions.", "type": "Teto" },
            { "text": "I prefer to listen and create a comfortable atmosphere.", "type": "Egen" }
        ]
    },
    {
        "question": "What's your preferred fashion style?",
        "answers": [
            { "text": "Oversized silhouettes and statement accessories.", "type": "Teto" },
            { "text": "Pastel tones and minimal accessories.", "type": "Egen" }
        ]
    },
    {
        "question": "How do you approach problem-solving?",
        "answers": [
            { "text": "With a logical and systematic approach.", "type": "Teto" },
            { "text": "With an intuitive and empathetic approach.", "type": "Egen" }
        ]
    },
    {
        "question": "What kind of environment do you feel most comfortable in?",
        "answers": [
            { "text": "A dynamic and energetic environment.", "type": "Teto" },
            { "text": "A calm and harmonious environment.", "type": "Egen" }
        ]
    },
    {
        "question": "How do you express your feelings?",
        "answers": [
            { "text": "Directly and honestly.", "type": "Teto" },
            { "text": "Subtly and indirectly.", "type": "Egen" }
        ]
    },
    {
        "question": "What role do you usually play in a group?",
        "answers": [
            { "text": "The leader who makes decisions.", "type": "Teto" },
            { "text": "The mediator who resolves conflicts.", "type": "Egen" }
        ]
    },
    {
        "question": "How do you make important decisions?",
        "answers": [
            { "text": "Based on objective facts and analysis.", "type": "Teto" },
            { "text": "Based on intuition and the feelings of others.", "type": "Egen" }
        ]
    },
    {
        "question": "What is your preferred way of spending a weekend?",
        "answers": [
            { "text": "Engaging in exciting outdoor activities.", "type": "Teto" },
            { "text": "Enjoying a quiet and relaxing time at home.", "type": "Egen" }
        ]
    },
    {
        "question": "How do you handle stress?",
        "answers": [
            { "text": "By taking action and solving the problem.", "type": "Teto" },
            { "text": "By sharing my feelings with others and seeking emotional support.", "type": "Egen" }
        ]
    },
    {
        "question": "What kind of movie do you prefer?",
        "answers": [
            { "text": "Action-packed thrillers.", "type": "Teto" },
            { "text": "Heartwarming romance dramas.", "type": "Egen" }
        ]
    },
    {
        "question": "Which compliment would make you happier?",
        "answers": [
            { "text": "'You're so charismatic and cool!'", "type": "Teto" },
            { "text": "'You're so warm and considerate!'", "type": "Egen" }
        ]
    }
];

const results = {
    "Pure Teto": {
        "score_range": [8, 12],
        "title": "Pure Teto: The Charismatic Leader",
        "description": "You have a strong leadership and a proactive personality. You are confident, outspoken, and enjoy leading conversations and dynamic environments."
    },
    "Teto-Egen": {
        "score_range": [3, 7],
        "title": "Teto-Egen: The Balanced Charmer",
        "description": "You have the assertiveness of a Teto with the sensibility of an Egen. This balance gives you a unique charm and situational flexibility."
    },
    "Balanced": {
        "score_range": [-2, 2],
        "title": "Balanced: The All-Rounder",
        "description": "You have a perfect balance of Teto and Egen traits. You can be both a charismatic leader and an empathetic mediator, depending on the situation."
    },
    "Egen-Teto": {
        "score_range": [-7, -3],
        "title": "Egen-Teto: The Resilient Empath",
        "description": "You have the gentleness of an Egen with the drive of a Teto. You are both delicate and strong, with a deep understanding of others."
    },
    "Pure Egen": {
        "score_range": [-12, -8],
        "title": "Pure Egen: The Graceful Empath",
        "description": "You have a deep sensibility and a graceful charm. You are considerate, prefer harmony, and are good at empathizing with others."
    }
};
