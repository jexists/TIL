from django.shortcuts import render
from django.http import JsonResponse
import requests

# Create your views here.
def search(request, keyword):
  result = requests.post('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
    'confmKey': 'devU01TX0FVVEgyMDIxMDQwMzIzNTMwODExMTAwNDU=',
    'keyword': keyword,
    'resultType': 'json',
  })
  # result.json()
  return JsonResponse(result.json(), json_dumps_params={'ensure_ascii': False})
  # return JsonResponse({'keyword': keyword}, json_dumps_params={'ensure_ascii': False})
  # return JsonResponse({'name': 'jexists', 'test': 1})