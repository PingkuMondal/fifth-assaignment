function getElement(id){
    const element=document.getElementById(id);
    return element;
}


getElement('cart-box').addEventListener('click',function(e){
    // heart button
    if(e.target.className.includes('btn-heart')){

        const navHeart=getElement('nav-heart').innerText
        const totalHeart=Number(navHeart)+1;
        getElement('nav-heart').innerText=totalHeart;

     }

     //nav copy button

     if(e.target.className.includes('btn-copy')){
          const btnCopy=e.target;
          const titleCopy=btnCopy.parentNode.parentNode.children[1].innerText;
          const noCopy=btnCopy.parentNode.parentNode.children[3].innerText;
          const copyAlert=titleCopy+noCopy;


        alert(copyAlert);
        const navCopyBtn=getElement('nav-copy-btn').innerText;
        const totalCopy=Number(navCopyBtn)+1;
        getElement('nav-copy-btn').innerText=totalCopy;

       
        navigator.clipboard.writeText(noCopy)
        .then(function() {
            return(noCopy);
        })
        .catch(function(wrong) {
            return(wrong);
        });

        }

        //nav call button
        if(e.target.className.includes('btn-call')){
            const btnCall=e.target;
          const titleCall=btnCall.parentNode.parentNode.children[1].innerText;
          const noCall=btnCall.parentNode.parentNode.children[3].innerText;
          const callAlert=titleCall+noCall;


        alert('📞'+callAlert);
          
          const navCallBtn=Number(getElement('nav-call-btn').innerText);
          if(navCallBtn>=20 ){
            
        
        const totalCall=navCallBtn-20;
        getElement('nav-call-btn').innerText=totalCall;

        const cardContainer=getElement('card-aside-container');
        let time=new Date();
        // time.setHours(16,10,0);
        let timeOnly = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const newCart=document.createElement('div');
        newCart.innerHTML=`
        <div class="grid grid-cols-3 justify-between items-center my-2 bg-gray-100/50 px-1 py-2 rounded-md">
                        <div class="col-span-2">
                            <h1 class="hind font-bold text-md mt-4 text-gray-900 ">${titleCall}</h1>
                            <p class="hind font-normal text-sm ">${noCall}</p>
                        </div>
                        <div class="hind font-normal text-sm col-span-1">
                            <h1>${timeOnly}</h1>
                        </div>
        `
        cardContainer.append(newCart);



        }
        else{
            alert('❌You do not have enough coins.You need at least 20 coins to make a call');
        }
    }


       
})

getElement('btn-clean').addEventListener('click',function(e){
    e.preventDefault();
    const clear = getElement('card-aside-container');
    clear.innerHTML='';


})

     let scrolledToHistory=false;

getElement('history-icon-btn').addEventListener('click',function(e){
    e.preventDefault();

    const asidePart=getElement('aside-btn');
   
    if(!scrolledToHistory){
    asidePart.scrollIntoView({
      behavior: 'smooth', 
      block: 'start'})
      scrolledToHistory=true;
    }
    else{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    scrolledToHistory=false;
    }
})

getElement('logo-id').addEventListener('click',function(e){
  e.preventDefault();
  const banner=getElement('banner-id');
   banner.scrollIntoView({
      behavior: 'smooth', 
      block: 'start'})
})


