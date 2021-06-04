<template>
    <div>
        <div>
            <h1>Add Favorite Movie</h1>
             <input type="text" placeholder="title" v-model="title">
             <br>
            <input type="text" placeholder="urlPhoto" v-model="photo">
            <br>
            <input type="text" placeholder="year" v-model="year">
            <br>
            <button type='submit' v-on:click.enter="addMovie" >AddMovie</button>
        </div>
           <hr>
            <div v-bind:key="movie.id" v-for="movie in movies">
                <h2>{{movie.title}}</h2>
                <br>
                <img v-bind:src="movie.photo" :alt="movie.photo">
                <br>{{movie.year}}
                <br>
                <button v-on:click="deleteMovie(movie.id)">Delete</button>
                <button v-on:click="change">Update</button>
                <hr>
                <div v-if="flag">
        <div>
              <h3>Update Movie</h3>
             <input type="text" :placeholder="movie.title" v-model="titleUpdate">
             <br>
            <input type="text" :placeholder="movie.photo" v-model="photoUpdate">
            <br>
            <input type="text" :placeholder="movie.year" v-model="yearUpdate">
            <br>
            <button type='submit' v-on:click.enter="updateMovie(movie.id)" >UpdateMovie</button>
        </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
        async created() {
            const response = await axios.get(`http://localhost:3000/movie/${this.name}`)
            console.log(response.data)
             this.movies = response.data
        },
            data(){
                return{
                    name:'fight',
                    movies:[],
                        title:'',
                        photo:'',
                        year:'',
                        flag:false,
                        titleUpdate:'',
                        photoUpdate:'',
                        yearUpdate:'',

                }
            },
            methods: {
                async deleteMovie(idMovie){
                    await axios.delete(`http://localhost:3000/movie/${idMovie}`)
                },
                async addMovie(){
                await axios.post('http://localhost:3000/movie/',{title:this.title,photo:this.photo,year:this.year})
            },
                async updateMovie(idMovie){
                 await axios.put(`http://localhost:3000/movie/${idMovie}`,{title:this.titleUpdate,photo:this.photoUpdate,year:this.yearUpdate})
                 this.flag = false;
                },
            change(){
                this.flag = true
            },
                },
    }

</script>


<style>

</style>



