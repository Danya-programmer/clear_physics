from django.urls import path
from .views import (HomePageView,
                    PageMechanics,
                    PageElectrostatics,
                    PageThermodynamics,
                    PageMolecularPhysics)


urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('mechanics/', PageMechanics.as_view(), name='mechanics'),
    path('electrostatics/', PageElectrostatics.as_view(), name='electrostatics'),
    path('thermodynamics/', PageThermodynamics.as_view(), name='thermodynamics'),
    path('molecular_physics/', PageMolecularPhysics.as_view(), name='molecular_physics'),
]