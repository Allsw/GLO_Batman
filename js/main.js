$(document).ready(function () {
   let tabsInfoItem = $('.tabs_info_item');

   tabsInfoItem.on('click', function (event) {
      event.preventDefault();
      let activeContent = $(this).attr('href');
      $('.visible').toggleClass('visible');
      $(activeContent).toggleClass('visible');
      



      
      $('.tabs_info_active').toggleClass('tabs_info_active');
      $(this).toggleClass('tabs_info_active')

   });
});