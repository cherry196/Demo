$("#btn-chat").unbind('click').click(function(){
  var msg = JSON.parse('{"msg":"'+$("#btn-input").val()+'"}');
  $(".chat").append(
    '<li>'+$("#btn-input").val()+'</li>'
  )
  $("#btn-input").val('');
   $.ajax({
    url:window.location.href,
    type:'POST',
    data : msg,
    success:function(result){
      console.log(result);
    }
  })
})
