(() => {


// store gallery element inside gallery var
      let gallery = document.querySelector("#gallery");

// store modal element inside modal var
      let modal = document.querySelector("#modal");



// find and walks through img elements inside gallery
      gallery.querySelectorAll('img').forEach((imgInsideGalerry) => {

// add a click event in current img inside walks function forEach
      imgInsideGalerry.addEventListener('click', (event) => {

// here, the click event was catch
// change display from none to flex and modal show up
      modal.style.display = 'flex';



// add a new element child inside modal
// the element child is a clone of clicked element,      
// in this case an img
      let imgInsideModal = event.target.cloneNode(true);
      modal.appendChild(imgInsideModal)


// but img inside modal have 0 width defined in CSS rule
// go and calculate allowed img width
  
// modal ever have 100% of screen width
      let modalWidth = modal.clientWidth;

// get original width of image
      let imgNaturalWidth = event.target.naturalWidth;

// initialize max width of img 
// inside of modal with modal total width
      let allowedWidth = modalWidth;

// if original width is smaller than total screen width
// we can set the allowed width equals img natural width
// then/else the allowed width is already initialized with
// screen total width in line 33
      if (imgNaturalWidth < modalWidth) {
        allowedWidth = imgNaturalWidth;
      }
      
// modal ever have 100% of screen height
      let modalHeight = modal.clientHeight;


// with allowd width, we need check if with this width
// the final img height is not greater than modal height
// the final width is 100% or X of original width
// we need discover this percent value, for discover final height
// based in this percent value
// with "rule of three" we can discover it
// where naturalWidth is 100% and allowedWidth is X percent
      let widthPercent = allowedWidth * 100 / imgNaturalWidth;



// get original height of img
       let imgNaturalHeight = event.target.naturalHeight;


       let finalHeight = imgNaturalHeight * widthPercent / 100;
 
// if finalHeight is greater than screen total height
// then we need to recalculate allowedWidth 
// based in max allowed height using same logic above
       if (finalHeight > modalHeight) {
         let maxHeightPercentage = modalHeight * 100 / imgNaturalHeight;
         allowedWidth = imgNaturalWidth * maxHeightPercentage / 100;
      }
console.log (imgNaturalWidth, allowedWidth, widthPercent, finalHeight)

    
 // set width to image
       imgInsideModal.style.width = allowedWidth + "px"; 
 
 // disable page scroll 
       document.querySelector('body').classList.add('noscroll'); 

});

});


// add click event in entire area of modal
       modal.addEventListener('click', (event) => {
// if clicked element is a div
// (actualy we have div#modal and img only)
// warning, if you add another div inside #modal
// this div can pass by condition below
    if (event.target.nodeName === 'DIV') {
      // expected event target ir #modal
      // walks through all childs and remove it
      Array.from(event.target.children).forEach((child) => {
        event.target.removeChild(child);
      });
      // hide #modal div
      modal.style.display = 'none';
      // enable page scroll 
      document.querySelector('body').classList.remove('noscroll'); 
    }
  });
  
})();