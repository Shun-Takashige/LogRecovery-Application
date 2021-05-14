app.component('chat-container',{
    props:{
        file_info:{
            type: Object,
            required: true
        },
        display_name:{
            type: Boolean,
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
        <div>
            <chat-box v-for = "box_info in box_info_list" v-bind:box_info = "box_info" display_name = "display_name"></chat-box>
        </div>
    </div> 
    `,
    data(){
        return{
            // NameChoice :[],
            // check_prepare: false,
            // start_display: true
        }
    },
    // methods:{
    //     select_me(){
    //         var index_me = document.form1.SelectMe.selectedIndex;
    //         if(index_me == 0 || index_me == 1 || index_me >= this.NameChoice.length + 2) this.check_me ="";
    //         else this.check_me = this.NameChoice[index_me - 2];
    //         start_display = true;
    //     }
    // },
    computed:{
        box_info_list(){
            var box_info_list = [];
            for(let i = 0; i < this.file_info.times.length; ++i){
                var box_info = {
                    time : this.file_info.times[i],
                    speaker : this.file_info.speakers[i],
                    listener : this.file_info.listeners[i],
                    content : this.file_info.contents[i],
                    my_name: this.file_info.my_name
                }
                box_info_list.push(box_info);
            }
            console.log(box_info_list);
            return box_info_list;
        },
        // name_choice(){
        //     for(let i = 0; i < this.file_info.speakers.length; ++i){
        //         var check = true;
        //         for(let j = 0; j < this.NameChoice.length; ++j){
        //             if(this.file_info.speakers[i] === this.NameChoice[j]) check = false;
        //         }
        //         if(check) this.NameChoice.push(this.file_info.speakers[i]);
        //     } 

        //     if(this.NameChoice.length){
        //         let Element = document.getElementById('SelectMe');
        //         for(let index = 0; index < this.NameChoice.length + 2; ++index){
        //             let option = document.createElement('option');
        //             option.setAttribute('value', index);
        //             if(index == 0)option.innerHTML = '-------';
        //             else if(index == 1)option.innerHTML = '入力しない';
        //             else option.innerHTML = this.NameChoice[index - 2];
        //             Element.appendChild(option);
        //         }
        //         this.check_prepare = true; 
        //     }
        // }
    }
})

