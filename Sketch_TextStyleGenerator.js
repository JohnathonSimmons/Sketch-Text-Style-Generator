
var colors =
  [
        // Order these in sort order you would expect in Sketch's Menu

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
    ]

//Currently only supporting 1 font family

var fontFamilies = {
    sans: 'Roboto',
}

var fontWeights = ['Regular', 'Light', 'Medium', 'Bold', 'Black',]

var styleList =
  [
    {
      name: 'h1',
      fontFamily: fontFamilies,
      fontWeight: ['Light'],
      fontSize: 44,
      lineHeight: 50,
      characterSpacing: -.4,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'h2',
      fontFamily: fontFamilies,
      fontWeight: ['Light'],
      fontSize: 32,
      lineHeight: 36,
      characterSpacing: -.4,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'h3',
      fontFamily: fontFamilies,
      fontWeight: ['Light', 'Bold'],
      fontSize: 24,
      lineHeight: 28,
      characterSpacing: -.3,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'h4',
      fontFamily: fontFamilies,
      fontWeight: ['Light', 'Bold'],
      fontSize: 20,
      lineHeight: 22,
      characterSpacing: 0,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'h5',
      fontFamily: fontFamilies,
      fontWeight: ['Regular', 'Bold'],
      fontSize: 18,
      lineHeight: 20,
      characterSpacing: 0,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'h6',
      fontFamily: fontFamilies,
      fontWeight: ['Medium', 'Bold'],
      fontSize: 16,
      lineHeight: 20,
      characterSpacing: 0,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'Label',
      fontFamily: fontFamilies,
      fontWeight: ['Medium', 'Black'],
      fontSize: 12,
      lineHeight: 15,
      characterSpacing: .55,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'Paragraph',
      fontFamily: fontFamilies,
      fontWeight: ['Regular', 'Bold'],
      fontSize: 16,
      lineHeight: 24,
      characterSpacing: 0,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'Paragraph Small',
      fontFamily: fontFamilies,
      fontWeight: ['Regular', 'Bold'],
      fontSize: 14,
      lineHeight: 21,
      characterSpacing: 0,
      textTransform: null,
      color: colors,
      alignment: align,
    },
    {
      name: 'Caption',
      fontFamily: fontFamilies,
      fontWeight: ['Regular', 'Bold'],
      fontSize: 12,
      lineHeight: 17,
      characterSpacing: 0,
      textTransform: null,
      color: colors,
      alignment: align,
    },
  ]





function convertHex(c, opacity){
    hex = c.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = [ r/255 , g/255 , b/255 , opacity/100 ];
    return result;
}


// Want the type style format to follow: Name / Font Weight / Color / Alignment

var styleCounter = 0;

// Start the Name loop

for(n=0; n<styleList.length; n++){

  var styleObject = styleList[n];

  var styleName = styleObject.name;

  //console.log(styleName);

  //console.log(typeObjects[n].fontWeight.length);





  // Start the Weight Loop

  for(w = 0; w <= (styleObject.fontWeight.length - 1); w++){

    var styleFontWeight = styleObject.fontWeight[w];



    // Start the Color Loop

    for(c=0; c < styleObject.color.length; c++){

      var styleColorName = styleObject.color[c].name;
      var styleColorValue = styleObject.color[c].hexValue;

      var styleColorTransform = convertHex(styleColorValue, 100);

      var styleColorTransformed = NSColor.colorWithRed_green_blue_alpha(styleColorTransform[0], styleColorTransform[1],styleColorTransform[2],styleColorTransform[3]);

      //console.log(styleColorName, styleColorTransformed);


      // Start Alignment Loop

      for(a = 0; a < styleObject.alignment.length; a++){


        var styleAlignName = styleObject.alignment[a].type;
        var styleAlignValue = styleObject.alignment[a].value;
        var styleAlignDisplay = styleObject.alignment[a].display;

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

                // Add Representation

                // context.document.currentPage().addLayers([layer]);

//                if(n = 1){
//                  console.log("on first loop")
//                }

                styleCounter++;

          }

      }

    }

  }

}

var successMessage = styleCounter + " styles created"

console.log(successMessage);
context.document.showMessage(successMessage);
