import requests
import json
from pyyoutube import Api
from api_key import API_KEY




def get_youtube_urls(titles):
    api = Api(api_key=API_KEY)
    urls = []
    for val in titles:
        r = api.search_by_keywords(q=val, search_type=["video"], count=1, limit=1, order='relevance')
        url = 'https://www.youtube.com/watch?v=' + r.items[0].to_dict()['id']['videoId']
        urls.append(url)
    return urls

def get_wiki_articles(month, year):
    date = month + " " + str(year)
    S = requests.Session()
    URL = "https://en.wikipedia.org/w/api.php"

    subject = date
    PARAMS = {
        "action": "opensearch",
        "format": "json",
        "namespace": "0",
        "search": subject,
        'limit':'10',
    }

    Request = S.get(url=URL, params=PARAMS)
    Wiki_articles = Request.json()
    titles = Wiki_articles[1]
    youtube_urls = get_youtube_urls(titles)
    urls = Wiki_articles[3]
    title_event = {}
    for title in range(len(titles)):
        title_event[titles[title]] = urls[title], youtube_urls[title]
    
    
    return json.dumps(title_event, indent=4)
print(get_wiki_articles("January", 2020))
