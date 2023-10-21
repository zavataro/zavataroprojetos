$(document).ready(function () {
    $("#name").on("keypress", function() {
      $(".help-name-text").remove();
    });

    $("#email").on("keypress", function() {
      $(".help-email-text").remove();
    });

    $("#subject").on("keypress", function() {
      $(".help-subject-text").remove();
    });

    $("#message").on("keypress", function() {
      $(".help-message-text").remove();
    });

    $("form").submit(function (event) {
      
      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        subject: $("#subject").val(),
        message: $("#message").val(),
      };

      $.ajax({
        type: "POST",
        url: "process.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        if (!data.success) {
            if (data.errors.name) {
              $("#help-name").addClass("has-error");
              $("#help-name").append(
                '<div class="help-name-text">' + data.errors.name + "</div>"
              );
            }
    
            if (data.errors.email) {
              $("#help-email").addClass("has-error");
              $("#help-email").append(
                '<div class="help-email-text">' + data.errors.email + "</div>"
              );
            }
    
            if (data.errors.subject) {
              $("#help-subject").addClass("has-error");
              $("#help-subject").append(
                '<div class="help-subject-text">' + data.errors.subject + "</div>"
              );
            }

            if (data.errors.message) {
              $("#help-message").addClass("has-error");
              $("#help-message").append(
                '<div class="help-message-text">' + data.errors.message + "</div>"
              );
            }

          } else {
              
              var id = "#janela1";
          
              var alturaTela = $(document).height();
              var larguraTela = $(window).width();
            
              //colocando o fundo preto
              $('#mascara').css({'width':larguraTela,'height':alturaTela});
              $('#mascara').fadeIn(1000); 
              $('#mascara').fadeTo("slow",0.8);
          
              var left = ($(window).width() /2) - ( $(id).width() / 2 );
              var top = ($(window).height() / 2) - ( $(id).height() / 2 );
            
              $(id).css({'top':top,'left':left});
              $(id).show();   
  
              $("#mascara").click( function(){
                  $(this).hide();
                  $(".window").hide();
              });
              
              $('.fechar').click(function(ev){
                  ev.preventDefault();
                  $("#mascara").hide();
                  $(".window").hide();
              });
            //$("form").html(
            //  '<div class="alert alert-success">' + data.message + "</div>"
            //);
          }


      });
  
      event.preventDefault();
    });
  });