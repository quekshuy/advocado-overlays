advocado-overlays
=================

##Background

Advocado is revising its overlays. The objectives:

* mobile compatibility and responsiveness
* better aesthetic to improve conversion, i.e. make people want to share more and get the discount

As such we have come up with a set of designs that we would like to convert into actual HTML/CSS. 

An actual demo of Advocado can be found [here](http://www.goodnightmacaroon.co/collections/biggest-christmas-sale/products/pea-coat-double-breasted). Click on the "Click for 20% Discount" button.

##Updates

* __Initial commit__

Okay, I'll try to keep this concised, but it's supposed to log all the (correct/ completed) things that I've done.

Nearly lost all my work an hour ago.. But luckily dropbox had version histories, haha.

Anyway, below are the current updates:

-----


* __First Git Sync (22 Dec 4:30am):__


-----
Changed/ redid entire .CSS file into .SCSS file.

__Added more comments in .scss files as a guide__

-----
Corrected overlay size

Added :hover effect (Will not work on mobile though; we need some discussion on this) 

Corrected white space problem (I'd experimented quite a few solutions and decided vertical-align of display:table will be the best method)

Fixed text sizes and proportions (i.e. Make all of the text sizes more similar to the mockups)

Redid buttons (Logo is positioned better)

-----
__(In step 2)__

Created internal padding for textarea

Fixed position and size of logo in text area.

Fixed buttons

Created twitter layout (+colors +logos +buttons)

-----
* __NEXT TO DO:__

1. Redo media queries for different mobile sizes (Simulate different device viewports) and correct any display issues
2. Discuss changes that might have to be made from the design (A. Mobile :hover issues B. I removed a few weird paddings as seen in the design I'd received, for example the padding on the right in the textarea of step 2.)
3. Discuss how to move on to step 3 (Or improve on existing transitions). I suppose you guys already have a server set up for sharing purposes? Do I need to put in a caller for FB/TW APIs? Or how else should I make the HTML file? (Currently, the share button will submit the form into another file)
