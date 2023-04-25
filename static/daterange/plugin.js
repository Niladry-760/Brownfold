
$(document).ready(function () {
  //this function will request a form from the server
  var ShowForm = function () {
    var btn = $(this)
    $.ajax({
      url: btn.attr('data-url'),
      type: 'get',
      dataType: 'json',
      beforeSend: function () {
        jQuery.noConflict()
        $('#modal-book-date').modal('show')
        $('#modal-book-date .modal-content').html('<div style="padding-top:3px; padding-bottom:3px"><div class="text-center">Please wait...</div><div class="sk-spinner sk-spinner-three-bounce"><div class="sk-bounce1"></div><div class="sk-bounce2"></div><div class="sk-bounce3"></div></div></div>')
      },
      error: function (xhr, error) {
        $('#modal-book-date .modal-content').html('<b>Request Status: </b>' + xhr.status + '<br /><b>Status Text: </b>' + xhr.statusText + '<br /><b>Response: </b>' + (xhr.responseText || "").substring(0, 256) + "...")
      },
      success: function (data) {
        if (data.is_error) {
          $('#modal-book-date .modal-content').html('<div class="text-center"><b>'+ data.error_message +'</b></div>')
        }else{
          $('#modal-book-date .modal-content').html(data.html_form)
        }
      }
    })
  }

  var SaveForm = function () {
    //this function will perform form operation
    var form = $(this)
    $.ajax({
      url: form.attr('data-url'),
      data: form.serialize(),
      type: form.attr('method'),
      dataType: 'json',
      error: function(xhr, error){
        $('#modal_div_alert').html('<b>Request Status: </b>' + xhr.status + '<br /><b>Status Text: </b>' + xhr.statusText + '<br /><b>Response: </b>' + xhr.responseText)
        $('#modal_div_alert').show()
      },
      success: function (data) {
        jQuery.noConflict()
        if(data.is_error){
          $('#modal-book-date .modal-content').html(data.html_form)
          $('#modal_div_alert').html(data.error_message)
          $('#modal_div_alert').show()
          $('.modal-backdrop').hide()
        }
        else{
          $('#modal-book-date').modal('hide')
          
          window.location.reload();
        }
      }
    })
    return false
  }

  // create
  // $('.show-form').click(ShowForm)
  // $('#modal-book-date').on('submit', '.create-form', SaveForm)

  // update
  $('.show-form-update').click(ShowForm)
  $('#modal-book-date').on('submit', '.update-form', SaveForm)
})
