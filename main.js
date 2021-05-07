const app = Vue.createApp({
    data(){
        return{
            isEnter: false,
            files: [],
            isoutputData: false,
            txt_list: []
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
            file = this.files[0];
            const reader = new FileReader()
            reader.readAsText(file)
            reader.onload = function(event){
                this.txt = event.target.result;
                console.log(this.txt)
            }
            this.files = []
            this.isoutputData = true;
        }
        // outputData(){
        //     this.txt_lists = [];
        //     for(let i in this.files){
        //         console.log(this.files[i].name);
        //         console.log(this.files[i].size);
        //         console.log(this.files[i].type);
        //         const reader = new FileReader() 
        //         reader.readAsText(this.files[i])
        //         reader.onload = function(event){
        //             var txt = event.target.result;
        //             this.isoutputData = true;
        //         }
        //     }
        //     this.files = [];
        //     this.isoutputData = true;
        // },
        // makeList(txt){
        //     this.txt_list.push(txt);
        //     console.log(txt);
        // }
    }
})



window.addEventListener('load', () => {
    const f = document.getElementById('file1');
    f.addEventListener('change', evt => {
        const btn = document.getElementById('button1');
        btn.addEventListener('click', ()=>{
            let input = evt.target;
            if (input.files.length == 0) {
                console.log('No file selected');
                return;
            }
            
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const textarea = document.getElementById('textarea');
                textarea.innerHTML = reader.result;
            };
        
            reader.readAsText(file);
            });
        })
      
  });