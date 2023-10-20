$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        subject: $("#subject").val(),
        body: $("#body").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "process.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);

        if (!data.success) {
            if (data.errors.name) {
              $("#name-group").addClass("has-error");
              $("#name-group").append(
                '<div class="help-block">' + data.errors.name + "</div>"
              );
            }
    
            if (data.errors.email) {
              $("#email-group").addClass("has-error");
              $("#email-group").append(
                '<div class="help-block">' + data.errors.email + "</div>"
              );
            }
    
            if (data.errors.subject) {
              $("#superhero-group").addClass("has-error");
              $("#superhero-group").append(
                '<div class="help-block">' + data.errors.subject + "</div>"
              );
            }
          } else {
            $("form").html(
              '<div class="alert alert-success">' + data.message + "</div>"
            );
          }


      });
  
      event.preventDefault();
    });
  });