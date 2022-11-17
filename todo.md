### ISSUES
---------
1- create brand makes the server hang if no slug provided

### Profile image 
```
<img
    :src="require(`@/assets/${user.image}`)"
    :alt="default_profile_image"    
 />
```

### colors (light)
border: #e0e0e0
text: rgba(0, 0, 0, 0.87)    

//


Solution #1: Add attribute fields dynamically
1- multiselect, it has the predefined attributes, choose all the needed ones
2- all select fields will be created dynamically


Solution #2: Add product schema (BEST)
1- addCategory page => add glasses and add required attributes 
(this can be hard-coded in the client, i.e. array for required attributes for each category, and in the jsx rend the attr fields dynamically)
2- addProduct Page => a category select field, the required attr fields will appear dynamically based on the selected category option
/* BEST OPTION => this will make us able to use the dynamic array of attr for each category inside the ProdcutItem Page, you can reder the select options dynamically, i.e. glasses=>shape, frameColor, lenses=>pack, focalType*/


codesheap

mountain



**Lets say we have 2 variations**
1- server => sends 2 variants to client
    [
      { color: "Yellow", Size: "M" },
      { color: "Red", Size: "XL" }
    ]


2- client => user selected { Size: "XL", color: "Red" }
            iterate over the 2 variants
              check which object found in the array and get the variantId (HINT: you can check equality of each object by iterating on each field)


**cloudinary Premimum???**