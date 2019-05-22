<template>
	<Page>
		<ActionBar title="Welcome to Movie Searcher!"/>
		<StackLayout>
            <Label text="What do you want to search?"></Label>
			<SegmentedBar v-model="selected" >
				<SegmentedBarItem title="Movie"/>
				<SegmentedBarItem title="Tv"/>
			</SegmentedBar>
			<Image width="408" height="161" src="~/images/movie_db.png" stretch="none" />
		</StackLayout>
        <SearchComponent :selected=selected></SearchComponent>
	</Page>
</template>
<script >


import SearchComponent from './SearchComponent'

export default {

    components:{
        SearchComponent
    },
	data: function() {
		return {
            selected: ''
		};
	},
	methods: {
	},

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
