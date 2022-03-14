from django.shortcuts import render
from django.http import HttpResponse,HttpRequest,JsonResponse
import xgboost as xgb
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import numpy as np
import json
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import GridSearchCV
from django.views.decorators.csrf import csrf_exempt
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
    Nitrogen = request.POST['nitrogen']
    Phosphorous = request.POST['Phosphorous']
    Potassium = request.POST['Potassium']
    temp = request.POST['temp']
    humidity = request.POST['humidity']
    ph_level = request.POST['ph']
    rainfall = request.POST['rainfall']
    ans = crop_recommend(Nitrogen,Phosphorous,Potassium,temp,humidity,ph_level,rainfall)
    # ans = crop_recommend(83, 45, 60, 28, 70.3, 7.0, 150.9)
    return JsonResponse({"predicted_value":str(ans)})


def fertilizer_recommend(Temparature,Humidity,Moisture,Soil_Type,Crop_Type,Nitrogen,Potassium,Phosphorous):
    df = pd.read_csv('C://Projects//SIH_farmer//Backend//ml_module//Fertilizer_Prediction.csv')
    encode_data = LabelEncoder()
    df['Soil Type'] = encode_data.fit_transform(df['Soil Type'])
    Soil_T = pd.DataFrame(zip(encode_data.classes_,encode_data.transform(encode_data.classes_)),columns=['Original','Encoded'])
    Soil_T = Soil_T.set_index('Original')
    print(Soil_T)
    df['Crop Type'] = encode_data.fit_transform(df['Crop Type'])
    Crop_T = pd.DataFrame(zip(encode_data.classes_,encode_data.transform(encode_data.classes_)),columns=['Original','Encoded'])
    Crop_T = Crop_T.set_index('Original')
    df['Fertilizer Name'] = encode_data.fit_transform(df['Fertilizer Name'])
    Fertilizer = pd.DataFrame(zip(encode_data.classes_,encode_data.transform(encode_data.classes_)),columns=['Original','Encoded'])
    Fertilizer = Fertilizer.set_index('Original')
    X_train, X_test, y_train, y_test = train_test_split(df.drop('Fertilizer Name',axis=1),df['Fertilizer Name'], train_size=0.7, shuffle=True, random_state=1)
    rand = RandomForestClassifier(random_state = 42)
    # print(rand,X_train,y_train)
    rand.fit(X_train,y_train)
    params = {
    'n_estimators':[300,400,500],
    'max_depth':[5,10,15],
    'min_samples_split':[2,5,8]
    }
    grid_rand = GridSearchCV(rand,params,cv=3,verbose=3,n_jobs=-1)
    grid_rand.fit(X_train,y_train)
    ans = grid_rand.predict([[Temparature,Humidity,Moisture,Soil_Type,Crop_Type,Nitrogen,Potassium,Phosphorous]])
    if ans[0] == 0:
        return "10-26-26"
    elif ans[0] ==1:
        return "14-35-14"
    elif ans[0] == 2:
        return "17-17-17"
    elif ans[0] == 3:
        return "20-20"
    elif ans[0] == 4:
        return "28-28"
    elif ans[0] == 5:
        return "DAP"
    else:
        return "Urea"

@csrf_exempt
def fertilizer_recommendations(request):
    Temparature = request.POST['temp']
    Humidity = request.POST['humidity']
    Moisture = request.POST['moisture']
    Soil_Type = request.POST['soil_type']
    Crop_Type = request.POST['crop_type']
    Nitrogen = request.POST['nitrogen']
    Potassium = request.POST['potassium']
    Phosphorous = request.POST['phosphorous']
    ans = fertilizer_recommend(Temparature,Humidity,Moisture,Soil_Type,Crop_Type,Nitrogen,Potassium,Phosphorous)
    # ans = fertilizer_recommend(34,65,62	,2,	1,	7,	9,	30)
    return JsonResponse({"predicted_value":ans})




