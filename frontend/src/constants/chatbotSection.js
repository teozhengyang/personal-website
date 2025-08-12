export const chatbotConfig = {
  responseDelay: 1000,
  animationDuration: 300,
  maxMessageLength: 500,
};

export const initialMessages = [
  { 
    id: 1, 
    text: "Hi! I'm your personal assistant. How can I help you today? I'm not supported by any LLM just yet. 😅", 
    sender: 'bot' 
  }
];

export const botResponses = {
  greeting: [
    "Hello! Nice to meet you! Feel free to ask me about the website, projects, or anything else. I'm not supported by any LLM just yet. 😅",
    "Hi there! Welcome to the website. What would you like to know? I'm not supported by any LLM just yet. 😅",
    "Hey! Great to see you here. How can I assist you today? I'm not supported by any LLM just yet. 😅"
  ],
  projects: [
    "You can check out the amazing projects in the Projects section! There are some really cool developments showcased there.",
    "The Projects section has some fantastic work displayed. You should definitely take a look!",
    "There are some impressive projects featured on this site. Head over to the Projects section to explore them."
  ],
  about: [
    "You can learn more about the developer in the About section. There's information about skills, experience, and background!",
    "The About section contains detailed information about the developer's background, skills, and professional experience.",
    "Check out the About section to discover more about the developer's journey and expertise."
  ],
  contact: [
    "You can find contact information and social links in the footer section of the website.",
    "All the contact details and social media links are available in the footer area.",
    "Look for the footer section to find various ways to get in touch."
  ],
  blog: [
    "Check out the Blog section for interesting articles and insights!",
    "The Blog section features some great articles and thoughts worth reading.",
    "There are some insightful blog posts available in the Blog section."
  ],
  default: [
    "That's interesting! Is there anything specific about this website or the projects you'd like to know more about?",
    "I'd be happy to help! Feel free to ask about the projects, background, or anything else on the site.",
    "Great question! What would you like to explore on this website?",
    "I'm here to help! Ask me about the developer's work, projects, or anything else you're curious about."
  ]
};

export const uiText = {
  buttonLabel: "Open chatbot",
  assistantName: "Assistant (In Development)",
  onlineStatus: "Online now",
  inputPlaceholder: "Type your message...",
  loadingText: "Thinking..."
};
