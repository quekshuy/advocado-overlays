advocado-overlays
=================

##Background

Advocado is revising its overlays. The objectives:

* mobile compatibility and responsiveness
* better aesthetic to improve conversion, i.e. make people want to share more and get the discount

As such we have come up with a set of designs that we would like to convert into actual HTML/CSS. 

An actual demo of Advocado can be found [here](http://www.goodnightmacaroon.co/collections/biggest-christmas-sale/products/pea-coat-double-breasted). Click on the "Click for 20% Discount" button.

##Guidelines

The below are some things we learnt that you may already know. If you do already know all this, please bear with me:

* Widgets are not as straightforward to write as normal websites. They don't exist on their own and may require libraries that conflict with those existing on the websites they are being displayed on. 

* Also, widgets have to be very small and compact. They have to minimise on libraries because that will slow down loading.

* We need to aim to be responsive, i.e. if we foresee that the user will have to wait after clicking a button, we will need to ensure that they are aware that something is happening in the background. You can see [this page](http://lab.hakim.se/ladda/) as an example. 

##Style Guide

* __ALL__ CSS class names that we specify should be preceded with "advoc-". This prevents conflicts with existing classes on the store.

* Do a CSS reset before specifying the various CSS rules for your custom components.

* Read up a bit on [OOCSS](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/) and try as far as possible to use SASS. This may take a while so I'm OK that you pick up SASS slowly.


##Process

* __Github & Git__

  We will be using git and github to manage code and conduct progress reviews.

* __Pull requests as code review__

  As part of this mentorship, I hope to get to see frequent pull requests. In the 1st week, I hope to be able to see a pull request every 1-2 days so we can quickly rectify style issues and other tiny stuff. I don't mind if you're not committing and pushing large amounts of code; more importantly I just want to see something.

  We can ease up on this once we agree you are on firmer ground. 

* __Screenhero__

  I'm not going to be very responsive all the way until after 10th Dec 2013. But I am free to Screenhero in the late evenings.

* __IM (Google Hangouts/Line/iMessage)__

  Let's pick a tool for IM, so you can reach me easily. I am also OK with iMessage if that's your preferred way.  Hangouts allows for video chats and screen-sharing, which is quite desirable as well.

##Getting Started

1.  Fork the repository and clone it to a folder (best if it's in a public Dropbox folder so I can load it in a browser to see how it looks).

2. Start creating/updating HTML and CSS files (I'll probably upload a skeleton in a while), committing code and pushing them to your fork. Try to replicate what's in the PDFs.

3. Submit a pull request via github's interface. I'll take a look and comment on it.  I can also view it on Dropbox.

4. Discuss via IM and the various tools.

5. Step 2 again.

##Presentation

* As mentioned above, let's view your work via a public folder in Dropbox and Github (pull requests).

##Miscellaneous

* Feel free to experiment with technologies as you are writing. Go ahead and play with tools like Grunt to do CSS and HTML minification. It'll take some time to pick up but it's definitely useful. 



