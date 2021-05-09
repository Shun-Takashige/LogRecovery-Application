app.component('chat-container',{
    props:{
        file_info:{
            type: Object,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="chat-container">
        <div class = "chat_title">
            {{file_info.filename}}
        </div>
        <div class = "check_person" v-if = "check_prepare">
            <p>自分のアカウント名を選んでください。もし入力したくない場合は、入力しないを選んでください。何かしらを選ぶことが必須となります。</p>
            <form name = "form1" action = "">
                <select id = "SelectMe" onChange = "select_me" required></select><!--もし何かしら不具合が起こったらいったんrequiredは外す-->
            </form>
        </div>
        <div v-if = "start_display">
            <chat-box v-for = "box_info in box_info_list" v-bind:box_info = "box_info" check_me = "check_me"></chat-box>
        </div>
    </div> 
    `,
    data(){
        return{
            check_me : "", 
            NameChoice :[],
            check_prepare: false,
            start_display: false
        }
    },
    methods:{
        select_me(){
            var index_me = document.form1.SelectMe.selectedIndex;
            if(index_me == 0 || index_me == 1 || index_me >= this.NameChoice.length + 2) this.check_me ="";
            else this.check_me = this.NameChoice[index_me - 2];
            start_display = true;
        }
    },
    computed:{
        box_info_list(){
            var box_info_list = [];
            for(let i = 0; i < this.file_info.times.length; ++i){
                var box_info = {
                    time : this.file_info.times[i],
                    speaker : this.file_info.speakers[i],
                    listener : this.file_info.listeners[i],
                    content : this.file_info.contents[i]
                }
                box_info_list.push(box_info);
            }
            return box_info_list;
        },
        name_choice(){
            for(let i = 0; i < this.file_info.speakers.length; ++i){
                var check = true;
                for(let j = 0; j < this.NameChoice.length; ++j){
                    if(this.file_info.speakers[i] === this.NameChoice[j]) check = false;
                }
                if(check) this.NameChoice.push(this.file_info.speakers[i]);
            } 

            if(this.NameChoice.length){
                let Element = document.getElementById('SelectMe');
                for(let index = 0; index < this.NameChoice.length + 2; ++index){
                    let option = document.createElement('option');
                    option.setAttribute('value', index);
                    if(index == 0)option.innerHTML = '-------';
                    else if(index == 1)option.innerHTML = '入力しない';
                    else option.innerHTML = this.NameChoice[index - 2];
                    Element.appendChild(option);
                }
                this.check_prepare = true; 
            }
        }
    }
})

