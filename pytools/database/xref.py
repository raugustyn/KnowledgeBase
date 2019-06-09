from pygeotoolbox.sharedtools import pathWithLastSlash
import pygeotoolbox.sharedtools.config as config


config.registerValue("cards.store.dataFileExtension", ".json", "cards.store.dataFileExtension", "")
config.registerValue("cards.store.dataPath", "C:/Users/Radek Augustyn/Desktop/KnowledgeBase/pytools/database/data", "cards.store.dataPath", "")
config.registerValue("xref.domain", "www.vugtk.cz/generalization/KnowledgeBase/Cards/", "xref.domain", "")
config.registerValue("xref.nextId", 0, "xref.nextId", "")


def getNextId():
    result = config.xref.nextId
    config.setValue("xref.nextId", config.xref.nextId + 1)

    return result


def getStoreFileName(itemId):
    return pathWithLastSlash(config.cards.store.dataPath) + str(itemId) + config.cards.store.dataFileExtension


def idToXRef(id):
    return config.xref.domain + str(id)
