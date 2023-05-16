import { releases } from "./constants.js";

const releasesContainer = document.getElementById("releases");

function releaseGenerator() {
	for (let release of releases) {
			releasesContainer.innerHTML += 
			`<div class="album-release">
                    <img src="./img/${release.image}" alt="" class="album-cover">
                    <div class="genre-year">
                        <p class="genre">${release.genre}</p>
                        <p class="year">${release.year}</p>
                    </div>
                    <h4 class="title">${release.title}</h4>
                    <h4 class="artist">${release.artist}</h4>
             </div>`;
	}
};

releaseGenerator();