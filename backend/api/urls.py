from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProfileViewSet, SkillViewSet, TechnologyViewSet,
    ExperienceViewSet, EducationViewSet, ProjectViewSet,
    ContactMessageViewSet
)

router = DefaultRouter()
router.register(r'profile', ProfileViewSet, basename='profile')
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'technologies', TechnologyViewSet, basename='technology')
router.register(r'experience', ExperienceViewSet, basename='experience')
router.register(r'education', EducationViewSet, basename='education')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'contact/messages', ContactMessageViewSet, basename='contact-message')

urlpatterns = [
    path('', include(router.urls)),
    path('health/', lambda request: __import__('rest_framework.response', fromlist=['Response']).Response({'status': 'OK'})),
]

