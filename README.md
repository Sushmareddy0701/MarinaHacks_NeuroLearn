📚 Academic Assistant Application - 
Welcome to the Academic Assistant platform! This application transforms your study experience by integrating Canvas data, AI-driven quizzes, and chatbots that make learning interactive and enjoyable.

With Firebase for profile management, OpenAI for smart content embedding, and Pinecone for vector-based retrieval, the app combines cutting-edge technologies to create a personalized academic journey.

🌐 Application Overview
Academic Assistant is a groundbreaking tool that connects to your Canvas account, retrieves all course materials, and organizes them for interactive learning. Here's a quick guide to the configuration variables required for setting up the environment.

⚙️ Key Functionalities
🔒 Secure Canvas Integration

Retrieves a student's Canvas Access Token to access their academic data.
The access token is stored locally on the user's device for privacy, while profile data is managed through Firebase.
📚 Automatic Course Management

Fetches and organizes courses directly from Canvas.
Course materials are retrieved, organized, and prepared for easy access and future analysis.
🧠 Intelligent Document Processing

Breaks down course PDFs into sections (1000 characters each, with 200-character overlap for seamless context).
Uses OpenAI embeddings to transform these sections into vectors and stores them in Pinecone DB along with metadata for efficient, context-aware retrieval.
🎮 Gamified Learning with AI Bots

Includes two interactive bots: a Quiz Bot and a Chat Bot.
These bots create a fun learning experience through gamified quizzes and conversations, making study sessions engaging and dynamic.
🎯 Contextual, Adaptive Learning

The AI bots use a student-defined context, convert it into embeddings, and retrieve the top 5 similar content vectors for crafting quizzes and responses.
This provides personalized learning paths that adapt to individual academic needs.
✨ Motivational & Educational User Interface

The user interface encourages students to keep learning by providing adaptive quizzes and feedback.
If a student scores below a set threshold, the Quiz Bot prompts them with hints and fun interactions to help them improve in a supportive environment.
🔑 Example .env Configuration
Here’s an example of the necessary .env variables to get the application up and running smoothly:

plaintext
Copy code
# 🔐 Canvas API Access Token (Keep this safe and secure)
CANVAS_ACCESS_TOKEN=<Your Canvas Access Token>

# 🔥 Firebase Configuration
FIREBASE_API_KEY=<Your Firebase API Key>
FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
FIREBASE_PROJECT_ID=<Your Firebase Project ID>
FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
FIREBASE_APP_ID=<Your Firebase App ID>

# 🤖 OpenAI API Key for Smart Embeddings
OPENAI_API_KEY=<Your OpenAI API Key>

# 📈 Pinecone Database API Key & Environment
PINECONE_API_KEY=<Your Pinecone API Key>
PINECONE_ENVIRONMENT=<Your Pinecone Environment>

# ⚙️ Application Settings
QUIZ_THRESHOLD_SCORE=<Minimum Score to Pass the Quiz>
VECTOR_CHUNK_SIZE=1000  # Size of text chunks (in characters)
VECTOR_OVERLAP_SIZE=200  # Overlap size for context continuity
MAX_SIMILAR_VECTORS=5  # Number of top similar vectors to retrieve
📌 Important Notes:
Canvas Access Token is stored locally on the device to prioritize user privacy.
Firebase is utilized to manage user profiles and course data, making it easy to access relevant information.
OpenAI embeddings enhance content retrieval, allowing the AI to pull the most relevant information for each quiz.
Pinecone handles vectorized data efficiently, enabling the AI bots to retrieve contextually relevant material quickly and accurately.
Set the QUIZ_THRESHOLD_SCORE to encourage adaptive feedback based on quiz performance, making learning more effective and engaging.
By setting up these variables, you’re all set to unlock a new level of interactive and adaptive learning with Academic Assistant! 🎉

⚠️ Remember: Keep your API keys safe and avoid sharing them with others to ensure data security.
