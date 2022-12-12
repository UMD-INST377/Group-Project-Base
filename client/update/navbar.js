// ---------Responsive-navbar-active-animation-----------
function test() {
  const tabsNewAnim = $('#navbarSupportedContent');
  const selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  const activeItemNewAnim = tabsNewAnim.find('.active');

  function setHoriSelectorPositionAndDimensions(activeItem) {
    const activeWidthNewAnimHeight = activeItem.innerHeight();
    const activeWidthNewAnimWidth = activeItem.innerWidth();
    const itemPosNewAnimTop = activeItem.position();
    const itemPosNewAnimLeft = activeItem.position();
    console.log(activeItem, itemPosNewAnimTop, itemPosNewAnimLeft);

    $('.hori-selector').css({
      top: `${itemPosNewAnimTop.top}px`,
      left: `${itemPosNewAnimLeft.left}px`,
      height: `${activeWidthNewAnimHeight}px`,
      width: `${activeWidthNewAnimWidth}px`
    });
  }
  // Show the li elements before calling the setHoriSelectorPositionAndDimensions function
  $('#navbarSupportedContent ul li').show();

  // Call the setHoriSelectorPositionAndDimensions function when the page is first loaded
  setHoriSelectorPositionAndDimensions(activeItemNewAnim);

  $('#navbarSupportedContent').on('click', 'li', function(e) {
    $('#navbarSupportedContent ul li').removeClass('active');
    $(this).addClass('active');

    // Call the setHoriSelectorPositionAndDimensions function when an item is clicked
    setHoriSelectorPositionAndDimensions($(this));
  });
}


$(document).ready(() => {
  setTimeout(() => { test(); });
});
$(window).on('resize', () => {
  setTimeout(() => { test(); }, 500);
});
$('.navbar-toggler').click(() => {
  $('.navbar-collapse').slideToggle(300);
  setTimeout(() => { test(); });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(($) => {
  // Get current path and find target link
  let path = window.location.pathname.split('/').pop();

  // Account for home page with empty path
  if (path === '') {
    path = 'index.html';
  }

  const target = $(`#navbarSupportedContent ul li a[href="${path}"]`);
  // Add active class to target link
  target.parent().addClass('active');
});

// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });