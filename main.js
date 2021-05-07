const app = Vue.createApp({
    data(){
        return{
            isEnter: false,
            files: [],
            isoutputData: false,
            name_list: [],
            txt_list:[]
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
        // outputData(){
        //     file = this.files[0];
        //     const reader = new FileReader()
        //     reader.readAsText(file)
        //     reader.onload = function(event){
        //         const textarea = document.getElementById('textarea');
        //         textarea.innerHTML = reader.result;
        //         console.log(textarea)
        //         this.isoutputData = true;
        //     }
        //     this.files = []
            
        // }
        outputData(){
            this.txt_list = [];
            this.name_list =[];
            for(let i in this.files){
                console.log(this.files[i].name);
                console.log(this.files[i].size);
                console.log(this.files[i].type);
                this.name_list.push(this.files[i].name);
                const reader = new FileReader() 
                reader.readAsText(this.files[i])
                reader.onload = (event)=>{
                    var result = reader.result;
                    this.txt_list.push(result);
                    this.isoutputData = true;
                }
            }
            this.files = [];
        },
    }
})