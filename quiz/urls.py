from django.urls import path

from .views import IndexView, AboutView,Hakone9397View,Hakone8892View

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('about/', AboutView.as_view(), name="about"),
    path('hakone9397/', Hakone9397View.as_view(), name="hakone9397"),
    path('hakone8892/', Hakone8892View.as_view(), name="hakone8892"),
]