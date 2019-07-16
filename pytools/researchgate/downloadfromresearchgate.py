#  -*- coding: utf-8 -*-
__author__ = "radek.augustyn@email.cz"
import pygeotoolbox.sharedtools.log as log

from HTMLParser import HTMLParser

class MyHTMLParser(HTMLParser):
    AUTHOR_LIST = 1
    AUTHOR_FLEX_ITEM = 2

    def __init__(self):
        HTMLParser.__init__(self)
        self.tag = None
        self.lastStartTag = None
        self.lastData = None
        self.item = {}


    def getAttr(self, attrName, attrs):
        if attrs:
            filtered = filter(lambda x: x[0] == attrName, attrs)
            if filtered:
                return filtered[0][1]


    def handle_starttag(self, tag, attrs):
        if tag == "h1":
            for attr in attrs:
                name, value = attr
                if name == "itemprop" and value == "headline":
                    log.info("HeadLine Started")
                    self.tag = "HeadLine Started"

        if tag == "a" and self.tag == MyHTMLParser.AUTHOR_FLEX_ITEM and self.getAttr("class", attrs) == "nova-e-link nova-e-link--color-inherit nova-e-link--theme-bare":
            log.info("AUTHOR LINK")
            authors = self.item.get("authors", [])
            authors.append(self.getAttr("href", attrs))
            self.item["authors"] = authors

        if tag == "li" and self.getAttr("class", attrs) == "nova-e-list__item publication-author-list__item":
            log.info("AUTHOR_LIST")
            self.tag = MyHTMLParser.AUTHOR_LIST


        if tag == "div" and self.tag == MyHTMLParser.AUTHOR_LIST and self.getAttr("class", attrs) == "nova-l-flex__item":
            log.openSection("AUTHOR_FLEX_ITEM start " + str(MyHTMLParser.AUTHOR_FLEX_ITEM))
            self.tag = MyHTMLParser.AUTHOR_FLEX_ITEM



    def handle_endtag(self, tag):
        if self.tag in [MyHTMLParser.AUTHOR_LIST, MyHTMLParser.AUTHOR_FLEX_ITEM]:
            log.info("end tag: " + tag)
            log.info(tag in ["li", "div"])

        if tag == "h1" and self.tag == "HeadLine Started":
            log.info("Headline Ended")
            self.item["caption"] = self.lastData
            self.tag = None

        if tag in ["li"] and self.tag in [MyHTMLParser.AUTHOR_LIST, MyHTMLParser.AUTHOR_FLEX_ITEM]:
            log.closeSection("ITEM ENDED " + str(self.tag))
            self.tag = None


    def handle_data(self, data):
        self.lastData = data


DOWNLOAD_SPAN = '<span class="nova-c-button__label gtm-download-fulltext-btn-header">Download full-text PDF</span>'
CAPTION_TAG = '<h1'
PERSON_STARTTAG = '<a class="nova-e-link nova-e-link--color-inherit nova-e-link--theme-bare"'
"""
<a class="nova-e-link nova-e-link--color-inherit nova-e-link--theme-bare" href="https://www.researchgate.net/profile/Sharon_Kazemi">Sharon Kazemi</a>
"""


if False:
    import urllib2

    fileData = urllib2.urlopen('https://www.researchgate.net/publication/254477565_A_REVIEW_OF_MAP_AND_SPATIAL_DATABASE_GENERALIZATION_FOR_DEVELOPING_A_GENERALIZATION_FRAMEWORK')
    html = fileData.read()
    fileData.close()
else:
    import codecs

    html = codecs.open("data01.html", "r", "utf-8").read()


# instantiate the parser and fed it some HTML
parser = MyHTMLParser()
parser.feed(html)

from json import dumps
log.info(dumps(parser.item, indent=4))
