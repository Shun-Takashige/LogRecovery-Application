app.component('setting-area',{
    props:{
        name_choice:{
            type:Object,
            required:true
        },
    },
    template:
    /*html*/ 
    `
    <div class = setting-area>
        <div class = filename>{{name_choice.filename}}</div>
        <div class = checkname>
            <p>発言した人、送信先の人の名前を表示しますか</p> 
            <input type="radio" id="yes" value="Yes" v-model="picked" v-on:change="DisplayName">
            <label for="yes">Yes</label>
            <br>
            <input type="radio" id="no" value="No" v-model="picked" v-on:change = "DisplayName">
            <label for="no">No</label>
            <br>
            
            
            
        </div>
        <div class = selectme>
            <p>あなたの名前を選んでください。</p>
            <form>
                <select id="select" :disabled="!display_name"  v-on:change = "DecideMe"></select>
            </form>
        </div>
    </div>
    `,
    data(){
        return{
            selected_me : "",
            check_make_list: false,
            display_name : false,
            picked : ""
        }
    },
    methods:{
        DisplayName(){
            if(this.picked == "No")this.display_name = false;
            if(this.picked == "Yes"){
                if(!this.check_make_list){
                    var Element = document.getElementById('select');
                    for(let i = 0; i < this.name_choice.candidate.length + 2; ++i){
                        let option = document.createElement('option');
                        option.setAttribute('value', i);
                        if(i == 0)option.innerHTML = '-------';
                        else if(i == 1)option.innerHTML = '入力しない';
                        else option.innerHTML = this.name_choice.candidate[i - 2];
                        Element.appendChild(option);
                    }
                }
                this.check_make_list = true;
                this.display_name = true;
            }
        },
        DecideMe(){
            
            let Element = document.getElementById('select');
            console.log(Element);
            var index_me = Element.value ;
            if(index_me == 0 || index_me == 1 || index_me >= this.name_choice.candidate.length + 2) this.selected_me ="";
            else this.selected_me = this.name_choice.candidate[index_me - 2];


            var my_info ={
                name: this.selected_me,
                index:this.name_choice.index,
                display_name : this.display_name
            }

            this.$emit("my_info", my_info);
            console.log(my_info);
        }
    },
    computed:{
        
    }
})