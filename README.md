# 🎬 Movie Recommendation System

A **content-based movie recommendation system** built using **Python, Streamlit, Pandas, and TMDB API**.  
This app suggests similar movies based on user selection and allows genre-based recommendations with a sleek UI.

---

## ✨ Features
- **Content-Based Filtering** – Recommends movies based on similarity of features (genres, keywords, overview).
- **TMDB API Integration** – Fetches high-quality movie posters dynamically.
- **Genre-Based Recommendations** – Suggests random movies from a chosen genre.
- **Custom UI Design**  
  - Dark-themed background and sidebar.  
  - Responsive card layout for recommendations.
- **Caching with Streamlit** – Reduces API calls by storing poster data for one hour.

---

## 🛠️ Tech Stack
- **Python 3**
- **Streamlit** – Web interface
- **Pandas** – Dataset handling
- **Pickle** – Pre-trained model loading
- **TMDB API** – Movie posters
- **JSON** – Genre data processing

---

## 📂 Dataset
- **TMDB 5000 Movies Dataset**  
  - File: `tmdb_5000_movies.csv`  
  - Contains metadata like titles, genres, overviews, and TMDB IDs.

---

## 🚀 How It Works
1. **Movie Selection:** User selects a movie from a dropdown.  
2. **Similarity Calculation:** System finds similar movies using a pre-computed **cosine similarity matrix**.  
3. **Poster Fetching:** High-quality posters fetched from **TMDB API**.  
4. **Genre Filtering:** Users can get random movie suggestions by selecting a genre.

---

## ⚙️ Installation & Usage

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/movie-recommender.git
cd movie-recommender
