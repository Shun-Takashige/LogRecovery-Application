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
            <chat-box v-for = "box_info in box_info_list" v-bind:box_info = "box_info" v-bind:display_name = "display_name"></chat-box>
        </div>
    </div> 
    `,
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
            console.log(this.display_name);
            return box_info_list;
        },
    }
})

