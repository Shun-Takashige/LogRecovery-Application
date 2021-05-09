// app.component('chat-list',{
//     props:{
//         filename_list:{
//             type: Array,
//             required: true
//         },
//         times_list:{
//             type: Array,
//             required: true
//         },
//         speakers_list:{
//             type: Array,
//             required: true
//         },
//         listeners_list:{
//             type: Array,
//             required: true
//         },
//         contents_list:{
//             type: Array,
//             required: true
//         }
//     },
//     template:
//     /*html*/
//     `
//     <div class = "chat-list">
//         <li v-for = "file_info in file_info_list">
//             <chat-container :file_info = "file_info"></chat-container>
//         </li>
//     </div>`,
//     // data(){
//     //     return{
//     //         file_info_list: []
//     //     }
//     // },
//     computed: {
//         file_info_list(){
//             var file_info_list = [];
//             for(let i = 0; i < this.filename_list.length; ++i){
//                var file_info = {
//                    filename = this.filename_list[i],
//                    times = this.times_list[i],
//                    speakers = this.speakers_list[i],
//                    listeners = this.listeners_list[i],
//                    contents = this.contents_list
//                }
//                file_info_list.push(file_info);
//             }
//             return file_info_list;
//         }
//     }
// })