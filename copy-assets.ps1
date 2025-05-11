# Create public directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public"

# Copy assets
Copy-Item -Path "../video1.mp4" -Destination "public/" -Force
Copy-Item -Path "../music.mp3" -Destination "public/" -Force
Copy-Item -Path "../narration.mp3" -Destination "public/" -Force
Copy-Item -Path "../vesak-card.jpg" -Destination "public/" -Force
Copy-Item -Path "../association-logo.png" -Destination "public/" -Force 