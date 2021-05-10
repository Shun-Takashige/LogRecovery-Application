app.component('chat-box',{
    props:{
        box_info:{
            type: Object,
            required: true
        },
        check_me:{
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class = "chat-box">
        <div class="chat_left" v-if = "check_me !== box_info.name">
            <div class = "chat_text">
                <div class="time">{{box_info.time}}</div>
                <div class="name">{{FromSpeakerToListener}}</div>
                <div class="content">{{box_info.content}}</div>
            </div>
        </div>
        <div class="chat_right" v-else>
            <div class = "chat_text">
                <div class="time">{{box_info.time}}</div>
                <div class="name">{{FromSpeakerToListener}}</div>
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