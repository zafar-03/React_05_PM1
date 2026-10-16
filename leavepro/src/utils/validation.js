export function Protectedroute({ children }){
  if (!localStorage.getItem("token")){
    location.href = "/login";
    return;
  }
    return children;
}