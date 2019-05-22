<template>
    <Page>
    <StackLayout>
        <MovieSearchComponent v-if="selected == 0" ></MovieSearchComponent>
        <TVSearchComponent v-if="selected == 1"></TVSearchComponent>
    </StackLayout>
    </Page>
</template>

<script >

    import MovieDatabase from '../models/MovieDatabase.js';
    import MovieSearchComponent from './MovieSearch'
    import TVSearchComponent from './TVSearch'

    export default {
        name: 'SearchComponent',
        components:{
            MovieSearchComponent,
            TVSearchComponent
        },
        props:{
            selected:''
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
