Vue.component('todo-footer',{
    template : '<p>This is another child global component</p>'
});
var cmp = {
    template : '<p>This is another local child component</p>'
};
var app = new Vue({
    el : '#app',
    data : {
        message : 'This is a parent component'
    },
    //지역변수도 Vue 인스턴스 바깥에 정의, 나는 안에다 정의해서 틀렸음
    // component : cmp,
    // var cmp = {
    //     template : '<p>This is another child local component</p>'
    // };

    //answer
    component : {
        'todo-list' : cmp
    }

});