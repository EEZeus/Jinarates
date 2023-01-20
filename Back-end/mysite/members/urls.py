from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('university', views.UniversityView)

urlpatterns = [
    path('', include(router.urls)), 
   # path('login', views.login_user, name="login"),
    #path('register', views.register_user, name="register_user"),
    #path('logout', views.logout_user, name='logout')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)