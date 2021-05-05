const app = Vue.createApp({
    data(){
        return{
            isEnter: false,
            files: []
        }
    },
    methods:{
        dragEnter(){
            this.isEnter = true;
        },
        dragLeave(){
            this.isEnter = false;
        },
        dropFile(){
            this.files = [...event.dataTransfer.files]
            this.isEnter = false;
        }
    }
})