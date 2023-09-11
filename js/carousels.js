const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  navAsThumbnails: true,
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true
});

const usergallery = tns({
  container: '.user-gallery .slider-list',
  navContainer: '.user-gallery .thumbnail-list',
  controlsContainer: '.user-gallery-controls',
  gutter: 4,
  controls: false,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    760: {
      gutter: 6,
      edgePadding: 75,
      controls: true,
    }
  }
});
