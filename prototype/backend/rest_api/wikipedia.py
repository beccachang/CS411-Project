import requests
import json

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
        'limit': '10',
    }
    Request = S.get(url=URL, params=PARAMS)
    Wiki_articles = Request.json()
    titles = Wiki_articles[1]
    urls = Wiki_articles[3]
    title_event = {}
    for title in range(len(titles)):
        title_event[titles[title]] = urls[title]

    return json.dumps(title_event, indent=4)