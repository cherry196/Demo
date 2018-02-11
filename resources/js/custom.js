$("#btn-chat").unbind('click').click(function(){
  var msg = JSON.parse('{"msg":"'+$("#btn-input").val()+'"}');
  $(".chat").append(
    '<li>'+$("#btn-input").val()+'</li>'
  )
  $("#btn-input").val('');
   $.ajax({
    url:'http://localhost:8080/',
    type:'POST',
    data : msg,
    success:function(result){
      console.log(result);
    }
  })
})
