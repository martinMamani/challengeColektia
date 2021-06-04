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
            <b-button squared variant="outline-success" type='submit' v-on:click.enter="addMovie" >addMovie</b-button>
        </div>
           <hr>
               
        <b-card-group deck>
            <div id="card" v-bind:key="movie.id" v-for="movie in movies">
                 <b-card
                     :title="movie.title"
                     :img-src="movie.photo"
                     img-alt="Image"
                     img-top
                     tag="article"
                     style="max-width: 20rem;"
                    class="mb-2"
                    background-color="red"
                    >
                    <b-card-text>
                        {{movie.year}}
                     </b-card-text>
                    <b-button variant="outline-danger" v-on:click="deleteMovie(movie.id)">Delete</b-button>
                    <b-button variant="outline-warning" v-on:click="change">Update</b-button>
                 </b-card>
                <div v-if="flag">
                  <div>
                         <h6>UPDATE MOVIE</h6>
                        <input type="text" :placeholder="movie.title" v-model="titleUpdate">
                        <br>
                        <input type="text" :placeholder="movie.photo" v-model="photoUpdate">
                        <br>
                        <input type="text" :placeholder="movie.year" v-model="yearUpdate">
                        <br>
                        <b-button squared variant="outline-success" type='submit' v-on:click.enter="updateMovie(movie.id)" >UpdateMovie</b-button>
                  </div>
                </div>
           </div>
        </b-card-group>
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
                this.title = ''
                this.photo = ''
                this.year = ''
            },
                async updateMovie(idMovie){
                 await axios.put(`http://localhost:3000/movie/${idMovie}`,{title:this.titleUpdate,photo:this.photoUpdate,year:this.yearUpdate})
                 this.titleUpdate = ''
                 this.photoUpdate =''
                 this.yearUpdate = ''
                 this.flag = false;
                },
            change(){
                if(this.flag){
                    console.log("flag true y cambio a false")
                    return this.flag = false

                }
                if(!this.flag){
                    console.log("flag false y cambio a true")
                    return this.flag = true
                }
                
            },
            },
            async updated() {
                 const response = await axios.get(`http://localhost:3000/movie/${this.name}`)
                console.log(response.data)
                this.movies = response.data
            },
    }

</script>


<style>
#card{
    color:black
}
</style>



