from django.urls import path
from payments import views

urlpatterns = [
    path('payments/', views.PaymentList.as_view()),
    path('payments/<int:pk>', views.PaymentDetail.as_view()),
]
