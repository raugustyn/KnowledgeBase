#  -*- coding: utf-8 -*-
__author__ = "radek.augustyn@email.cz"


import os
from json import load
from pygeotoolbox.sharedtools import Container, getFileExtension, extractFileName, pathLeaf, saveJSONtoJavaScript
import pygeotoolbox.sharedtools.log as log
from xref import XLink
from card import Card


config = Container({
    "basePath": "C:/ms4w/Apache/htdocs/Generalizace/webCartographersKnowledge/Ontologies/",
    "dataFileExtension": ".json"
})


class Importer:
    def __init__(self):
        self.cards = []


    def getCard(self, jsonFileName):
        if os.path.exists(jsonFileName):
            content = load(open(jsonFileName, "r"))
            result = Card()
            result.cardType = "KnowledgeBaseCard"
            result.caption = content["caption"]["text"]
            result.description = content["description"]["text"]

            self.cards.append(result)
            return result
        else:
            return None


    def processFile(self, parentCard, fileName):
        if os.path.exists(fileName):
            content = load(open(fileName, "r"))
            card = Card()
            card.cardType = "KnowledgeBaseCard"
            card.caption = content["caption"]["text"]
            card.description = content["description"]["text"]
            if parentCard:
                card.addReference(XLink(parentCard, XLink.PARENT))
            log.info("#%d-%s loaded from '%s'" % (card.id, card.caption, fileName))

            self.cards.append(card)

            return card


    def processPath(self, parentCard, path, recurse=True):
        log.openSection("Importing directory %s" % (path))

        containerCard = self.processFile(None, path + os.sep + extractFileName(path) + ".cs" + config.dataFileExtension)
        if containerCard:
            childern = []
            for name in os.listdir(path):
                itemPath = path + os.sep + name
                if os.path.isdir(itemPath):
                    if recurse:
                        subDirCard = self.processPath(containerCard, itemPath + os.sep, recurse)
                        if subDirCard ==  None:
                            pass
                        else:
                            childern.append(XLink(subDirCard, XLink.CHILD))
                else:
                    if getFileExtension(name.lower()) == config.dataFileExtension:
                        card = self.processFile(containerCard, itemPath)
                        if containerCard == None:
                            containerCard = card

            if containerCard and childern:
                containerCard.references.extend(childern)
                log.info("%d child(s)" % len(childern))
        else:
            log.error("Card file not found...")

        log.closeSection()

        return containerCard


    def save(self):
        for card in self.cards:
            card.save()


if __name__ == "__main__":
    importer = Importer()
    importer.processPath(None, config.basePath)
    importer.save()
