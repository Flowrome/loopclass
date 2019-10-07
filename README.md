# LOOPCLASS
## Description:
This package will generate a scss/css file that includes some looped classes by a configuration JSON.

## Installation
```
npm i -g loopclass
```

## Usage 
```
loopclass
```

## Examples
You can configure a custom JSON that will be merged with the default one, that is:
```json
{
  "cssClasses": [
    { "class": "height-percentage", "property": "height", "unit": "%" },
    { "class": "height-vh", "property": "height", "unit": "vh" },
    { "class": "width-percentage", "property": "width", "unit": "%" },
    { "class": "width-vw", "property": "width", "unit": "vw" },
    { "class": "mt", "property": "margin-top", "unit": "px" },
    { "class": "mb", "property": "margin-bottom", "unit": "px" },
    { "class": "mr", "property": "margin-right", "unit": "px" },
    { "class": "ml", "property": "margin-left", "unit": "px" },
    { "class": "mt-per", "property": "margin-top", "unit": "%" },
    { "class": "mb-per", "property": "margin-bottom", "unit": "%" },
    { "class": "mr-per", "property": "margin-right", "unit": "%" },
    { "class": "ml-per", "property": "margin-left", "unit": "%" },
    { "class": "pt", "property": "padding-top", "unit": "px" },
    { "class": "pb", "property": "padding-bottom", "unit": "px" },
    { "class": "pr", "property": "padding-right", "unit": "px" },
    { "class": "pl", "property": "padding-left", "unit": "px" },
    { "class": "pt-per", "property": "padding-top", "unit": "%" },
    { "class": "pb-per", "property": "padding-bottom", "unit": "%" },
    { "class": "pr-per", "property": "padding-right", "unit": "%" },
    { "class": "pl-per", "property": "padding-left", "unit": "%" }
  ],
  "customDimensions": [1, 2, 3, 4],
  "defaultDimensions": [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
}
```
and it will output this file **.scss** file
```scss
$map-loop: (
height-per: (classname:'height-per', unit:'%', property:'height', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
height-vh: (classname:'height-vh', unit:'vh', property:'height', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
width-per: (classname:'width-per', unit:'%', property:'width', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
width-vw: (classname:'width-vw', unit:'vw', property:'width', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
mt: (classname:'mt', unit:'px', property:'margin-top', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
mb: (classname:'mb', unit:'px', property:'margin-bottom', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
mr: (classname:'mr', unit:'px', property:'margin-right', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
ml: (classname:'ml', unit:'px', property:'margin-left', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
mt-per: (classname:'mt-per', unit:'%', property:'margin-top', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
mb-per: (classname:'mb-per', unit:'%', property:'margin-bottom', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
mr-per: (classname:'mr-per', unit:'%', property:'margin-right', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
ml-per: (classname:'ml-per', unit:'%', property:'margin-left', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
pt: (classname:'pt', unit:'px', property:'padding-top', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
pb: (classname:'pb', unit:'px', property:'padding-bottom', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
pr: (classname:'pr', unit:'px', property:'padding-right', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
pl: (classname:'pl', unit:'px', property:'padding-left', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
pt-per: (classname:'pt-per', unit:'%', property:'padding-top', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
pb-per: (classname:'pb-per', unit:'%', property:'padding-bottom', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
pr-per: (classname:'pr-per', unit:'%', property:'padding-right', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
pl-per: (classname:'pl-per', unit:'%', property:'padding-left', dimensions:(1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)),
);


@each $instance, $class in $map-loop {
  $classname: map-get($class, classname);
  $unit: map-get($class, unit);
  $property: map-get($class, property);
  @each $dim in map-get($class, dimensions) {
    .#{$classname}-#{$dim} {
        #{$property}: #{$dim} + #{$unit};
    }
  }
}
```
the classes can be used as
```html
<div class="height-per-70"></div>
```
this one will be a div with **70%** height

## Configure custom JSON
you can set your custom JSON using:
```
loopclass:fns -path=/absolute/path/to/file.json
```
keep in mind that you can override any default configuration, so use the same structure as the default JSON

## Output

this package will output **loop-classes.scss/css** file in your current directory

