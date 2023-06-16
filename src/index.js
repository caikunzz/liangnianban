import {sum} from '@/sum';
import jQuery from 'jquery';
import _ from 'lodash';
import '@/styles/index'

console.log(sum(2,3));
console.log(_)
jQuery(function(){
    console.log(12345)
})


jQuery.ajax({
    url:'http://127.0.0.1:3000/api/abc',
    success(data){
        console.log(data);
    }
})

jQuery.ajax({
    url:'http://127.0.0.1:3000/api1/abc1',
    success(data){
        console.log(data);
    }
})