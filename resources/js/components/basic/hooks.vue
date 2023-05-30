<template>
    <div>
        <h1>Hooks</h1>
        <p>My name is: {{name}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Talha'
        }
    },
    beforeCreate(){
        console.log('nigga')
    },
    created(){
        console.log(this.name)
    },
    mounted(){
        console.log('mount')
    }
}
</script>