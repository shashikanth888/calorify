# calorify
What it does - 
Evaluates the calories and nutrients in your food. This information is just a few clicks away. Through our application, one can take a photo and get information about their diet.

How we built it - 
We built a react based web application and integrated it with node js backend. Node js will parse the image to a machine learning model provided by clarifai. We trained this model to detect various food items. This model identifies the food and returns its name. We will then pass the food images to a volume estimator module developed in python. Once the volume is estimated, the information about the food is obtained by calling nutritionx apis.

What's next for Calorify
Being able to aggregate the results of nutrition/calory intake. Food suggestions to improve the lacking areas of nutrients.
