from django.shortcuts import render
from django.http import HttpResponse,HttpRequest,JsonResponse
import xgboost as xgb
import pandas as pd
from sklearn.model_selection import train_test_split
import numpy as np
import json
# Create your views here.
def crop_recommend(Nitrogen,Phosphorous,Potassium,temp,humidity,ph_level,rainfall):
    df = pd.read_csv('C://Projects//SIH_farmer//Backend//ml_module//crop_recommendation.csv')
    features = df[['N', 'P','K','temperature', 'humidity', 'ph', 'rainfall']]
    target = df['label']
    Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.2,random_state =2)
    XB = xgb.XGBClassifier()
    XB.fit(Xtrain,Ytrain)
    return XB.predict(np.array([[Nitrogen,Phosphorous,Potassium,temp,humidity,ph_level,rainfall]]))

def crop_recommendations(request):
    # Nitrogen = request.POST['nitrogen']
    # Phosphorous = request.POST['Phosphorous']
    # Potassium = request.POST['Potassium']
    # temp = request.POST['temp']
    # humidity = request.POST['humidity']
    # ph_level = request.POST['ph']
    # rainfall = request.POST['rainfall']
    # ans = crop_recommendations(Nitrogen,Phosphorous,Potassium,temp,humidity,ph_level,rainfall)
    ans = crop_recommend(83, 45, 60, 28, 70.3, 7.0, 150.9)
    return JsonResponse({"predicted_value":str(ans)})



    