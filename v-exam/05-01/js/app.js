var app = new Vue({
    el:'#app',
    data: {
        message:'Hello Vue.js',
        message2:'Welcome Vue.js',
        //1.새로운 데이터 속성을 1개 추가하고 , {{}}데이터 바인딩을 이용해 화면에 표시해

        uid: 10,
        //2.uid를 변경하고 해당 uid의 변경 여부를 크롬 개발자 도구의 
        //'화면 요소 검사' 기능으로 확인
        //p 태그의 id 값을 검사

        flag: false,
        //4.위 flag값을 false로 변경햇을 때 화면에 어떤 영향을 주는지 확인해   
    },
    methods: {
        clickBtn() {
            console.log("hi");
        },
        //위와 같음 es5 와 es6 문법의 차이. 위가 es6
        //clickBtn:function() {
        //  console.log("hi");    
        //}
        clickBtn2() {
            console.log("bye");
        },
        //3.eventMethod를 하나 추가하고 index.html의 #3 영역에 
        //해당 이벤트를 실행하는 버튼을 추가해

    }
});