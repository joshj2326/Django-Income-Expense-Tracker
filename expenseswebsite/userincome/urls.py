from django.urls import path
from . import views

from django.views.decorators.csrf import csrf_exempt


urlpatterns =[
   
    path('',views.index,name="income"),
    path('add-income', views.add_income, name="add-income"),
    path('edit-income/<int:id>', views.income_edit, name="income-edit"),
    path('income-delete/<int:id>', views.delete_income, name="income-delete"),
    path('search-income', csrf_exempt(views.search_income),
        name="search_income"),
    path('income_source_summary',views.income_source_summary,name="income_source_summary"),
    path('stats1',views.stats1_view,name="stats1"),
    path('exporti-csv',views.exporti_csv,name="exporti-csv"),
    path('exporti-excel',views.exporti_excel,name="exporti-excel"),
    path('exporti-pdf',views.exporti_pdf,name="exporti-pdf"),
    path('exports-pdf',views.exports_pdf,name="exports-pdf")
   
    
] 