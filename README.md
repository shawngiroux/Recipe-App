# Recipe App

This is mostly a generic CRUD app with the intention of allowing me to play around more with Laravel as an API, and experimenting with better use of components in ReactJS/Tailwind CSS.  It's also a convenient way for me to store my recipes locally!

![Screenshot from 2021-04-02 09-40-43](https://user-images.githubusercontent.com/29616627/113420821-026de280-9398-11eb-902a-7c0c79993a20.png)

## Warning
Please do not use this project to host anything publicly.  The API does not follow an oauth flow, image upload is not scanned for malware, there are no user logins... basically, security is at a bare minimum.  It's really meant for learning and hosting for yourself.

## Running
In the root of this project, run `npm install` and `composer install` to download and build all required packages.
I've personally been running the project using Laravel's sail with `./vendor/bin/sail up`

## Future Features
1) Edit existing recipes
2) Make recipes searchable through ingredients
3) Make recipes selectable and display a "shopping list" of ingredients you will need to purchase
