from django.urls import path
from insurance import views

urlpatterns = [
    path('insurance/', views.InsurancePlanList.as_view()),
]
