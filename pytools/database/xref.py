#  -*- coding: utf-8 -*-
__author__ = "radek.augustyn@email.cz"

from pygeotoolbox.sharedtools import pathWithLastSlash
import pygeotoolbox.sharedtools.config as config


config.registerValue("cards.store.dataFileExtension", ".json", "cards.store.dataFileExtension", "")
config.registerValue("cards.store.dataPath", "C:/Users/Radek Augustyn/Desktop/KnowledgeBase/public/data", "cards.store.dataPath", "")
config.registerValue("xref.domain", "http://www.vugtk.cz/generalization/KnowledgeBase/Cards/", "xref.domain", "")
config.registerValue("xref.nextId", 0, "xref.nextId", "")


def getNextId():
    result = config.xref.nextId
    config.setValue("xref.nextId", config.xref.nextId + 1)

    return result


def getStoreFileName(itemId):
    return pathWithLastSlash(config.cards.store.dataPath) + str(itemId) + config.cards.store.dataFileExtension


def idToXRef(id):
    return config.xref.domain + str(id)


class XLink:
    UNKNOWN = 0
    CHILD = 1
    PARENT = 2
    EXTERNAL_LINK = 3

    def __init__(self, source, linkType=0):
        self.source = source
        self.linkType = linkType


    def asDict(self):
        return {
            "className": self.__class__.__name__,
            "sourceXRef": self.source.xRef,
            "linkType": self.linkType
        }
