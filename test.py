# import libraries
import urllib2
from bs4 import BeautifulSoup

# spedify the url
quote_page = 'http://rockauto.com'

#query the website and return the html to the variable "page"
page = urllib2.urlopen(quote_page)

# parse the html using beautiful soup and store in variable 'soup'
soup = BeautifulSoup(page, 'html.parser')

#Take out the <div> of a name and get its value
name_box = soup.find('input', attrs={'class': "name"})

#strip() is used to remove starting and traililng print name
name = name_box.text.strip()