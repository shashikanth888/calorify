import cv2 as cv
import base64, io, math
import numpy as np
import random as rng
from imageio import imread
import matplotlib.pyplot as plt
from flask import Flask, jsonify, request

app = Flask(__name__)
rng.seed(12345)

def thresh_callback(val, src_gray):
    threshold = val
    
    canny_output = cv.Canny(src_gray, threshold, threshold * 2)
    
    contours, _ = cv.findContours(canny_output, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)
    maxarea = max([ cv.contourArea(i) for i in contours ])
    maxcontour = None

    contours_poly = None
    boundRect = None
    centers = None
    radius = None
    for i, c in enumerate(contours):
        if cv.contourArea(c) == maxarea:
            maxcontour = c
            contours_poly = cv.approxPolyDP(c, 3, True)
            boundRect = cv.boundingRect(contours_poly)
            centers, radius = cv.minEnclosingCircle(contours_poly)
    
    drawing = np.zeros((canny_output.shape[0], canny_output.shape[1], 3), dtype=np.uint8)
    
    color = (rng.randint(0,256), rng.randint(0,256), rng.randint(0,256))
    cv.rectangle(drawing, (int(boundRect[0]), int(boundRect[1])), \
        (int(boundRect[0]+boundRect[2]), int(boundRect[1]+boundRect[3])), color, 2)
    cv.circle(drawing, (int(centers[0]), int(centers[1])), int(radius), color, 2)
    # cv.imshow('Contours', drawing)
    return radius, boundRect

def size(data):
    b64_bytes = base64.b64encode(data)
    b64_string = b64_bytes.decode()
    img = imread(io.BytesIO(base64.b64decode(b64_string)))
    cv_img = cv.cvtColor(img, cv.COLOR_RGB2BGR)
    cv.imwrite("food.jpg", cv_img)

    src = cv.imread(cv.samples.findFile("food.jpg"))
    if src is None:
        print('Could not open or find the image')
        return
    src_gray = cv.cvtColor(src, cv.COLOR_BGR2GRAY)
    src_gray = cv.blur(src_gray, (3,3))
    ret, src_gray = cv.threshold(src_gray, 127, 255, cv.THRESH_TOZERO)

    # source_window = 'Source'
    # cv.namedWindow(source_window)
    # cv.imshow(source_window, src)
    # max_thresh = 255
    thresh = 100
    # cv.createTrackbar('Canny thresh:', source_window, thresh, max_thresh, thresh_callback)
    radius, rect = thresh_callback(thresh, src_gray)
    cv.waitKey()
    return math.pi*(radius*2.54/96)**2, rect

@app.route('/')
def record_food():
    urltop = request.args.get('urlside')
    urlside = request.args.get('urltop')
    area, recttop = size(urltop)
    _, rectside = size(urlside)
    return jsonify(
        area=area,
        height=rectside[3]-rectside[1],
        width=recttop[3]-recttop[1],
        length=recttop[2]-recttop[0]
        )

if __name__ == '__main_':
    app.run(debug=True, port=5000) #run app in debug mode on port 5000