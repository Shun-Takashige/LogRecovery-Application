app.component('chat-box',{
    props:{
        box_info:{
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
    <div class = "chat-box">
        <div class="chat_right" v-if = "box_info.my_name == box_info.speaker">
            <div class = "chat_text">
                <div class="time">{{box_info.time}}</div>
                <div class="name" v-if = "display_name">{{FromSpeakerToListener}}</div>
                <div class="content">{{box_info.content}}</div>
            </div>
        </div>
        <div class="chat_left" v-else>
            <div class = "chat_text">
                <div class="time">{{box_info.time}}</div>
                <div class="name" v-if = "display_name">{{FromSpeakerToListener}}</div>
                <div class="content">{{box_info.content}}</div>
            </div>
        </div>
    </div>
    `,
    computed:{
        FromSpeakerToListener(){
            return this.box_info.speaker + "から"+this.box_info.listener + "へ";
        }
    }
})