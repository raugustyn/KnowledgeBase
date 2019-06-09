from pygeotoolbox.sharedtools import saveDictToJSON

from json import load
import os
import xref

import pygeotoolbox.sharedtools.config as config
config.registerValue("cards.store.skippedKeyNames", [], "skippedKeyNames", "")


class Card:
    def __init__(self, id=None):
        if id == None:
            self.id = xref.getNextId()
        else:
            self.id = id
            self.load()


    def xRef(self):
        return xref.idToXRef(self.id)


    def __repr__(self):
        return "Card(%s)" % self.id


    def fromJSON(self, data):
        self.id = data["id"]


    def asDict(self):
        result = {}
        for key, value in self.__dict__.iteritems():
            if key not in config.cards.store.skippedKeyNames:
                #if key == "childern":
                #    value = map(lambda child: child.xref(), value)
                result[key] = str(value)
        return result


    def load(self):
        fileName = xref.getStoreFileName(self.id)
        if os.path.exists(fileName):
            jsonData = load(open(fileName, "r"))
            for key, value in jsonData.iteritems():
                setattr(self, key, value)


    def save(self):
        saveDictToJSON(self.asDict(), xref.getStoreFileName(self.id))


if __name__ == "__main__":
    import datetime
    for i in range(100):
        card = Card(i)
        card.caption = "My new caption is " + str(i)
        card.createDateTime = datetime.datetime.now()
        card.labels = ['Rule', 'Context Example']
        card.save()

    import pygeotoolbox.sharedtools.config as config

    config.save(True)

