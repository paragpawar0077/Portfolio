// ============================================================
// PROJECTS DATA
// Real projects, pulled from GitHub (github.com/paragpawar0077) and résumé.
// `category: "rag"` marks a RAG/LLM project — two are marked below per spec.
//
// `demoLink: null`  -> no hosted demo yet. Set to your live URL once deployed
//                       and the "Try it out" button appears automatically.
// `videoUrl: null`  -> no walkthrough video yet. Set to EITHER:
//                       - a YouTube URL (unlisted is fine) e.g.
//                         "https://www.youtube.com/watch?v=XXXXXXXXXXX"
//                       - a direct video file URL (.mp4/.webm) hosted
//                         externally (don't put large video files in
//                         /public — see VideoModal.jsx comment for why)
//                       Once set, a "▶ Watch Demo" button appears and opens
//                       a modal — the video isn't downloaded until clicked.
// ============================================================
export const projects = [
  {
    id: 1,
    category: "rag",
    name: "AI Second Brain",
    description:
      "Full-stack personal knowledge-management app — upload PDFs or notes, then search and chat with them via retrieval grounded strictly in your own content, not general model knowledge.",
    stack: ["React 19", "FastAPI", "ChromaDB", "Groq · Llama 3.3 70B", "JWT Auth"],
    outcome: "Auth → ingestion → vector search → RAG chat → usage analytics, shipped as one system",
    demoLink: null,
    videoUrl: null,
    githubLink: "https://github.com/paragpawar0077/Second_brain",
  },
  {
    id: 2,
    category: "rag",
    name: "AI Teaching Assistant (RAG)",
    description:
      "Flask REST API integrating Whisper (speech-to-text, Hindi→English translation) into a production-shaped RAG pipeline with real-time, timestamped answers.",
    stack: ["Flask", "Whisper", "ChromaDB", "GROQ API"],
    outcome: "ChromaDB vector search (cosine similarity, HNSW) + Llama 3.3 70B, hallucinations reduced via prompt engineering",
    demoLink: null,
    videoUrl: null,
    githubLink: "https://github.com/paragpawar0077/AI-Teaching-Assistant",
  },
  {
    id: 3,
    category: "general",
    name: "Fraud Detection System",
    description:
      "Hybrid ensemble (XGBoost + Isolation Forest + rule-based signals) over 10,000 transactions, with a threshold sensitivity sweep to find the recall-optimal cutoff.",
    stack: ["Python", "XGBoost", "Isolation Forest", "SMOTE"],
    outcome: "96.7% recall (29/30 frauds caught) at 0.75 threshold; risk-tier system caught 100% at ~96% lower review cost",
    demoLink: null,
    videoUrl: null,
    githubLink: "https://github.com/paragpawar0077/fraud-detection-system",
  },
  {
    id: 4,
    category: "general",
    name: "Customer Churn Prediction",
    description:
      "Feature-engineered churn model on the Telco dataset (7,043 customers), comparing Gradient Boosting against Logistic Regression and Random Forest after SMOTE rebalancing.",
    stack: ["Scikit-learn", "PostgreSQL", "Power BI"],
    outcome: "ROC-AUC 0.838; quantified ₹1.39L in monthly at-risk revenue via a live Power BI dashboard",
    demoLink: null,
    videoUrl: null,
    githubLink: "https://github.com/paragpawar0077/Customer-churn-prediction",
  },
  {
    id: 5,
    category: "general",
    name: "E-Commerce Sales Analysis",
    description:
      "End-to-end analytics pipeline analyzing 100,000+ Brazilian e-commerce orders. Covers automated Python data cleaning, database creation, multi-table JOINs, and complex PostgreSQL querying.",
    stack: ["Python", "PostgreSQL", "Power BI", "Pandas"],
    outcome: "Cleaned 112K transaction records; authored 10 production-style SQL queries (CTEs, Window Functions) to track sales trends, customer density, and logistics delay hotspots.",
    demoLink: null,
    videoUrl: null,
    githubLink: "https://github.com/paragpawar0077/E-Commerce-Sales-Analysis",
  },
];
