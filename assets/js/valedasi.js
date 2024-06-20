$(document).ready(function(){
  $('#form').on('submit', function(e){
    e.preventDefault(); 
  
    var name = $('#name').val();
    var phone = $('#phone').val();
    var subject = $('#subject').val();
    var alamat = $('#alamat').val();
    
    var currentTime = new Date();
    var realtime = currentTime.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    var message = "Nama Lengkap: " + name + "%0A" +
                  "No Hp: " + phone + "%0A" +
                  "Order : " + subject + "%0A" +
                  "Alamat: " + alamat;

  //  ganti no hp
    var whatsappURL = "https://api.whatsapp.com/send?phone=6287715553468&text=" + message;
    window.open(whatsappURL, '_blank');
  });
});