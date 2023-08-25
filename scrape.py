import requests
from bs4 import BeautifulSoup

url = "https://ko.wiktionary.org/wiki/%EB%B6%80%EB%A1%9D:%ED%95%9C%EB%AC%B8_%EA%B5%90%EC%9C%A1%EC%9A%A9_%EA%B8%B0%EC%B4%88_%ED%95%9C%EC%9E%90_1800"

response = requests.get(url)
if response.status_code == 200:
    soup = BeautifulSoup(response.content, "html.parser")
    
    td_elements = soup.find_all("td")[4:]
    
    with open("extracted_data.txt", "w", encoding="utf-8") as f:
        for td in td_elements:
            extracted_text = ''

            for content in td.contents:
                if content.name == 'a':
                    extracted_text += '{\n\tquestion: \'' + content.get_text(strip=True) + '\',\n\tanswer: \''
                elif content.name == 'small':
                    small_text = content.get_text(strip=True)
                    #extracted_text += small_text[:1]
                    
                    a_tags = content.find_all("a")
                    for a_tag in a_tags:
                        extracted_text += a_tag.get_text(strip=True) + ' '
                        a_len = len(a_tag.get_text(strip=True))

                    extracted_text += small_text[a_len + 1:-1] + '\'\n},\n'
            if extracted_text:
                f.write("{}".format(extracted_text))
    print("Scrape complete.")
else:
    print("Failed to retrieve the page.")
