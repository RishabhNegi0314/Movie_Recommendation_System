# Movie_Recommendation_System

🎬 Movie Recommendation System

A content-based movie recommendation system built using Python, Streamlit, Pandas, and TMDB API.
This app suggests similar movies based on user selection and allows genre-based recommendations with an interactive and visually appealing UI.

Features

Content-Based Filtering: Recommends movies by analyzing their features (e.g., genres, keywords, overview).

TMDB API Integration: Fetches high-quality movie posters dynamically.

Genre-Based Recommendations: Suggests random movies from a selected genre.

Custom UI Design:

Dark-themed background and sidebar.

Responsive card layout for recommendations.

Caching with Streamlit: Reduces API calls by caching posters for one hour.

Tech Stack

Python 3

Streamlit – for building the web interface.

Pandas – for dataset handling.

Pickle – to load pre-trained similarity models.

TMDB API – for fetching movie posters.

JSON – for handling genre data.

Dataset

TMDB 5000 Movies Dataset

File: tmdb_5000_movies.csv

Contains metadata like title, genres, overview, and ID used for API requests.

How It Works

User selects a movie from a dropdown.

System finds similar movies using cosine similarity on movie features.

Posters and titles of top 5 similar movies are displayed.

Alternatively, users can select a genre from the sidebar to get random movie suggestions.

Installation & Usage
1. Clone the Repository
git clone https://github.com/yourusername/movie-recommender.git
cd movie-recommender

2. Install Dependencies
pip install -r requirements.txt

3. Add TMDB API Key

Replace the API key in the fetch_poster function:

api_key = "your_tmdb_api_key"

4. Run the App
streamlit run app.py

Project Structure
├── app.py                  # Main Streamlit app
├── model/
│   ├── movie_list.pkl      # Pickled DataFrame of movies
│   └── similarity.pkl      # Pickled similarity matrix
├── tmdb_5000_movies.csv    # Dataset
├── requirements.txt        # Required Python packages
└── README.md               # Project documentation

Screenshots

(Add screenshots of your app interface here)

Future Improvements

Hybrid recommendation system (Content-Based + Collaborative Filtering)

Search functionality with fuzzy matching

User ratings integration
