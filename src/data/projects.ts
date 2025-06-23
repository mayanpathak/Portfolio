
// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   liveUrl: string;
//   githubUrl?: string;
// }

// export const projects: Project[] = [
//   {
//     id: "codecollab",
//     title: "CodeCollab",
//     description: "A real-time collaborative code editor with multi-user editing and AI code help. Supports syntax highlighting and instant feedback.",
//     image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800",
//     tags: ["React.js", "WebSockets", "Node.js", "Express"],
//     liveUrl: "https://code-collab-dpmk.vercel.app/",
//     githubUrl: "https://github.com/mayanpathak/Code_Collab",
//   },
//   {
//     id: "pomodorify",
//     title: "Pomodorify",
//     description: "A Pomodoro productivity app synced with Spotify and secure user authentication. Helps users maintain focus with timed work sessions.",
//     image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=800",
//     tags: ["React.js", "Firebase Auth", "Framer Motion"],
//     liveUrl: "https://pomodorify-blush.vercel.app/",
//     githubUrl: "https://github.com/mayanpathak/Pomodorify",
//   },
//   {
//     id: "sanghbuy",
//     title: "SanghBuy",
//     description: "A group-buying marketplace for Indian offline retailers with AI insights. Connects buyers for bulk discounts and improved logistics.",
//     image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800",
//     tags: ["React.js", "REST APIs", "Gemini AI"],
//     liveUrl: "https://sangh-buy.vercel.app/",
//     githubUrl: "https://github.com/mayanpathak/Sangh-Buy",
//   },
//   {
//     id: "moodtoanime",
//     title: "MoodToAnime",
//     description: "AI-powered app suggesting anime based on user-selected mood. Personalized recommendations that adapt to user preferences.",
//     image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?auto=format&fit=crop&w=800",
//     tags: ["React.js", "Redux Toolkit", "AI"],
//     liveUrl: "https://how-to-mood2anime-master.vercel.app/",
//     githubUrl: "https://github.com/mayanpathak/how-to-mood2anime-master",
//   },
  
// {
//   id: "gemini-mcp-chatbot",
//   title: "Gemini MCP Chatbot",
//   description: "An intelligent CLI chatbot powered by Google Gemini AI with Model Context Protocol integration. Features dynamic tool calling, real-time API interactions, and conversational AI agents for developer workflows.",
//   image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
//   tags: ["Node.js", "Google Gemini AI", "Model Context Protocol", "CLI Tools", "AI Agents"],
//   liveUrl: null, // CLI application - no live URL
//   githubUrl: "https://github.com/mayanpathak/newmcp",
// }

// ];




export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "website-builder-wilder",
    title: "Website Builder (Wilder)",
    description: "An AI-powered website builder that generates complete websites from natural language prompts. Users can create fully functional websites by describing their vision, customize the generated code in real-time, and download the entire project as a zip folder for deployment.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "WebContainers", "Node.js", "Express.js", "TypeScript", "AI Integration"],
    liveUrl: "https://website-builder-puce-sigma.vercel.app/",
    githubUrl: "https://github.com/mayanpathak/website-builder-",
  },
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
  {
    id: "gemini-mcp-chatbot",
    title: "Gemini MCP Chatbot",
    description: "An intelligent CLI chatbot powered by Google Gemini AI with Model Context Protocol integration. Features dynamic tool calling, real-time API interactions, and conversational AI agents for developer workflows.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "Google Gemini AI", "Model Context Protocol", "CLI Tools", "AI Agents"],
    liveUrl: null, // CLI application - no live URL
    githubUrl: "https://github.com/mayanpathak/newmcp",
  }
];