
let cardItemsData = data; // Assuming cardItemsData is defined elsewhere
let currentIndex = parseInt(document.getElementById('desiredIdInput').value);

function renderSlideItem(item) {
  const slideItem = document.getElementById('product-slider');
  slideItem.innerHTML = `
    <div id="product-id-${item.id}" class="details">
      <span style="font-size: x-small;">${item.id}</span>
      <h3>${item.en}</h3>
      <h3 class="nihon" style="display:none">
        ${item.jp}
        <audio controls>
          <source src="${item.audio}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </h3>
      <a href="#" onclick="toggleMe(event, 'product-id-${item.id}')" style="color:red;">nihon...</a>
    </div>`
  ;}; 
// Event listener for "Go" button = works
document.querySelector('.goBtn').addEventListener('click', function() {
  
  currentIndex = parseInt(document.getElementById('desiredIdInput').value-1);
  renderSlideItem(data[currentIndex]);
});

// Event listener for next button ***
document.querySelector('.nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % data.length;
    renderSlideItem(data[currentIndex]);
});

// Event listener for prev button
document.querySelector('.prevBtn').addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  renderSlideItem(data[currentIndex]);
});


function toggleMe(event, itemId) {
  event.preventDefault();
  var description = document.getElementById(itemId).querySelector('.nihon');
  if (description.style.display === "none" || description.style.display === "") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}

let generateSlide = () => {
  const slideContainer = document.querySelector('.slider-container');
  slideContainer.innerHTML = `
    <div id="product-slider" class="item"></div>
  `;
  renderSlideItem(data[currentIndex]);
};

generateSlide();
renderSlideItem(data[0]); // Initial rendering of the first item


function array(data){
  const arrayTotal = document.getElementById('totalItemsCount');
  arrayTotal.innerHTML = `
  <span style="font-size: x-large;" id="totalItemsCount">&nbsp of ${data.length} &nbsp</span>`;
}; 
array(data); 