const sectionHeaderIconButton = document.querySelector(
    '.product-shipment .product-section-header.sm-only'
);

sectionHeaderIconButton.addEventListener('click',function(){
    this.parentNode.classList.add('is-open')
})