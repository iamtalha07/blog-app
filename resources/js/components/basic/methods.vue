<template>
    <div>
        <h1>The number is {{views}}</h1>
        <button @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>
        <br>
        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <h1>{{blog.title}}</h1>
            <p>{{blog.post}}</p>
        </div>
    </div>
</template>

<script>
export default { 
    data() {
        return {
            views: 0,
            blogs: []
        }
    },
    methods: {
        updateCounter(number){
            this.views += number
        }
    },

    created(){
        this.views = 100;
        //get the blog posts
        let posts =  [
                {
                    title: "Blog 1",
                    post: "post 1",
                    id: 1
                },
                {
                    title: "Blog 2",
                    post: "post 2",
                    id: 2
                },
                {
                    title: "Blog 3",
                    post: "post 3",
                    id: 3
                },
            ]

            this.blogs = posts
    }
}
</script>