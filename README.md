# calorify
Inspiration
We wanted to build a health hack. What more can keep us healthy more than the food we eat. We wanted to explore various ways of understanding the food we eat.

What it does
Evaluates the calories and nutrients in your food. This information is just a few clicks away. Through our application, one can take a photo and get information about their diet.

How we built it
We built a react based web application and integrated it with node js backend. Node js will parse the image to a machine learning model provided by clarifai. We trained this model to detect various food items. This model identifies the food and returns its name. We will then pass the food images to a volume estimator module developed in python. Once the volume is estimated, the information about the food is obtained by calling nutritionx apis.

Challenges we ran into
Too much to do and not enough time. Working on react native mobile application restrained us in developing image parser to the backend. We tried using google vision api for the food identification but the model required beta version to result in a good estimate. Drawing contour lines for the volume estimation was very hard.

Accomplishments that we're proud of
Developed an application that has a huge potential.

What we learned
A lot of open-source interesting technologies that are useful. A deeper understanding of Nodejs and Reactjs.

What's next for Calorify
Being able to aggregate the results of nutrition/calory intake. Food suggestions to improve the lacking areas of nutrients.
