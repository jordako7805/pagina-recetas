from kivy.app import App
from kivy.uix.webview import WebView
from kivy.uix.boxlayout import BoxLayout

class RecipeApp(App):
    def build(self):
        layout = BoxLayout(orientation='vertical')
        webview = WebView(url='https://jordako7805.github.io/pagina-recetas/')
        layout.add_widget(webview)
        return layout

if __name__ == '__main__':
    RecipeApp().run()
