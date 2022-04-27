from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = 'home.html'


class PageElectrostatics(TemplateView):
    template_name = 'page-electrostatics.html'


class PageMolecularPhysics(TemplateView):
    template_name = 'molecular-physics-page.html'


class PageThermodynamics(TemplateView):
    template_name = 'page-thermodynamics.html'


class PageMechanics(TemplateView):
    template_name = 'page-mechanics.html'
# Create your views here.
