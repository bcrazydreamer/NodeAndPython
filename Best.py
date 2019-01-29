import sys
import requests
import html5lib # pip3 install html5lib
from bs4 import BeautifulSoup
import re
search = sys.argv[1]
results = 10 #how many link we want
page = requests.get("https://www.google.com/search?q={}&num={}".format(search, results))
soup = BeautifulSoup(page.content, "html5lib")
links = soup.findAll("a")
for link in links :
    link_href = link.get('href')
    if "url?q=" in link_href and not "webcache" in link_href:
    	print(link.get('href').split("?q=")[1].split("&sa=U")[0])
