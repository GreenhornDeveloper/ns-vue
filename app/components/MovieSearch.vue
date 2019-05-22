<template>
	<Page>
		<StackLayout>
			<SearchBar v-model="searchQuery" @submit="searchMovies" hint="Movie Name"/>
		</StackLayout>
	</Page>
</template>

<script >

import MovieDatabase from '../models/MovieDatabase.js';
import ResultsComponent from './Results';

const httpModule = require("http");
const dialogs = require("tns-core-modules/ui/dialogs");

export default {
	name: 'MovieSearchComponent',
	components: {
		ResultsComponent
	},
	data() {
		return {
			searchQuery: '',
			baseURL: 'https://api.themoviedb.org/3',
			searchResults: ''
		};
	},
	methods: {
		searchMovies: function () {
			let movie = new MovieDatabase(this.baseURL, 'search', 'movie', process.env.MOVE_DB_API, `query=${this.searchQuery}&page=1&include_adult=false`)
			let movieUrl = movie.createEndpoint()
			httpModule.getJSON(movieUrl)
				.then((response) => {
					this.searchResults = response;
				}, (error) => {
					dialogs.alert({
						title: "Something Broke",
						message: "Sorry, it just didnt work ok",
						okButtonText: "Ok"
					}).then(function () {
						console.log("Dialog closed!");
					});

				});
		}
	}
};
</script>

<style scoped>
ActionBar {
	background-color: #53ba82;
	color: #ffffff;
}

.message {
	vertical-align: center;
	text-align: center;
	font-size: 20;
	color: #333333;
}
</style>
