# kei-fire-trucks
A repository for documenting japanese Kei class fire engines and the website to show them off: [https://keifiretrucks.com](https://keifiretrucks.com)

## What is a Kei Fire Truck?
Kei fire trucks (軽消防車, kei shōbōsha) are compact fire suppression vehicles built to fall under Japan's kei-class (軽自動車), typically vehicles with engine displacements of 660cc or less.

## Who can submit data to this repo?
Anyone with information for kei fire trucks and submit data, photos, and other information to this repo provided that the information is free to share.

If you need help submitting data or are not familiar with github, you can open an issue to get help or contact @hon1nbo (the repository owner) through any of the means on [their webpage](https://hon1nbo.com)


# Repository structure

 - content/ ← Markdown source (submit vehicle edits here)
 	- index.md
 	- about.md
 	- licenses.md
	- vehicles/
		- index.md
		- subaru-sambar/ ← Full specs, gallery links, related parts as an example
			- index.md
			- gallery-exterior.md
			- gallery-equipment.md
		- ... (other vehicles)/
	- parts-and-accessories/
		- portable-pumps.md
		- fire-suppression-nozzles.md

- src/ ← Website engine (templates + data)
	- _includes/layouts/  ←  base, page, vehicle, gallery, parts (.njk)
	- _data/ ← site.json, navigation.json

- style/ 
- media/ ← Drop images here (served as /media/...)
- cad/ ← Empty, reserved for sharing CAD files of parts of fabricating replacements or modeling

### Contributing

  - Add a vehicle: copy content/vehicles/subaru-sambar/ as a template, add an entry to `src/_data/navigation.json` and the two listing pages
  - Add a part: copy any parts page, fill in the frontmatter fields
  - Add images: drop files into `media/vehicles/\<slug\>/`, then add them to the array in the gallery frontmatter
  - Change top-level nav in `src/_data/navigation.json`


# License
* ***Software*** is licensed under AGPLv3
* ***Media***, including but not limited to submitted photos, page text, and user submitted content, is licensed under CC BY-NC-SA

# AI Usage
Using something like Claude to help format data you have compiled or submit a code improvement is fine, but please please please check the output.  
  
We do *NOT* allow generative AI media assets for the vehicles and associated parts. All specifications, images, and CAD diagrams must be correct and verified.