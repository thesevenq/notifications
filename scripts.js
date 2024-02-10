$(document).ready(function(){
  
  var documentWidth = document.documentElement.clientWidth;
  var documentHeight = document.documentElement.clientHeight;
  var curTask = 0;
  var processed = []

  
  var notifyTimer = `<div class="notify-timer">
  <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="5" fill="none" stroke="white" stroke-opacity="0.17" stroke-width="1.5"/>
    <circle class="progressCircle" cx="7.5" cy="7.5" r="5" fill="none" stroke="#00F8B9" stroke-width="1.5"
    stroke-dasharray="31.41592653589793" stroke-dashoffset="31.41592653589793"/>
  </svg>
</div>`;


var infoSvg = `<svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_26_42)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5063 5.05596C20.5026 5.29493 19.6026 6.22284 19.4021 7.22533C19.3214 7.62864 19.3219 7.92708 19.4041 8.33959C19.5107 8.87526 19.6999 9.22496 20.13 9.6808C20.7327 10.3197 21.3068 10.5699 22.1758 10.5719C22.8782 10.5736 23.3588 10.4198 23.8784 10.0269C24.4167 9.61992 24.8038 9.04326 24.9352 8.45248C25.0214 8.06502 25.0216 7.47208 24.9357 7.12257C24.7156 6.22744 23.971 5.41542 23.0999 5.12078C22.7197 4.99222 21.9121 4.95935 21.5063 5.05596ZM18.701 13.1707C18.2419 13.2502 17.6846 13.4068 17.0384 13.638C16.4748 13.8396 15.3889 14.2767 15.3385 14.3222C15.3038 14.3535 15.0022 15.5483 15 15.6632C14.9994 15.6963 15.1992 15.6478 15.5196 15.5371C16.1823 15.3081 16.6524 15.2429 17.1861 15.306C17.8848 15.3887 18.1547 15.5991 18.2948 16.1704C18.4828 16.9374 18.3594 17.6326 17.3872 21.2846C16.6197 24.1672 16.5031 24.759 16.5048 25.7625C16.5065 26.7104 16.7412 27.3403 17.3185 27.9458C18.0239 28.6858 18.8853 29 20.209 29C21.2277 29 21.8493 28.8379 23.6009 28.1153C24.0346 27.9364 24.3948 27.7826 24.4013 27.7735C24.4306 27.7324 24.7 26.4586 24.6832 26.4407C24.6727 26.4296 24.5164 26.4743 24.3358 26.5399C23.0844 26.9946 21.8975 26.9053 21.5006 26.3266C21.3896 26.1648 21.2849 25.7045 21.2849 25.3784C21.2849 25.0628 21.3828 24.3351 21.5049 23.7419C21.5519 23.5143 21.8777 22.2456 22.229 20.9227C23.0598 17.7947 23.0676 17.7567 23.1229 16.5944C23.1455 16.12 23.136 15.9013 23.08 15.6094C22.8446 14.3814 21.9626 13.4996 20.6873 13.2173C20.1966 13.1086 19.1953 13.0851 18.701 13.1707Z" fill="#00F8B9"/>
</g>
<defs>
<filter id="filter0_d_26_42" x="6" y="0" width="28" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_42"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_42" result="shape"/>
</filter>
</defs>
</svg>
`;

var errorSvg = `<svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
 
<g filter="url(#filter2_d_26_42)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1043 7.02411C16.0364 7.32608 13.3272 8.95014 11.6327 11.5031C11.2665 12.0548 10.7561 13.08 10.55 13.678C10.156 14.8207 9.99881 15.7717 10 17.0043C10.0016 18.652 10.3047 19.9654 11.0188 21.4181C11.9976 23.4095 13.5733 24.9922 15.5392 25.9589C17.0375 26.6956 18.3419 27 20.0002 27C21.6466 27 22.9665 26.6954 24.4158 25.9809C26.4414 24.9825 27.984 23.4405 28.9808 21.4181C29.6956 19.9679 30 18.6495 30 17.0043C30 15.3689 29.6989 14.0652 28.9805 12.5905C27.872 10.3148 25.8395 8.48526 23.4346 7.59841C22.886 7.3961 22.0311 7.18202 21.4081 7.09097C20.8381 7.00769 19.6281 6.97259 19.1043 7.02411ZM17.0352 12.9143C17.1785 12.9531 17.4302 13.184 18.603 14.3525L20.0002 15.7445L21.3974 14.3522C22.6423 13.1118 22.8154 12.9544 22.9848 12.9098C23.6732 12.7283 24.3117 13.4021 24.0764 14.0618C24.0197 14.2208 23.7725 14.4892 22.6339 15.6287L21.2599 17.0037L22.6531 18.4006C23.8943 19.6452 24.0517 19.8183 24.0964 19.9877C24.2725 20.6549 23.6524 21.2748 22.9848 21.0988C22.8154 21.0541 22.6423 20.8968 21.3974 19.6564L20.0002 18.2641L18.6244 19.6336C17.1276 21.1235 17.1254 21.1251 16.6876 21.0888C16.108 21.0408 15.7428 20.4209 15.9702 19.8708C16.0141 19.7645 16.4811 19.2665 17.3881 18.3586L18.7406 17.0049L17.3474 15.608C16.1061 14.3634 15.9487 14.1903 15.9041 14.0209C15.7793 13.548 16.0604 13.0529 16.5345 12.9102C16.7005 12.8602 16.8393 12.8613 17.0352 12.9143Z" fill="#B94141"/>
</g>
<defs>
 
 
<filter id="filter2_d_26_42" x="1" y="2" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.72549 0 0 0 0 0.254902 0 0 0 0 0.254902 0 0 0 0.55 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_42"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_42" result="shape"/>
</filter>
</defs>
</svg>
`;

var warningSvg = `<svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
 
<g filter="url(#filter1_d_26_42)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.294 7.06187C18.9504 7.13362 18.4901 7.32057 18.1992 7.50658C17.882 7.70942 17.4635 8.11342 17.2649 8.40865C16.966 8.85303 9.37917 21.3864 9.28151 21.5973C8.45647 23.3785 9.5177 25.4306 11.5154 25.9171C11.851 25.9988 11.9658 26 19.9742 26C28.7082 26 28.3454 26.0083 28.9196 25.7942C29.6715 25.5139 30.3633 24.8808 30.7251 24.1417C30.9341 23.7146 30.9986 23.411 31 22.8466C31.0014 22.2828 30.9383 21.9854 30.7264 21.5566C30.5779 21.2559 22.9474 8.66608 22.7196 8.34586C22.3722 7.85734 21.793 7.41558 21.2214 7.20324C20.6765 7.00081 19.8701 6.94163 19.294 7.06187ZM20.527 12.7042C20.9804 12.9048 21.2184 13.3144 21.2157 13.8897C21.2148 14.0746 21.1407 15.3962 21.051 16.8265C20.8759 19.618 20.8852 19.5521 20.6298 19.7832C20.1685 20.2004 19.3782 20.0322 19.1534 19.4689C19.1287 19.4072 19.0512 18.3958 18.9812 17.2214C18.9111 16.0469 18.8322 14.8096 18.8057 14.4718C18.7397 13.6274 18.7718 13.4353 19.0403 13.0688C19.3648 12.6259 19.9984 12.4705 20.527 12.7042ZM20.512 20.9674C20.9472 21.1614 21.1845 21.5333 21.1878 22.0265C21.1896 22.294 21.1726 22.3675 21.0653 22.5552C20.7468 23.1124 20.0551 23.3209 19.4669 23.0371C18.5845 22.6113 18.5969 21.4115 19.4883 20.9662C19.761 20.83 20.2049 20.8305 20.512 20.9674Z" fill="#B99F41"/>
</g>
<filter id="filter1_d_26_42" x="0" y="2" width="40" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.72549 0 0 0 0 0.623529 0 0 0 0 0.254902 0 0 0 0.55 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_42"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_42" result="shape"/>
</filter>
 
</defs>
</svg>
`;


  window.addEventListener('message', function(event){

    var item = event.data;
    if (item.runProgress === true) {

      var message = "<span>" + item.textsent + "</span>";
      var fadetimer = item.fadesent
      var element
      $('#colorsent' + item.colorsent).css('display', 'none');
      if (item.colorsent == 'error') {
        element = $('<div id="colorsent' + item.colorsent + '" class="notification-bg red" style="display:none" data-total-time="' + fadetimer + '"><i class="icon">' + errorSvg + "</i>" + message + notifyTimer + '</div>'); 
      } else if (item.colorsent == 'warning') {
        element = $('<div id="colorsent' + item.colorsent + '" class="notification-bg taxi" style="display:none" data-total-time="' + fadetimer + '"><i class="icon">' + warningSvg + "</i>" + message + notifyTimer + '</div>');
      } else if (item.colorsent == 'warning') {
        element = $('<div id="colorsent' + item.colorsent + '" class="notification-bg medical" style="display:none" data-total-time="' + fadetimer + '"><i class="icon">' + warningSvg + "</i>" + message + notifyTimer + '</div>');
      } else {
        element = $('<div id="colorsent' + item.colorsent + '" class="notification-bg normal" style="display:none" data-total-time="' + fadetimer + '"><i class="icon">' + infoSvg + "</i>" + message + notifyTimer + '</div>'); 
      }
 
      $('.notify-wrap').prepend(element);
      $(element).fadeIn(500);

      const notif = document.querySelector('.notification-bg');
       startTimer(element);
       setTimeout(function(){
        $(element).fadeOut(500, function(){
          $(element).remove();
        });
       }, fadetimer);
    }
  });

});

// Function to update the progress
function updateProgress(e, progress) {
  // Calculate the dashoffset value
  const circumference = 2 * Math.PI * 5; // Assuming radius is 5
  const offset = (1 - (progress / 100)) * circumference;
  
  var c = $(e).find('.progressCircle');
  // Update the stroke-dashoffset to simulate fill
  c.attr('stroke-dashoffset', offset);
}

// Start the timer
function startTimer(notification) {
 
  var notif = $(notification);
 
  
  const totalTime = parseInt($(notification).attr('data-total-time'), 10);
  let remainingTime = totalTime;
  const intervalTime = 100; // Update every 100 ms
  
  const interval = setInterval(() => {
    remainingTime -= intervalTime; // Subtract the interval time from the remaining time
    
    // Calculate the progress as a percentage
    const progress = ((totalTime - remainingTime) / totalTime) * 100;
    
    // Update the circle progress
    updateProgress(notification, 100 - progress); // Subtract progress from 100 to unfill the circle

    if (remainingTime <= 0) {
      clearInterval(interval); // Stop the timer when the remaining time reaches zero
      updateProgress(notification, 0); // Ensure the circle is fully unfilled
    }
  }, intervalTime);
}
