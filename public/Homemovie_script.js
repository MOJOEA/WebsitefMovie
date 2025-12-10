function createMovieBox(movieId, watchId, trailerId) {
    const mainContainer = document.getElementById('mainContainer');

    const box = document.createElement('div');
    box.className = 'box-movie';

    const imgBox = document.createElement('div');
    imgBox.className = 'img-movie-box';
    imgBox.id = movieId;

    const titleBox = document.createElement('div');
    titleBox.className = 'box-movie-title';
    const rating = document.createElement('p');
    rating.textContent = '⭐ 8.9/10 : ';
    const title = document.createElement('h3');
    title.textContent = 'Arcane';

    titleBox.appendChild(rating);
    titleBox.appendChild(title);

    const watchBtn = document.createElement('button');
    watchBtn.className = 'box-movie-btn';
    watchBtn.name = 'Watch_btn';
    watchBtn.id = watchId;
    watchBtn.textContent = '+ Watch Now';

    const trailerBtn = document.createElement('button');
    trailerBtn.className = 'box-movie-btn';
    trailerBtn.name = 'Trail_btn';
    trailerBtn.id = trailerId;
    trailerBtn.textContent = 'Trailer';

    box.appendChild(imgBox);
    imgBox.appendChild(titleBox);
    box.appendChild(watchBtn);
    box.appendChild(trailerBtn);

    mainContainer.appendChild(box);
}

