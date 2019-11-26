# CALORIFY

Introduction:
-------------

This is our HackWestern6 submission. Unhealthy eating and physical inactivity are leading causes of death is the US, contributing to about 700,000 deaths per year. By balancing your diet and incorporating some physical activity, research has shown that chances of heart diseases, type 2 diabetes, and cancer are much lower.

Since the solution is so simple, why are there still so many deaths? Turns out humans are lazy, the process of tracking what you eat is long and boring. Applications require you to type or say exactly what you ate and how much you ate so that they can crunch the numbers and give you the result. This requires a scale, and nobody except bodybuilders want to weigh their food. it just takes too much time!

Our Solution:
-------------

Instead of the tedious task of logging everything you eat, we designed an application where all you have to do is take a picture of your food to get an estimate of the nutrients you are getting.

We trained a object recognition model to detect the food, used OpenCV for image processing to draw contour lines and bounding boxes to approximate the volume, and used some scientific and mathematical calculations to calcuate the mass of the object. Using the mass we are able to query a database and return appropriate nutritional results to the user.

As a high level overview: We have a Node js backend communicating with a python microservice we built for image processing. The frontend was built using react and bootstrap. Our node backend will receive the image taken from a camera and send this to the object detection model to detect the food. This model identifies the food and returns its name. We then process the image by estimating the food's height, width, and length for volume calculation. Once the volume is estimated, we map the food to its density to obtain it's mass which is used to query a database for nutritional information presented to the user.

Next Steps:
-----------

Given only 36 hours to write a working application, we did as much as we could but there are still lots to be done. Our estimation method is not perfect as it doesn't take into consideration the scale factor of the image. If we included a calibration object in the picture and used that to scale the image, our accuracy will be greatly improved.

Currently, we only trained the model to detect single objects, if the food was a bowl, smoothie, or mix of multiple ingredients it is not handled. To improve upon this requires further training of the model to classify all ingredients in the picture and a sum calculation of the nutrients provided by each.

Lastly, a summarization view/tracking view with graphs and charts to display total nutrients per day and a weekly email with average nutrional values would greatly improve the UI of our app.

Overall:
--------

Overall, we believe that this could be the future of macro tracking apps. The simplistic and user-friendly approach allows for lazy people to have an idea of what they are putting into their bodies so they can lead a healthier lifestyle.
