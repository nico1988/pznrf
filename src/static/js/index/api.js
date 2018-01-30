
// http://localhost:8081/index.php?m=Home&c=index&a=Page&p=1

// http://localhost:8081/index.php?m=Home&c=category&a=Page&p=1

// http://localhost:8081/index.php?m=Home&c=article&a=index&p=1

// http://localhost:8081/index.php?m=Home&c=banner&a=index&p=1

// http://localhost:8081/index.php?m=Home&c=navtop&a=index&p=1

// $.ajax({
//     url:'http://localhost:8081/index.php?m=Home&c=banner&a=index&p=1',
//     type:'GET', //GET
//     async:true,    //或false,是否异步
//     data:{
//     },
//     // timeout:5000,    //超时时间
//     dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
//     beforeSend:function(xhr){
//         console.log(xhr)
//         console.log('发送前')
//     },
//     success:function(data,textStatus,jqXHR){
//         console.log(data)
//         console.log(textStatus)
//         console.log(jqXHR)
//     },
//     error:function(xhr,textStatus){
//         console.log('错误')
//         console.log(xhr)
//         console.log(textStatus)
//     },
//     complete:function(){
//         console.log('结束')
//     }
// })
// axios.get("http://localhost:8081/index.php?m=Home&c=banner&a=index&p=1",{withCredentials:true,params:{}}).then(res=>{
//     console.log(res);
// }).catch(error=>{
//     console.log(error);
// })
