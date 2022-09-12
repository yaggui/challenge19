let cart=[];
const components=['wd 120gb','wd 240gb','wd 250gb','wd 500gb','wd 2tb','pentium gold','core i3','core i5','core i7','core i9','asus prime','asrock','gigabyte','msi pro','asus rog','ddr4 8gb','ddr4 16gb','ddr5 16gb','ddr4 4gb','ddr5 8gb'];
const addComponent= (component) => {
  cart.push(component);
  alert(`Se agrego el componente: ${component}`)
}
const getCart= () => {
  if(cart.length!=0){
    alert("Los componentes del carrito son:\n"+ cart.join("\n"));
  }else{
    alert("Carrito Vacio");
  }
}
const searchComponentCart= () => {
  const componentUser=prompt("Ingresa el componente que deseas buscar en el carrito: ").toLowerCase();
  let componentCart;
  if(cart.includes(componentUser)){
    componentCart=cart.find(component=>component==componentUser);
    alert(`Componente encontrado: ${componentCart}`);
  }else{
    alert("No se encuentra en el carrito");
  }
}
const filterComponents= () => {
  const componentUser=prompt("Buscar Componente:").toLowerCase();
  const resultFilter=components.filter(component=>component.includes(componentUser));
  alert("Se encontro los siguientes componentes: \n"+resultFilter.join("\n"));
}
const deleteComponents= () => {
  const componentUser=prompt("Ingrese el componente a eliminar:").toLowerCase();
  const positionComponent=cart.indexOf(componentUser);
  let deleteCart;
  if(positionComponent!=-1){
    deleteCart=cart.splice(positionComponent,1);
    alert(`Componente ${deleteCart} esta Eliminado del carrito`);
  }else{
    alert("Componente no se pudo eliminar, no esta en carrito");
  }
}
const deleteComponentCart= () => {
  const inputComponent=prompt("Ingresa el componente a eliminar:").toLowerCase();
  if (cart.includes(inputComponent)) {
    cart=cart.filter(item=>item!=inputComponent);
    alert(`Componente ${inputComponent} esta Eliminado del carrito`);
  } else {
    alert("Componente no se pudo eliminar, no esta en carrito");
  }
}
