const app = Vue.createApp({
    data(){
        return{
            isEnter: false,
            files: [],
            txt_list:[],
            // isoutputData: false,
            filename_list: [],
            times_list: [],
            speakers_list: [],
            listeners_list: [],
            contents_list: []
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
            this.filename_list =[];
            for(let i in this.files){
                console.log(this.files[i].name);
                console.log(this.files[i].size);
                console.log(this.files[i].type);
                this.filename_list.push(this.files[i].name);
                const reader = new FileReader() 
                reader.readAsText(this.files[i])
                reader.onload = (event)=>{
                    var result = reader.result;
                    var txt = this.arrangeText(result);
                    console.log(txt);
                }
            }

            this.files = [];
        },
        arrangeText(result){
            const time1 = /([01][0-9]:[0-5][0-9]:[0-5][0-9])/g;//00:00:00~19:59:59を分割
            const time2 = /([2][0-3]:[0-5][0-9]:[0-5][0-9])/g;//20:00:00~23:59:59を分割
            const result_split_by_time1 = result.split(time1);
            
            const result_split_by_time = [];//time1 time2 の二つによって文字を区切る。
            for(let i = 0; i < result_split_by_time1.length; ++i){
                const result_split_by_time2= result_split_by_time1[i].split(time2);
                for(let j = 0; j < result_split_by_time2.length; ++j){
                    result_split_by_time.push(result_split_by_time2[j]);
                }
            }
            console.log(result_split_by_time);
            

            var name = "";//nameに関する情報の一時保存
            var speakers =[];//発言者のリスト
            var listeners = [];//聞き手のリスト

            var time;//timeに関する情報の一時保存
            var times = [];//発言時刻のリスト

            var content = "";//チャットの内容の一時保存
            var content2 = ""//チャットの内容の一時保存
            var contents = [];//チャットの内容のリスト
            

            var state = 0;//state == 0は初期状態. 1は"開始"の文字が現れるの待ち状態。2はspeakersに関する状態、3はlistenersに関する状態、4はcontentsに関する状態
            var first_check = true;//先頭の空文字をcontentsに入れないために、最初の"開始"が現れるまでtrueにしておく。
            var result_split; //result_split_by_time[i]をさらに切り分けたもの。
            
            for(let i = 0; i < result_split_by_time.length; ++i){
                console.log(state);
                if(time1.test(result_split_by_time[i]) || time2.test(result_split_by_time[i])){
                    time = result_split_by_time[i];
                    state = 1;
                }else if(state == 1){
                    result_split = result_split_by_time[i].split(/(\s)/);
                    for(let j = 0; j < result_split.length; ++j){
                        if(state == 1){
                            if(result_split[j] == "開始"){
                                state = 2;
                                if (first_check) first_check = false;
                                else contents.push(content);
                                content = "";
                                content2 = "";
                                times.push(time);
                            }
                            else{
                                content2 = content2 + result_split[j].replace("↵", "\n");
                            }
                        }else if(state == 2){
                            if(result_split[j] == "終了"){
                                speakers.push(name);
                                name = "";
                                content2 = "";
                                state = 3;
                            }else if(result_split[j] == ":"){
                                speakers.push(name);
                                name = "";
                                content2 = "";
                                state = 4;
                            }else{
                                name = name + result_split[j];
                                content2 = content2 + result_split[j].replace("↵", "\n");
                            }
                        }else if(state == 3){
                            if(result_split[j] == ":"){
                                listeners.push(name);
                                name = "";
                                content2 = "";
                                state = 4;
                            }
                            else{
                                name = name + result_split[j];
                                content2 = content2 + result_split[j].replace("↵", "\n");
                            }
                        }else if(state == 4){
                            content = content + result_split[j].replace("↵", "\n");
                        }
                    }
                    if(state == 1){
                        content = content + time;
                        content = content + content2;
                        content2 = ""
                        state = 4;
                    }else if(state == 2 || state == 3){
                        content = content + content2;
                        content2 = "";
                        name = "";
                        if(state == 2)speakers.push("Unknown");
                        listeners.push("Unknown");
                        state = 4;
                    }
                }else{
                    content = content + result_split_by_time[i].replace("↵", "\n");
                    state = 4;
                }
            }
            if(content.length){
                contents.push(content);
            }

            this.times_list.push(times);
            this.speakers_list.push(speakers);
            this.listeners_list.push(listeners);
            this.contents_list.push(contents);

            console.log(times);
            console.log(speakers);
            console.log(listeners);
            console.log(contents);
            
            var　txt =[];
            return txt;
        }
    }
})