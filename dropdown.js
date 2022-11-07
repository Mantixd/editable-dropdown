
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("option");
	var count = 1;
  for (i = 1; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "block";
      count++;
    } else {
      a[i].style.display = "none";
    }
  }
  if(count > 0){
    var dd = $( "#myDropdown" );
    dd.show();
    dd[0].size = count;
  }
}

$("#myDropdown option").click(function() {
  var dd = $( "#myDropdown" );
    dd.show();
    dd[0].size = 0;
    $("#myInput").val($( "#myDropdown option:selected" ).val());
});

$("html").click(function(){
    var dd = $( "#myDropdown" );
    dd.show();
    dd[0].size = 0;
});
