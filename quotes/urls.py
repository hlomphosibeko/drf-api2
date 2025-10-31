from django.urls import path
from quotes import views

urlpatterns = [
    path('quotes/', views.QuoteList.as_view()),
    path('quotes/<int:pk>', views.QuoteDetail.as_view()),
]
