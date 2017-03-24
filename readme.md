# Coding Test
This test consists of three (3) sections.

Part 1: consists of Angular questions.

Part 2: consists of Express/Mongoose questions.

Part 3: unit testing descriptions.

This is an 'open book' test. You can use any resources
you may need to reference, but write your own original code.
DO NOT COPY any code found on Stack Overflow or any other resource.
Be aware of and use coding best practices including OOP and 
SoC when creating your code. The files included are for general template 
purposes - create additional files if necessary to follow best
practices and maintain clean SoC and modularity.

Please track your time and include the time you spent working on this
test (time.txt) with the rest of the files when you submit this project.

To submit your final project, please zip your completed files and name
the final zipped file with the following file naming format:
asm-assessment-[firstname.lastname]-[yyyy.mm.dd].zip
without the brackets.

## Angular
There are 4 numbered index[n].html files and four index.controller[n].js
files. Examples of the final styled views are in the /final folder.

Implement controllers, styles and add any additional files necessary
to complete the following exercises.

### index1.html

Implement an AJAX call to the specified REST API (API Posts) 
and display the items in the UI. See final/item.png for an example 
of what the final view should look like with styling applied.

### index2.html

Copy your implementation from the first exercise (index1.html) 
and refactor to add a click handler to each item displayed in the left panel. 
When a user clicks on an item, that item's comments are displayed 
in the right panel. 
When a user hovers over an item in the left or right, that item
should be highlighted.
Use the API Comments for the post comment data. 
See final/item-comments.png for an example of the final view. 

### index3.html

Copy your implementation from the second exercise (index2.html)
and refactor your code to create a separate file or files to fetch 
data from the API.

### index4.html

Copy your implementation from the third exercise (index3.html)
and refactor your code again to create a separate file or files for the 
left and right panels. The widgets should use the following HTML tag-names:
post-items
comment-items

## Node / Express / Mongoose
There are two supplied files for this section. Add more files 
if necessary to create easily maintainable, modular code.

Although this is not functional code (no DB), the purpose is
to create the files necessary to manage data in a simulated 
Express API. 
This does not need to connect to an actual MongoDB server,

### post.server.routes.js
Implement routes to simulate CRUD operations,
but it should be clean, functional code.

### post.server.model.js
Create a mongoose model using the object described in the 
comments in the file.

## Unit testing
Please describe how you would test the following. 
Specifically, 
1. What framework(s) you would use
2. How you wrote the code to allow it to be unit tested. 
3. What challenges do you see? Include sample code if you wish.
Include this explanation in a file named 'unit-testing.txt'.

Describe testing the following:

1. Unit test the controller you created for index1.controller.js
2. Unit test the UI you created for index1.html to verify it displays correctly.
3. Unit test the 'widgets' you created.
4. Unit test the REST API.
