function t199_showMenu(recid){var el=$('#rec'+recid);el.find('.t199__js__menu').each(function(){var $toggler=el.find('.t199__js__menu-toggler'),$menu=$(this),$body=$('body'),CLASS_MENU='t199__is__menu';$menu.find('.t199__menu-item').each(function(){var curUrl=$(this).attr('href');if(typeof curUrl!='undefined'&&curUrl.indexOf('#')>-1&&curUrl.substring(0,9)!='#submenu:'){$(this).on('click',function(e){$body.removeClass(CLASS_MENU)})}});$menu.find('.t199__menu-item-wrap .t-menusub__link-item').each(function(){var curUrl=$(this).attr('href');$(this).on('click',function(e){$body.removeClass(CLASS_MENU)})});$toggler.on('click',function(e){e.stopPropagation();e.preventDefault();$body.toggleClass(CLASS_MENU)});$(document).on('click',function(e){var clickedInsideMenu=$(e.target).hasClass('t199__js__menu')||$(e.target).parents('.t199__js__menu').length>0;if(!clickedInsideMenu){$body.removeClass(CLASS_MENU)}})});$('.t199__mmenu').bind('clickedAnchorInTooltipMenu',function(){$('body').removeClass('t199__is__menu')})}
function t199_positionHeader(recid){var el=$('#rec'+recid);var $header=el.find('.t199__js__header');var bgcolor=$header.css('background-color');var isScrolling=!1;var CLASS_ACTIVE='t199__is__active';function updateHeader(){isScrolling=!0;if($(window).scrollTop()>0){$header.addClass(CLASS_ACTIVE);$header.css('background-color','')}else{$header.removeClass(CLASS_ACTIVE);$header.css('background-color',bgcolor)}}
setInterval(function(){if(isScrolling){isScrolling=!1}},100);$(window).on('scroll',updateHeader);updateHeader()}
function t199_setPath(pageid){}
function t199_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=='/'){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=='/'){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=='/'){pathname=pathname.slice(1)}
if(pathname==''){pathname='/'}
$(".t199__menu a[href='"+url+"']").addClass('t-active');$(".t199__menu a[href='"+url+"/']").addClass('t-active');$(".t199__menu a[href='"+pathname+"']").addClass('t-active');$(".t199__menu a[href='/"+pathname+"']").addClass('t-active');$(".t199__menu a[href='"+pathname+"/']").addClass('t-active');$(".t199__menu a[href='/"+pathname+"/']").addClass('t-active')}
function t199_checkAnchorLinks(recid){if($(window).width()>=960){var t199_navLinks=$('#rec'+recid+" .t-menu__link-item:not(.tooltipstered)[href*='#']");if(t199_navLinks.length>0){t199_catchScroll(t199_navLinks)}}}
function t199_catchScroll(t199_navLinks){var t199_clickedSectionId=null,t199_sections=new Array(),t199_sectionIdTonavigationLink=[],t199_interval=100,t199_lastCall,t199_timeoutId;t199_navLinks=$(t199_navLinks.get().reverse());t199_navLinks.each(function(){var t199_cursection=t199_getSectionByHref($(this));if(typeof t199_cursection.attr('id')!='undefined'){t199_sections.push(t199_cursection)}
t199_sectionIdTonavigationLink[t199_cursection.attr('id')]=$(this)});t199_updateSectionsOffsets(t199_sections);$(window).bind('resize',t_throttle(function(){t199_updateSectionsOffsets(t199_sections)},200));$('.t199').bind('displayChanged',function(){t199_updateSectionsOffsets(t199_sections)});setInterval(function(){t199_updateSectionsOffsets(t199_sections)},5000);t199_highlightNavLinks(t199_navLinks,t199_sections,t199_sectionIdTonavigationLink,t199_clickedSectionId);t199_navLinks.click(function(){if(!$(this).hasClass('tooltipstered')){t199_navLinks.removeClass('t-active');t199_sectionIdTonavigationLink[t199_getSectionByHref($(this)).attr('id')].addClass('t-active');t199_clickedSectionId=t199_getSectionByHref($(this)).attr('id')}});$(window).scroll(function(){var t199_now=new Date().getTime();if(t199_lastCall&&t199_now<t199_lastCall+t199_interval){clearTimeout(t199_timeoutId);t199_timeoutId=setTimeout(function(){t199_lastCall=t199_now;t199_clickedSectionId=t199_highlightNavLinks(t199_navLinks,t199_sections,t199_sectionIdTonavigationLink,t199_clickedSectionId)},t199_interval-(t199_now-t199_lastCall))}else{t199_lastCall=t199_now;t199_clickedSectionId=t199_highlightNavLinks(t199_navLinks,t199_sections,t199_sectionIdTonavigationLink,t199_clickedSectionId)}})}
function t199_updateSectionsOffsets(sections){$(sections).each(function(){var t199_curSection=$(this);t199_curSection.attr('data-offset-top',t199_curSection.offset().top)})}
function t199_getSectionByHref(curlink){var t199_curLinkValue=curlink.attr('href').replace(/\s+/g,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t199_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t199_curLinkValue.substring(1)+"']")}}
function t199_highlightNavLinks(t199_navLinks,t199_sections,t199_sectionIdTonavigationLink,t199_clickedSectionId){var t199_scrollPosition=$(window).scrollTop(),t199_valueToReturn=t199_clickedSectionId;if(t199_sections.length!=0&&t199_clickedSectionId==null&&t199_sections[t199_sections.length-1].attr('data-offset-top')>t199_scrollPosition+300){t199_navLinks.removeClass('t-active');return null}
$(t199_sections).each(function(e){var t199_curSection=$(this),t199_sectionTop=t199_curSection.attr('data-offset-top'),t199_id=t199_curSection.attr('id'),t199_navLink=t199_sectionIdTonavigationLink[t199_id];if(t199_scrollPosition+300>=t199_sectionTop||(t199_sections[0].attr('id')==t199_id&&t199_scrollPosition>=$(document).height()-$(window).height())){if(t199_clickedSectionId==null&&!t199_navLink.hasClass('t-active')){t199_navLinks.removeClass('t-active');t199_navLink.addClass('t-active');t199_valueToReturn=null}else{if(t199_clickedSectionId!=null&&t199_id==t199_clickedSectionId){t199_valueToReturn=null}}
return!1}});return t199_valueToReturn}
function t486_setHeight(recid){var el=$('#rec'+recid);var window_width=$(window).width();if(window_width>980){el.find('.t486__blockimg').css('height',el.find('.t486__blockimg').innerWidth());var textwrapper=el.find('.t486__textwrapper');var blockimg=el.find('.t486__imgcontainer');textwrapper.css('height',blockimg.innerHeight())}else{el.find('.t486__blockimg').css('height',el.find('.t486__blockimg').width());el.find('.t486__textwrapper').css('height','auto')}}
function t698_fixcontentheight(id){var el=$("#rec"+id);var hcover=el.find(".t-cover").height();var hcontent=el.find("div[data-hook-content]").outerHeight();if(hcontent>300&&hcover<hcontent){var hcontent=hcontent+120;if(hcontent>1000){hcontent+=100}
console.log('auto correct cover height: '+hcontent);el.find(".t-cover").height(hcontent);el.find(".t-cover__filter").height(hcontent);el.find(".t-cover__carrier").height(hcontent);el.find(".t-cover__wrapper").height(hcontent);if($isMobile==!1){setTimeout(function(){var divvideo=el.find(".t-cover__carrier");if(divvideo.find('iframe').length>0){console.log('correct video from cover_fixcontentheight');setWidthHeightYoutubeVideo(divvideo,hcontent+'px')}},2000)}}}
function t698_onSuccess(t698_form){var t698_inputsWrapper=t698_form.find('.t-form__inputsbox');var t698_inputsHeight=t698_inputsWrapper.height();var t698_inputsOffset=t698_inputsWrapper.offset().top;var t698_inputsBottom=t698_inputsHeight+t698_inputsOffset;var t698_targetOffset=t698_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t698_target=t698_targetOffset-200}else{var t698_target=t698_targetOffset-100}
if(t698_targetOffset>$(window).scrollTop()||($(document).height()-t698_inputsBottom)<($(window).height()-100)){t698_inputsWrapper.addClass('t698__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t698_target},400);setTimeout(function(){t698_inputsWrapper.addClass('t698__inputsbox_hidden')},400)}
var successurl=t698_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}