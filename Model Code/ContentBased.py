import numpy as np
import pandas as pd
import os
import ast
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle

# Load datasets
movies = pd.read_csv('tmdb_5000_movies.csv')
credits = pd.read_csv('tmdb_5000_credits.csv')

# Merge datasets
movies = movies.merge(credits, on='title')

# Select relevant columns
movies = movies[['movie_id', 'title', 'overview', 'genres', 'keywords', 'cast', 'crew']]
movies.dropna(subset=['overview', 'genres', 'keywords', 'cast', 'crew'], inplace=True)

# Functions to process columns
def convert(text):
    try:
        return [i['name'] for i in ast.literal_eval(text)]
    except (ValueError, SyntaxError):
        return []

def fetch_director(text):
    try:
        return [i['name'] for i in ast.literal_eval(text) if i['job'] == 'Director']
    except (ValueError, SyntaxError):
        return []

def collapse(L):
    return [i.replace(" ", "") for i in L]

# Apply transformations
movies['genres'] = movies['genres'].apply(convert)
movies['keywords'] = movies['keywords'].apply(convert)
movies['cast'] = movies['cast'].apply(convert).apply(lambda x: x[:3])  # Top 3 cast members
movies['crew'] = movies['crew'].apply(fetch_director)

# Clean up lists
movies['genres'] = movies['genres'].apply(collapse)
movies['keywords'] = movies['keywords'].apply(collapse)
movies['cast'] = movies['cast'].apply(collapse)
movies['crew'] = movies['crew'].apply(collapse)

# Process 'overview' and create 'tags'
movies['overview'] = movies['overview'].apply(lambda x: x.split())
movies['tags'] = movies['overview'] + movies['genres'] + movies['keywords'] + movies['cast'] + movies['crew']

# Final dataset
new = movies[['movie_id', 'title', 'tags']]
new = new.copy()  # Fix SettingWithCopyWarning
new['tags'] = new['tags'].apply(lambda x: " ".join(x))

# Vectorization
cv = CountVectorizer(max_features=5000, stop_words='english')
vector = cv.fit_transform(new['tags']).toarray()

# Cosine similarity
similarity = cosine_similarity(vector)

# Ensure 'model/' directory exists
os.makedirs('model', exist_ok=True)

# Save files
pickle.dump(new, open('model/movie_list.pkl', 'wb'))
pickle.dump(similarity, open('model/similarity.pkl', 'wb'))

print("Files saved successfully!")
