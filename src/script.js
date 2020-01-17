
var colors =
  [
        // Order these in the sort order you would expect in Sketch's Menu

        {
            name: 'Text',
            hexValue: '#424242',
        },
        {
            name: 'Subtle',
            hexValue: '#909CAE',
        },
        {
            name: 'Grey Blue',
            hexValue: '#545F7A',
        },
        {
            name: 'Blue',
            hexValue: '#0071E9',
        },
        {
            name: 'Reverse',
            hexValue: '#FFFFFF',
        },
        {
            name: 'Green',
            hexValue: '#66BC15',
        },
        {
            name: 'Red',
            hexValue: '#E74517',
        },
        {
            name: 'Yellow',
            hexValue: '#FF9B03',
        },

    ];

var align =
  [

      // Order these in sort order you would expect in Sketch's Menu
      // If there is an alignment you won't want to generate, you can set it to false

      {
          type: 'Left',
          display: true,
          value: NSTextAlignmentLeft,
      },
      {
          type: 'Center',
          display: true,
          value: NSTextAlignmentCenter,
      },
      {
          type: 'Right',
          display: true,
          value: NSTextAlignmentRight,
      },
      {
          type: 'Justified',
          display: false,
          value: NSTextAlignmentJustified
      }
  ];

var fontFamilies = {

    // Currently only supporting 1 font family, change the family for your styles

    sans: 'Roboto',
}

var styleList =
  [

    // Create a new object in the array for a new style
    // name, will be the first level identifier from the text style menu
    // fontFamily, updates from the fontFamilies var, update there
    // fontWeight, needs to match a weight selection supplied by the font, check the strings from the dropdown in sketch for the correct name
    // fontSize, the font size for the style
    // lineHeight, the lineHeight for the style
    // characterSpacing, the character spacing for the style
    // color, by default is pulling from the color array specified above
    // align, by default is pulling from the align array specified above
    // textTransform, currently unsupported, leave as null


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
    {
      name: 'h2',
      fontWeight: ['Light'],
      fontSize: 32,
      lineHeight: 36,
      characterSpacing: -.4,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
    {
      name: 'h3',
      fontWeight: ['Light', 'Bold'],
      fontSize: 24,
      lineHeight: 28,
      characterSpacing: -.3,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
    {
      name: 'h4',
      fontWeight: ['Light', 'Bold'],
      fontSize: 20,
      lineHeight: 22,
      characterSpacing: 0,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
    {
      name: 'h5',
      fontWeight: ['Regular', 'Bold'],
      fontSize: 18,
      lineHeight: 20,
      characterSpacing: 0,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
    {
      name: 'h6',
      fontWeight: ['Medium', 'Bold'],
      fontSize: 16,
      lineHeight: 20,
      characterSpacing: 0,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
    {
      name: 'Label',
      fontWeight: ['Medium', 'Black'],
      fontSize: 12,
      lineHeight: 15,
      characterSpacing: .55,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
    {
      name: 'Paragraph',
      fontWeight: ['Regular', 'Bold'],
      fontSize: 16,
      lineHeight: 24,
      characterSpacing: 0,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
    {
      name: 'Paragraph Small',
      fontWeight: ['Regular', 'Bold'],
      fontSize: 14,
      lineHeight: 21,
      characterSpacing: 0,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
    {
      name: 'Caption',
      fontWeight: ['Regular', 'Bold'],
      fontSize: 12,
      lineHeight: 17,
      characterSpacing: 0,
      fontFamily: fontFamilies,
      color: colors,
      alignment: align,
      textTransform: null,
    },
  ]










// ---------------------------------------------------
//
// IMPORTANT!!!!!!!!!!!!!!!!
// DON'T EDIT PAST THIS POINT
//
// ---------------------------------------------------










function convertHex(c, opacity){
    hex = c.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = [ r/255 , g/255 , b/255 , opacity/100 ];
    return result;
}


// The format will follow: Name / Font Weight / Color / Alignment

var styleCounter = 0;

// Start the Name loop

for(n=0; n<styleList.length; n++){

  var styleObject = styleList[n];

  var styleName = styleObject.name;

  // DEBUG:
  // console.log(styleName);
  // console.log(typeObjects[n].fontWeight.length);



  // Start the Weight Loop

  for(w = 0; w <= (styleObject.fontWeight.length - 1); w++){

    var styleFontWeight = styleObject.fontWeight[w];



    // Start the Color Loop

    for(c=0; c < styleObject.color.length; c++){

      var styleColorName = styleObject.color[c].name;
      var styleColorValue = styleObject.color[c].hexValue;

      var styleColorTransform = convertHex(styleColorValue, 100);

      var styleColorTransformed = NSColor.colorWithRed_green_blue_alpha(styleColorTransform[0], styleColorTransform[1],styleColorTransform[2],styleColorTransform[3]);

      // DEBUG:
      // console.log(styleColorName, styleColorTransformed);


      // Start Alignment Loop

      for(a = 0; a < styleObject.alignment.length; a++){


        var styleAlignName = styleObject.alignment[a].type;
        var styleAlignValue = styleObject.alignment[a].value;
        var styleAlignDisplay = styleObject.alignment[a].display;

        // DEBUG:
        // console.log(styleAlignValue);


            if(styleAlignDisplay == true) {



                // Create layer
                var layer = MSTextLayer.alloc().init();


                // Display Attributes
                var displayName = styleName + " " + styleFontWeight + " " + styleColorName + " " + styleAlignName;
                layer.stringValue = styleObject.name;
                layer.name = displayName + ' ' + styleAlignName;
                layer.frame().x = (100 * n);
                layer.frame().y = (50 * w);


                // Style Attributes
                layer.changeTextColorTo(styleColorTransformed);

                // Update fontfamily here for family loop

                var styleFontName = fontFamilies.sans
                var styleFontComputed = fontFamilies.sans + "-" + styleFontWeight


                layer.setFont(NSFont.fontWithName_size(styleFontComputed, styleObject.fontSize));
                layer.textAlignment = styleAlignValue;
                layer.lineHeight = styleObject.lineHeight);
                layer.setKerning(styleObject.characterSpacing);
                var paragraphStyle = layer.paragraphStyle();
                // paragraphStyle.setParagraphSpacing(0);

                // Apply Attributes
                layer.addAttribute_value(NSParagraphStyleAttributeName, paragraphStyle);


                // Name Style
                var name;

                var nameSegmentName;
                var nameSegmentFontWeight;
                var nameSegmentColor;
                var nameSegmentAlignment;

                if (styleList.Length < 2) {
                  var nameSegmentName = styleName
                } else {
                  var nameSegmentName = (n+1) + '. ' + styleName
                }

                if (styleObject.fontWeight.length < 2){
                  var nameSegmentFontWeight = ''
                } else {
                  var nameSegmentFontWeight = ' / ' + (w+1) + '. ' + styleFontWeight;
                }

                if(styleObject.color.length < 2) {
                  var nameSegmentColor = ''
                }else {
                  var nameSegmentColor = ' / ' + (c+1) + '. ' + styleColorName
                }

                if(styleObject.alignment.length < 2){
                  var nameSegmentAlignment = ''
                } else {
                  var nameSegmentAlignment = ' / ' + (a+1) + '. ' + styleAlignName
                }

                name = nameSegmentName + nameSegmentFontWeight +  nameSegmentColor + nameSegmentAlignment ;

                // Create Text Style
                var style = layer.style();

                var sharedTextStyles = context.document.documentData().layerTextStyles();

                let sharedStyle;

                const allocator = MSSharedStyle.alloc();

                sharedStyle = allocator.initWithName_style(name, style);

                sharedTextStyles.addSharedObject(sharedStyle);

                // TODO:
                // Add Representation

                // context.document.currentPage().addLayers([layer]);

                // if(n = 1){
                //   console.log("on first loop")
                // }

                styleCounter++;

          }

      }

    }

  }

}

var successMessage = styleCounter + " styles created"

console.log(successMessage);
context.document.showMessage(successMessage);
