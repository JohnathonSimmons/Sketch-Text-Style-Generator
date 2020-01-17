# Sketch Text Style Generator
A script to quickly create multiple variants of a text style.

![Reference Image](/res/styleTree.png)

## Use
The script is provided as a single file so that it may be run from inside Sketch's script editor.
1. Edit the variable sections defined below
2. Copy and paste the script into the Sketch script editor
3. Use your new type styles

### File sections
The intent is for global variables to be specified first (fonts, colors, alignments), then the specification of individual styles.

The script file is organized into 5 sections.
The first 3 are definition of the global variables.
The 4th is style definition.
And 5th are the executables.  

#### Global Variables
##### `var colors`
An array of color objects to for your text styles to be generated in. By default all styles will use all colors. A color object should have a name and a hexValue, both provided as strings.

The order they are provided in will dictate the order they appear within the style tree.
```
var colors =
  [
    {
        name: 'Text',
        hexValue: '#424242',
    },
    ...
  ]
```

##### `var align`
An array of the alignment you want to support for your styles. By default Left, Center, and Right are used. To disable an alignment from being generated, set `display` to false, don't delete the alignment.
```
var align =
  [
      {
          type: 'Left',
          display: true,
          value: NSTextAlignmentLeft,
      },
      ...
  ]
```

##### `var fontFamilies`
Current support is provided for a single font family, with multi-support planned. Because of that, font support should be provided as a global variable. (Even if using a serif font, replace the string value after `sans`)

#### Style Definition
##### `var styleList`
An array of objects created which allows you to formulate the common elements of the style which you are wanting to generate.
Keep all fields, but set new values for the ones your styles need.


```
var styleList = [
  {
    name: 'h1',
    fontWeight: ['Light'],
    fontSize: 44,
    lineHeight: 50,
    characterSpacing: -.4,
    fontFamily: fontFamilies,
    color: colors,
    alignment: align,
    textTransform: null,
  },
  ...
]
```

#### 5. executables
The part to make it run, you don't need to edit anything from the executables.
