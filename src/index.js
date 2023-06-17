import {sum} from '@/sum';
import jQuery from 'jquery';
import _ from 'lodash';
import '@/styles/index'
import audio from '@/1.mp3'


const au = new Audio(audio)
au.autoplay=true;
au.loop=true;
document.body.append(au)

document.body.onclick=function(){
    au.play()
}


console.log(sum(2,3));
console.log(_)
jQuery(function(){
    console.log(12345)
})




// jQuery.ajax({
//     url:'http://127.0.0.1:3000/api/abc',
//     success(data){
//         console.log(data);
//     }
// })

// jQuery.ajax({
//     url:'http://127.0.0.1:3000/api1/abc1',
//     success(data){
//         console.log(data);
//     }
// })