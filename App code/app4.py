# import pickle
# import streamlit as st
# import requests
# import pandas as pd
# import json

# # Function to fetch movie poster using TMDB API with caching
# @st.cache_data(ttl=3600)  # Cache for 1 hour
# def fetch_poster(movie_id):
#     api_key = "8265bd1679663a7ea12ac168da84d2e8"
#     url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US"
#     data = requests.get(url).json()
#     if "poster_path" in data and data["poster_path"]:
#         return "https://image.tmdb.org/t/p/w500/" + data["poster_path"]
#     else:
#         return "https://via.placeholder.com/500x750?text=No+Image"

# # Recommendation function
# def recommend(movie):
#     if movie not in movies['title'].values:
#         st.error(f"Movie '{movie}' not found in the dataset.")
#         return [], []

#     index = movies[movies['title'] == movie].index[0]
#     distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
#     recommended_movie_names = []
#     recommended_movie_posters = []
#     for i in distances[1:6]:
#         movie_id = movies.iloc[i[0]].movie_id
#         recommended_movie_names.append(movies.iloc[i[0]].title)
#         recommended_movie_posters.append(fetch_poster(movie_id))
#     return recommended_movie_names, recommended_movie_posters


# # Loading the data set
# movies_path = 'tmdb_5000_movies.csv'
# movies_df = pd.read_csv(movies_path)

# # Preprocess genres
# movies_df['genres_list'] = movies_df['genres'].apply(lambda x: [genre['name'] for genre in json.loads(x)])

# # Extract unique genres
# unique_genres = set()
# movies_df['genres_list'].apply(lambda x: unique_genres.update(x))

# # Side bar 
# st.sidebar.title("Filter by Genre")
# selected_genre = st.sidebar.selectbox("Select a Genre", sorted(unique_genres))

# # Function to recommend movies by genre
# def recommend_by_genre(selected_genre):
#     genre_movies = movies_df[movies_df['genres_list'].apply(lambda x: selected_genre in x)]
#     if genre_movies.empty:
#         st.error(f"No movies found for genre '{selected_genre}'.")
#         return [], []

#     recommended_movie_names = []
#     recommended_movie_posters = []
#     for _, movie in genre_movies.sample(n=min(5, len(genre_movies))).iterrows():
#         recommended_movie_names.append(movie['title'])
#         recommended_movie_posters.append(fetch_poster(movie['id']))

#     return recommended_movie_names, recommended_movie_posters

# def main():
# # Streamlit UI
#     st.title('Movie Recommender System')

# # Load data
#     movies = pickle.load(open('model/movie_list.pkl', 'rb'))
#     similarity = pickle.load(open('model/similarity.pkl', 'rb'))

# # Dropdown for movie selection
#     movie_list = movies['title'].values
#     selected_movie = st.selectbox("Type or select a movie from the dropdown", movie_list)

# # Show recommendations
#     if st.button('Show Recommendation'):
#         recommended_movie_names, recommended_movie_posters = recommend(selected_movie)
#         cols = st.columns(5)  # Create 5 columns for movie recommendations
#         for col, name, poster in zip(cols, recommended_movie_names, recommended_movie_posters):
#             with col:
#                 st.text(name)
#                 st.image(poster)
                
#     st.sidebar.write("### Genre-Based Recommendations")
#     if st.sidebar.button("Recommend Movies by Genre"):
#         st.title(f"Top {selected_genre} Movies")
#         recommended_movie_names, recommended_movie_posters = recommend_by_genre(selected_genre)
#         # cols = st.columns(5)  # Create 5 columns for movie recommendations
#         # for col, name, poster in zip(cols, recommended_movie_names, recommended_movie_posters):
#         #     with col:
#         #         st.text(name)
#         #         st.image(poster)

# if __name__ == "__main__":
#     main()



import pickle
import streamlit as st
import requests
import pandas as pd
import json

# Function to fetch movie poster using TMDB API with caching
@st.cache_data(ttl=3600)  # Cache for 1 hour
def fetch_poster(movie_id):
    api_key = "8265bd1679663a7ea12ac168da84d2e8"
    url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US"
    data = requests.get(url).json()
    if "poster_path" in data and data["poster_path"]:
        return "https://image.tmdb.org/t/p/w500/" + data["poster_path"]
    else:
        return "https://via.placeholder.com/500x750?text=No+Image"
    


def set_custom_sidebar_background(sidebar_image_path):
    # Sidebar customization settings
    sidebar_transparency = 0.8  # Transparency for the sidebar background
    sidebar_text_color = "white"  # Text color for sidebar content
    sidebar_padding = "15px"  # Padding inside the sidebar
    sidebar_border_radius = "10px"  # Rounded corners for the sidebar

    st.markdown(
        f"""
        <style>
        /* Sidebar background customization */
        section[data-testid="stSidebar"] {{
            background: 
                linear-gradient(rgba(0, 0, 0, {sidebar_transparency}), rgba(0, 0, 0, {sidebar_transparency})), 
                url({sidebar_image_path});
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            color: {sidebar_text_color}; /* Sidebar text color */
            padding: {sidebar_padding}; /* Inner padding for the sidebar */
            border-radius: {sidebar_border_radius}; /* Rounded corners */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
        }}

        /* Sidebar text styling */
        section[data-testid="stSidebar"] * {{
            color: {sidebar_text_color} !important; /* Force text color */
            font-family: "Arial", sans-serif; /* Set custom font */
        }}

        /* Optional: Sidebar scrollbar styling */
        section[data-testid="stSidebar"]::-webkit-scrollbar {{
            width: 8px;
        }}
        section[data-testid="stSidebar"]::-webkit-scrollbar-thumb {{
            background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent scrollbar thumb */
            border-radius: 4px;
        }}
        </style>
        """,
        unsafe_allow_html=True
    )
# Define a custom background for the sidebar
sidebar_image_url = 'https://static.vecteezy.com/system/resources/previews/000/258/943/original/modern-dark-texture-background-vector.jpg'  

# Apply the sidebar background
set_custom_sidebar_background(sidebar_image_url)

# Background 
def set_custom_background(image_path):
    # CSS for setting the background image with transparency only on the image
    transparency = 0.5  # Adjust transparency (0.0: fully transparent, 1.0: fully opaque)
    st.markdown(
        f"""
        <style>
        .stApp {{
            background: 
                linear-gradient(rgba(0, 0, 0, {transparency}), rgba(0, 0, 0, {transparency})),  /* Transparent black overlay */
                url({image_path}); /* Background image */
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            height: 100vh;
        }}
        </style>
        """,
        unsafe_allow_html=True
    )



image_url = 'https://handoff-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg'  
set_custom_background(image_url)


# Recommendation function
def recommend(movie, movies, similarity):
    if movie not in movies['title'].values:
        st.error(f"Movie '{movie}' not found in the dataset.")
        return [], []

    index = movies[movies['title'] == movie].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_movie_names = []
    recommended_movie_posters = []
    for i in distances[1:6]:
        movie_id = movies.iloc[i[0]].movie_id
        recommended_movie_names.append(movies.iloc[i[0]].title)
        recommended_movie_posters.append(fetch_poster(movie_id))
    return recommended_movie_names, recommended_movie_posters

# Loading the data set
movies_path = 'tmdb_5000_movies.csv'
movies_df = pd.read_csv(movies_path)

# Preprocess genres
movies_df['genres_list'] = movies_df['genres'].apply(lambda x: [genre['name'] for genre in json.loads(x)])

# Extract unique genres
unique_genres = set()
movies_df['genres_list'].apply(lambda x: unique_genres.update(x))

# Side bar 
st.sidebar.title("Filter by Genre")
selected_genre = st.sidebar.selectbox("Select a Genre", sorted(unique_genres))

# Function to recommend movies by genre
def recommend_by_genre(selected_genre):
    genre_movies = movies_df[movies_df['genres_list'].apply(lambda x: selected_genre in x)]
    if genre_movies.empty:
        st.error(f"No movies found for genre '{selected_genre}'.")
        return [], []

    recommended_movie_names = []
    recommended_movie_posters = []
    for _, movie in genre_movies.sample(n=min(5, len(genre_movies))).iterrows():
        recommended_movie_names.append(movie['title'])
        recommended_movie_posters.append(fetch_poster(movie['id']))

    return recommended_movie_names, recommended_movie_posters

def main():
    # Streamlit UI
    st.title('Lights, Camera, Recommendations!')

    # Load data
    movies = pickle.load(open('model/movie_list.pkl', 'rb'))
    similarity = pickle.load(open('model/similarity.pkl', 'rb'))

    # Dropdown for movie selection
    movie_list = movies['title'].values
    selected_movie = st.selectbox("Type or select a movie from the dropdown", movie_list)

    # Show recommendations
    if st.button('Find Similar Movies'):
        recommended_movie_names, recommended_movie_posters = recommend(selected_movie, movies, similarity)
        cols = st.columns(5)  # Create 5 columns for movie recommendations
        for col, name, poster in zip(cols, recommended_movie_names, recommended_movie_posters):
            with col:
                st.text(name)
                st.image(poster)
    
    st.sidebar.write("Genre-Based Recommendations")
    if st.sidebar.button("Get Suggestions!"):
        st.title(f"Top {selected_genre} Movies")
        recommended_movie_names, recommended_movie_posters = recommend_by_genre(selected_genre)
        cols = st.columns(5)  # Create 5 columns for movie recommendations
        for col, name, poster in zip(cols, recommended_movie_names, recommended_movie_posters):
            with col:
                st.text(name)
                st.image(poster)

if __name__ == "__main__":
    main()
