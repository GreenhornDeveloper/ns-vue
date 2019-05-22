<template>
	<Page @navigatingTo="displayResults">
		<StackLayout>
			<ListView height="800" for="show in searchResults" @itemTap="getTvInfo">
				<v-template>
					<Label class="label-class" text="farts"></Label>
					<!-- <Image width="400" height="600" :src="show.poster_path" stretch="aspectFill"/> -->
				</v-template>
			</ListView>
		</StackLayout>
	</Page>
</template>

<script >


export default {
	name: 'ResultsComponent',
	data() {
		return {
			searchResults: []		}
	},
	props: {
		tvSearchResponse: ''
	},
	methods: {
		displayResults: function () {
			this.tvSearchResponse.results.map((result) => {
				let image = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${result.poster_path}`
				this.searchResults.push({
					name: result.name,
					poster_path: image
				})
			})

		},

		getTvInfo: function () {
			console.log('ok')
		}
	}
};
</script>

<style scoped>
ActionBar {
	background-color: #53ba82;
	color: #ffffff;
}

.label-class {
	vertical-align: center;
	text-align: center;
	width:100px;
	height: 100px;
	color: #333333;
}
</style>
