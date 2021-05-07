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
                    var txt = this.arrangeText(result);
                    console.log(txt);
                    this.txt_list.push(txt);
                }
            }

            this.files = [];
        },
        arrangeText(result){
            const lines = result.split(/\s/);
            // const tmp = result.split(" ");
            // var lines =[]
            // for(let i = 0; i < tmp.length; i++){
            //     var buf = tmp[i].split("\n");
            //     for(let j = 0; j < buf.length; ++j){
            //         lines.push(buf[j]);
            //     }
            // }
            console.log(lines);
            const temp_time = /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
            var txt = [];
            // var times =[];
            // var speakers =[];
            // var receivers = [];
            // var contents = [];
            // var name = [];
            // var time = [];
            // var content = [];
            
            let index = 0;

            while(index < lines.length){
                txt.push(temp_time.test(lines[index]));
                index++;
            }
            return txt;
        }
    }
})