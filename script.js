function login()
{
  let u = username.value
  let p = pw.value
  if (u == "minhanh" && p == "241007")
  {
    window.open("home.html")
    document.getElementById(complier).style.display="block";
  }
}