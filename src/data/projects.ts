
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "codecollab",
    title: "CodeCollab",
    description: "A real-time collaborative code editor with multi-user editing and AI code help. Supports syntax highlighting and instant feedback.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800",
    tags: ["React.js", "WebSockets", "Node.js", "Express"],
    liveUrl: "https://code-collab-dpmk.vercel.app/",
    githubUrl: "https://github.com/mayanpathak/Code_Collab",
  },
  {
    id: "pomodorify",
    title: "Pomodorify",
    description: "A Pomodoro productivity app synced with Spotify and secure user authentication. Helps users maintain focus with timed work sessions.",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=800",
    tags: ["React.js", "Firebase Auth", "Framer Motion"],
    liveUrl: "https://pomodorify-blush.vercel.app/",
    githubUrl: "https://github.com/mayanpathak/Pomodorify",
  },
  {
    id: "sanghbuy",
    title: "SanghBuy",
    description: "A group-buying marketplace for Indian offline retailers with AI insights. Connects buyers for bulk discounts and improved logistics.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800",
    tags: ["React.js", "REST APIs", "Gemini AI"],
    liveUrl: "https://sangh-buy.vercel.app/",
    githubUrl: "https://github.com/mayanpathak/Sangh-Buy",
  },
  {
    id: "moodtoanime",
    title: "MoodToAnime",
    description: "AI-powered app suggesting anime based on user-selected mood. Personalized recommendations that adapt to user preferences.",
    image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?auto=format&fit=crop&w=800",
    tags: ["React.js", "Redux Toolkit", "AI"],
    liveUrl: "https://how-to-mood2anime-master.vercel.app/",
    githubUrl: "https://github.com/mayanpathak/how-to-mood2anime-master",
  },
];
