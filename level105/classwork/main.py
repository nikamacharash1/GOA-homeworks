import re
def domain_name(url):
    match = re.search(r'(?:https?://)?(?:www\.)?([^/]+)', url)
    if match:
        return match.group(1).split('.')[0]
    return None