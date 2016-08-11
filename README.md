# TOPPIKS (A Pinterest Clone)

Toppiks is the last of Free Code Camp's full-stack challenges. It is a "Pinterest clone" with user authentication and the ability of users to find and post favorite images and "toppiks/top piks" from around the web.

These are the "user stories" this app must fulfill:

* As an unauthenticated user, I can login with Twitter.
* As an authenticated user, I can link to images.
* As an authenticated user, I can delete images that I've linked to.
* As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to.
* As an unauthenticated user, I can browse other users' walls of images.
* As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image (can use jQuery broken image detection).

App is built on the MEAN Stack, with "pik" grid listings managed by [Masonry](http://masonry.desandro.com/) and Angular Masonry module. Authentication is with the Angular module [Satellizer](https://github.com/sahat/satellizer). The sans serif Muli font is used for site typography. Custom layout based on the popular Bootstrap library.