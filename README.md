Application Overview
This innovative platform harnesses the power of AI to deliver an immersive learning experience for students, integrating Canvas data and gamifying academic engagement through interactive AI-driven quizzes and chatbots. The application uses state-of-the-art tools like Firebase, OpenAI, and Pinecone DB to create a personalized, private, and engaging learning journey.

Key Functionalities
Canvas Integration and User Privacy

The app securely gathers a student’s Canvas Access Token to access their Canvas profile and academic resources. The access token is stored in the user's local storage to ensure data privacy, while the profile information is stored in Firebase for easy access and management.
Automated Course Retrieval and Material Management

Once connected, the platform fetches and organizes the student’s course list from Canvas and stores this information in Firebase. Simultaneously, it retrieves all relevant course materials from Canvas using Canvas API and prepares them for further processing.
Intelligent Document Processing and Vector Embedding

The system processes course materials by splitting PDFs into manageable sections (1000 characters each, with a 200-character overlap for context continuity).
Each section is then embedded using OpenAI's advanced embedding models, creating vector representations that are stored in Pinecone DB. This indexed database, coupled with metadata, allows for rapid retrieval of relevant content, optimized for interactive learning.
Interactive Gamified Learning with AI Bots

The application features two AI-driven bots: a Quiz Bot and a Chat Bot. These bots offer students an engaging and entertaining way to interact with their study material.
With gamification elements, the Quiz Bot and Chat Bot make learning more interactive, presenting quizzes and conversations that adapt based on the student’s progress and performance.
Contextual and Adaptive Learning

The AI bots analyze the student-provided context and transform it into embeddings. Using similarity search in Pinecone DB, they retrieve the top 5 most relevant vectors to craft tailored quizzes and chat responses that align with the student’s learning goals.
Motivational and Educational UI

The user interface is designed to encourage continuous learning by providing quizzes and feedback based on student performance. When a student scores below a certain threshold, the Quiz Bot gently motivates them to revisit the material through an entertaining, interactive experience, improving academic understanding with each interaction.
Example .env Configuration
plaintext
Copy code
# Canvas API Access Token
CANVAS_ACCESS_TOKEN=<Your Canvas Access Token>

# Firebase Configuration
FIREBASE_API_KEY=<Your Firebase API Key>
FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
FIREBASE_PROJECT_ID=<Your Firebase Project ID>
FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
FIREBASE_APP_ID=<Your Firebase App ID>

# OpenAI API Key for Embeddings
OPENAI_API_KEY=<Your OpenAI API Key>

# Pinecone Database API Key and Environment
PINECONE_API_KEY=<Your Pinecone API Key>
PINECONE_ENVIRONMENT=<Your Pinecone Environment>

# Application Settings
QUIZ_THRESHOLD_SCORE=<Minimum Score to Pass the Quiz>
VECTOR_CHUNK_SIZE=1000  # Size of text chunks (in characters)
VECTOR_OVERLAP_SIZE=200  # Overlap size for context continuity
MAX_SIMILAR_VECTORS=5  # Number of top similar vectors to retrieve
