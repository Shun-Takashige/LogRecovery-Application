const app = Vue.createApp({
    data(){
        return{
            isEnter: false,
            files: [],
            isoutputData: false,
            outputfiles: []
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
            this.files.push(...event.dataTransfer.files)
            this.isEnter = false;
        },
        onChange(){
            this.files.push(...event.target.files)
        },
        outputData(){
            this.outputfiles = this.files;
            this.files = [];
            this.isoutputData = true;

        }
    }
})