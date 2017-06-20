//colour-palettes-the-SCSS-way

var color1 = [
    '.color-1',
    '.color-2',
    '.color-3',
    '.color-4',
    '.color-5',
    '.color-6',
    '.color-7',
    '.color-8',
    '.color-9',
    '.color-10'
    ];

var color2 = [
    '.color-11',
    '.color-12',
    '.color-13',
    '.color-14',
    '.color-15',
    '.color-16',
    '.color-17',
    '.color-18',
    '.color-19',
    '.color-20'
    ];

var color3 = [
    '.color-21',
    '.color-22',
    '.color-23',
    '.color-24',
    '.color-25',
    '.color-26',
    '.color-27',
    '.color-28',
    '.color-29',
    '.color-30'
    ];

var color4 = [
    '.color-31',
    '.color-32',
    '.color-33',
    '.color-34',
    '.color-35',
    '.color-36',
    '.color-37',
    '.color-38',
    '.color-39',
    '.color-40'
    ];

var color5 = [
    '.color-41',
    '.color-42',
    '.color-43',
    '.color-44',
    '.color-45',
    '.color-46',
    '.color-47',
    '.color-48',
    '.color-49',
    '.color-50'
    ];

var color6 = [
    '.color-51',
    '.color-52',
    '.color-53',
    '.color-54',
    '.color-55',
    '.color-56',
    '.color-57',
    '.color-58',
    '.color-59',
    '.color-60'
    ];

var color7 = [
    '.color-61',
    '.color-62',
    '.color-63',
    '.color-64',
    '.color-65',
    '.color-66',
    '.color-67',
    '.color-68',
    '.color-69',
    '.color-70'
    ];

var color8 = [
    '.color-71',
    '.color-72',
    '.color-73',
    '.color-74',
    '.color-75',
    '.color-76',
    '.color-77',
    '.color-78',
    '.color-79',
    '.color-80'
    ];


jQuery(document).ready(function(){

    //call function on arrays
    color1.forEach(myFunction);
    color2.forEach(myFunction);
    color3.forEach(myFunction);
    color4.forEach(myFunction);
    color5.forEach(myFunction);
    color6.forEach(myFunction);
    color7.forEach(myFunction);
    color8.forEach(myFunction);

    
    //run output function
    function myFunction(item, index) {
        
        
        //get card backgound rgb value
        var hexcolor = $('.card-image', $(item)).css('backgroundColor');
        hexc(hexcolor);
        
        //print hex value text
        jQuery( '.hex-color', $(item) ).text( 'Hex: ' +  color );
        
        //print rgb value text
        jQuery( '.rgb-color', $(item) ).text( hexcolor ); 
            
        
    }

    //converts RGB to Hex
    //http://stackoverflow.com/questions/15716702/get-background-color-in-000-format-and-not-rgb
    var color = '';
    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        color = '#' + parts.join('');

        return color;
    }

});
