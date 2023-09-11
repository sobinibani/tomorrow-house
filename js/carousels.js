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

const usergalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  gutter: 4,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controls:false
});

const usergalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  gutter: 6,
  controls: true,
  edgePadding: 75,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
});
