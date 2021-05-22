from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "index.html"
    
    def get_context_data(self):
        ctxt = super().get_context_data()
        ctxt["username"] = ""
        return ctxt
    

class AboutView(TemplateView):
    template_name = "about.html"
    
    def get_context_data(self):
        ctxt = super().get_context_data()
        ctxt["quizs"] = [
            "箱根駅伝クイズ（2017(93回)〜2021(97回))",
            "箱根駅伝クイズ（2012(88回)〜2016(92回)）"
 
        ]
        ctxt["num_services"] = 2
        return ctxt

class Hakone9397View(TemplateView):
    template_name = "hakone9397.html"

class Hakone8892View(TemplateView):
    template_name = "hakone8892.html"